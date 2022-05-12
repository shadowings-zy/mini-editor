import React from 'react';
import { useDrag } from 'react-dnd';
import './style.css';

export default function TextComponent() {
  const [_, drag] = useDrag(() => ({
    type: 'text',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div className="text-component" ref={drag}>
      文字组件
    </div>
  );
}
