import React, { useState } from 'react';
import './style.css';
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RIGHT_PANEL_TYPE } from '../../constants';

const MOCK_DRAW_DATA = [
  {
    id: 'text-1',
    type: 'text',
    data: '我是 1 号文字',
    color: '#FF0000',
    size: '12px',
    width: '100px',
    height: '20px',
    left: '100px',
    top: '100px'
  },
  {
    id: 'text-2',
    type: 'text',
    data: '我是 2 号文字',
    color: '#00FF00',
    size: '12px',
    width: '100px',
    height: '20px',
    left: '100px',
    top: '150px'
  },
  {
    id: 'text-3',
    type: 'text',
    data: '我是 3 号文字',
    color: '#0000FF',
    size: '12px',
    width: '100px',
    height: '20px',
    left: '100px',
    top: '200px'
  }
];

export default function App() {
  const [drawPanelData, setDrawPanelData] = useState([...MOCK_DRAW_DATA]);
  const [rightPanelType, setRightPanelType] = useState(RIGHT_PANEL_TYPE.NONE);
  const [rightPanelElementId, setRightPanelElementId] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-row-space-between app">
        <LeftPanel data={drawPanelData}></LeftPanel>
        <DrawPanel
          key={`${Math.floor(Math.random() * 1000)}-${drawPanelData.length}`}
          data={drawPanelData}
          setData={setDrawPanelData}
          setRightPanelType={setRightPanelType}
          setRightPanelElementId={setRightPanelElementId}
        ></DrawPanel>
        <RightPanel
          type={rightPanelType}
          data={drawPanelData}
          elementId={rightPanelElementId}
          setDrawPanelData={setDrawPanelData}
        ></RightPanel>
      </div>
    </DndProvider>
  );
}
