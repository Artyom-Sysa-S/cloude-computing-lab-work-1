import React from 'react';

const footer = () => {
  return(
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">{(new Date()).getFullYear()} Pizza Builder</p>
    </footer>
  );
};

export default footer;
