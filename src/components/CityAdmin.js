import React, { useState } from 'react';
import { motion } from 'framer-motion';

function CityAdmin({ onClose }) {
  const [formData, setFormData] = useState({
    cityName: '',
    state: 'Kansas',
    roadType: 'Residential',
    subtype: 'Local',
    asphaltSpec: '',
    concreteSpec: '',
    subgradeReq: '',
    reference: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('City data to add:', formData);
    // Here you would send data to cloud
    alert(`City ${formData.cityName} added successfully!`);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        maxWidth: '500px',
        width: '90vw',
        maxHeight: '80vh',
        overflowY: 'auto',
        zIndex: 1001,
        cursor: 'move'
      }}
      draggable
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Add New City Specifications</h2>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>✕</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="cityName"
          placeholder="City Name"
          value={formData.cityName}
          onChange={handleInputChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}
        />

        <select name="state" value={formData.state} onChange={handleInputChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <option value="Kansas">Kansas</option>
          <option value="Missouri">Missouri</option>
        </select>

        <select name="roadType" value={formData.roadType} onChange={handleInputChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <option value="Residential">Residential</option>
          <option value="Collector">Collector</option>
          <option value="Arterial">Arterial</option>
        </select>

        <input
          type="text"
          name="asphaltSpec"
          placeholder="Asphalt Specification"
          value={formData.asphaltSpec}
          onChange={handleInputChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}
        />

        <input
          type="text"
          name="concreteSpec"
          placeholder="Concrete Specification"
          value={formData.concreteSpec}
          onChange={handleInputChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}
        />

        <input
          type="text"
          name="subgradeReq"
          placeholder="Subgrade Requirement"
          value={formData.subgradeReq}
          onChange={handleInputChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}
        />

        <button onClick={handleSubmit} className="btn btn-primary" style={{ width: '100%' }}>Add City</button>
      </div>
    </motion.div>
  );
}

export default CityAdmin;
