import React from 'react';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

interface IDrawPanelProps {
  data: any;
  setRightPanelType: Function;
}

export default function DrawPanel(props: IDrawPanelProps) {
  const { data, setRightPanelType } = props;
  
  const generateContent = () => {
    const output = [];
    for (const item of data) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              console.log(`点击的组件 id 为：${item.id}`);
              setRightPanelType(item.type);
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

    console.log('output: ', output);
    return output;
  };

  return <div className="draw-panel">{generateContent()}</div>;
}
