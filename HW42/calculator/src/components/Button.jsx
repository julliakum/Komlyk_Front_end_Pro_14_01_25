import React from 'react';

export default function Button({ value, onClick }) {
  return (
    <button className="btn btn-outline-success m-1" onClick={onClick}>
      {value}
    </button>
  );
}
