import React, { useState } from 'react';
import { cityData } from '../data/cityData';

function KCPavements() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRoadType, setSelectedRoadType] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);

  const roadTypes = ['Residential', 'Collector', 'Arterial'];
  const subtypes = {
    Residential: ['Access', 'Local', 'Collector'],
    Collector: ['Residential', 'Commercial', 'Industrial'],
    Arterial: ['Minor', 'Major']
  };

  const getSpecs = () => {
    if (!selectedCity || !selectedRoadType || !selectedSubtype) return null;
    const city = cityData.find(c => c.name === selectedCity);
    if (!city) return null;
    
    const typeKey = selectedRoadType.toLowerCase();
    const subtypeKey = selectedSubtype.toLowerCase();
    
    return city[typeKey]?.[subtypeKey];
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
      <h1 style={{ marginBottom: '30px' }}>KC Road Standards Database</h1>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>Select a city and road type to view specifications</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>City</label>
          <select value={selectedCity || ''} onChange={(e) => setSelectedCity(e.target.value)} style={{ width: '100%', padding: '10px' }}>
            <option value="">Select a city</option>
            {cityData.map(city => <option key={city.id} value={city.name}>{city.name}, {city.state}</option>)}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Road Type</label>
          <select value={selectedRoadType || ''} onChange={(e) => {
            setSelectedRoadType(e.target.value);
            setSelectedSubtype(null);
          }} style={{ width: '100%', padding: '10px' }}>
            <option value="">Select road type</option>
            {roadTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        {selectedRoadType && (
          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Subtype</label>
            <select value={selectedSubtype || ''} onChange={(e) => setSelectedSubtype(e.target.value)} style={{ width: '100%', padding: '10px' }}>
              <option value="">Select subtype</option>
              {subtypes[selectedRoadType].map(subtype => <option key={subtype} value={subtype}>{subtype}</option>)}
            </select>
          </div>
        )}
      </div>

      {getSpecs() && (
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '20px', color: '#ff8c00' }}>{selectedCity} - {selectedRoadType} {selectedSubtype}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3>Asphalt Specifications</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>{getSpecs().asphalt}</p>
            </div>
            <div>
              <h3>Concrete Specifications</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>{getSpecs().concrete}</p>
            </div>
          </div>

          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
            <h3>Subgrade Requirements</h3>
            <p style={{ fontSize: '16px' }}>{getSpecs().subgrade}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default KCPavements;
