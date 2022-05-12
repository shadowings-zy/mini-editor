import React from 'react';
import './style.css';
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-row-space-between app">
        <LeftPanel></LeftPanel>
        <DrawPanel></DrawPanel>
        <RightPanel></RightPanel>
      </div>
    </DndProvider>
  );
}
