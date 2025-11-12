import React from 'react';

const StatCard = ({ label, value, color }) => {
  return (
    <div
      style={{
        padding: '12px',
        background: `${color}10`,
        borderRadius: '8px',
        border: `1px solid ${color}30`,
      }}
    >
      <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '22px', fontWeight: 'bold', color }}>{value}</div>
    </div>
  );
};

export default StatCard;
