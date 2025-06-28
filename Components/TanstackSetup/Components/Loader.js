import React from 'react';

export default function Loader() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '4px',
      background: 'linear-gradient(to right, #4facfe, #00f2fe)',
      zIndex: 1000, animation: 'loading 1s infinite alternate'
    }}>
      <style>
        {`
          @keyframes loading {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  );
}
