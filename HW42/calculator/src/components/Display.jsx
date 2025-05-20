import React from 'react';

export default function Display({ value }) {
  return (
    <input
      type="text"
      className="form-control text-end mb-3 display-box"
      value={value}
      readOnly
    />
  );
}
