"use client";

import React from 'react';

/**
 * Next.js App Router requires a DEFAULT export.
 * This component acts as a wrapper for your static HTML.
 */
const MapPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        // This points to public/projects/chalinked/map/index.html
        src="/projects/chalinked/index.html"
        title="Bicycle Map Project"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default MapPage;