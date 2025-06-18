import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {
  return <h1>Hello from React!</h1>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
