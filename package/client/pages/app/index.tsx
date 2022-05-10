import React from 'react';
import './style.css'
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';

export default function App() {
  return (
    <div className="flex-row-space-between app">
      <LeftPanel></LeftPanel>
      <DrawPanel></DrawPanel>
      <RightPanel></RightPanel>
    </div>
  );
}
