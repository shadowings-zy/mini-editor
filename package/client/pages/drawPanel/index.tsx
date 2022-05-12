import React from 'react';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

interface IDrawPanelProps {
  data: any;
  setRightPanelType: Function;
  setRightPanelElementId: Function;
}

export default function DrawPanel(props: IDrawPanelProps) {
  const { data, setRightPanelType, setRightPanelElementId } = props;

  const generateContent = () => {
    const output = [];
    for (const item of data) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(item.type);
              setRightPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}
          </div>
        );
      }
    }

    return output;
  };

  return <div className="draw-panel">{generateContent()}</div>;
}
