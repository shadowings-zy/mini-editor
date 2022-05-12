import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

export default function TextComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.TEXT
  }));

  return (
    <div className="text-component" ref={drag}>
      文字组件
    </div>
  );
}
