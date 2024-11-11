import React, { useState } from 'react';
import './DataEntryForm.css';

function DataEntryForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '2px solid green' }}>
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={{ flex: 1 }}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{ flex: 1 }}
            required
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="1234 Main St"
          value={formData.address}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px' }}
          required
        />

        <input
          type="text"
          name="address2"
          placeholder="Apartment, studio, or floor"
          value={formData.address2}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            style={{ flex: 1 }}
            required
          />
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            style={{ flex: 1 }}
            required
          >
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            style={{ flex: 1 }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Agree Terms & Condition?
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px' }}>
          <h3>Submitted Data</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Address 2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
          <p><strong>Agreed to Terms:</strong> {submittedData.agree ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default DataEntryForm;
