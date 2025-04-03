import React from 'react';

function ErrorDisplay({ message }) {
  return (
    <div>
      <p style={{ color: 'red' }}>Error: {message}</p>
    </div>
  );
}

export default ErrorDisplay;
