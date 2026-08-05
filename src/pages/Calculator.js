import React, { useState } from 'react';
import { cityData } from '../data/cityData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Calculator() {
  const [city, setCity] = useState('');
  const [roadType, setRoadType] = useState('');
  const [subtype, setSubtype] = useState('');
  const [distance, setDistance] = useState('');
  const [unit, setUnit] = useState('miles');
  const [results, setResults] = useState(null);

  const roadTypes = ['Residential', 'Collector', 'Arterial'];
  const subtypes = {
    Residential: ['Access', 'Local', 'Collector'],
    Collector: ['Residential', 'Commercial', 'Industrial'],
    Arterial: ['Minor', 'Major']
  };

  const convertToMiles = (value, from) => {
    const conversions = {
      miles: 1,
      kilometers: 0.621371,
      feet: 1 / 5280,
      meters: 0.000621371
    };
    return value * conversions[from];
  };

  const calculateCosts = () => {
    if (!city || !roadType || !subtype || !distance) return;

    const selectedCity = cityData.find(c => c.name === city);
    if (!selectedCity) return;

    const miles = convertToMiles(parseFloat(distance), unit);
    const typeKey = roadType.toLowerCase();
    const costs = selectedCity.costs[typeKey][subtype.toLowerCase()];

    if (!costs) return;

    const asphaltInitial = costs.asphalt.initial * miles;
    const asphaltMaint = costs.asphalt.maintenance30yr * miles;
    const concreteInitial = costs.concrete.initial * miles;
    const concreteMaint = costs.concrete.maintenance30yr * miles;

    const lifecycleData = [
      { year: 0, asphalt: asphaltInitial, concrete: concreteInitial },
      { year: 12, asphalt: asphaltInitial + (asphaltMaint * 0.4), concrete: concreteInitial + (concreteMaint * 0.4) },
      { year: 15, asphalt: asphaltInitial + (asphaltMaint * 0.5), concrete: concreteInitial + (concreteMaint * 0.5) },
      { year: 24, asphalt: asphaltInitial + (asphaltMaint * 0.8), concrete: concreteInitial + (concreteMaint * 0.8) },
      { year: 30, asphalt: asphaltInitial + asphaltMaint, concrete: concreteInitial + concreteMaint }
    ];

    setResults({
      asphaltInitial,
      asphaltTotal: asphaltInitial + asphaltMaint,
      concreteInitial,
      concreteTotal: concreteInitial + concreteMaint,
      data: lifecycleData,
      miles
    });
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(num);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
      <h1 style={{ marginBottom: '30px' }}>Pavement Calculator</h1>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>Calculate lifecycle costs for asphalt vs. concrete</p>

      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>City</label>
            <select value={city} onChange={(e) => setCity(e.target.value)} style={{ width: '100%', padding: '10px' }}>
              <option value="">Select a city</option>
              {cityData.map(c => <option key={c.id} value={c.name}>{c.name}, {c.state}</option>)}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Road Type</label>
            <select value={roadType} onChange={(e) => {
              setRoadType(e.target.value);
              setSubtype('');
            }} style={{ width: '100%', padding: '10px' }}>
              <option value="">Select road type</option>
              {roadTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          {roadType && (
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Subtype</label>
              <select value={subtype} onChange={(e) => setSubtype(e.target.value)} style={{ width: '100%', padding: '10px' }}>
                <option value="">Select subtype</option>
                {subtypes[roadType].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Distance</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Enter distance" style={{ width: '100%', padding: '10px' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)} style={{ width: '100%', padding: '10px' }}>
              <option value="miles">Miles</option>
              <option value="kilometers">Kilometers</option>
              <option value="feet">Feet</option>
              <option value="meters">Meters</option>
            </select>
          </div>
        </div>

        <button onClick={calculateCosts} className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>Calculate Costs</button>
      </div>

      {results && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#ff8c00', marginBottom: '10px' }}>Asphalt</h3>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Initial Cost (1 mile):</strong> {formatNumber(results.asphaltInitial / results.miles)}</p>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Total (Your Distance):</strong> {formatNumber(results.asphaltInitial)}</p>
              <p style={{ fontSize: '14px' }}><strong>30-Year Total:</strong> {formatNumber(results.asphaltTotal)}</p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#ff8c00', marginBottom: '10px' }}>Concrete</h3>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Initial Cost (1 mile):</strong> {formatNumber(results.concreteInitial / results.miles)}</p>
              <p style={{ fontSize: '14px', marginBottom: '10px' }}><strong>Total (Your Distance):</strong> {formatNumber(results.concreteInitial)}</p>
              <p style={{ fontSize: '14px' }}><strong>30-Year Total:</strong> {formatNumber(results.concreteTotal)}</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>30-Year Lifecycle Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={results.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => formatNumber(value)} />
                <Legend />
                <Bar dataKey="asphalt" fill="#1a1a1a" name="Asphalt" />
                <Bar dataKey="concrete" fill="#ff8c00" name="Concrete" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>Note: All numerical values are estimates based off bid tabs</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
