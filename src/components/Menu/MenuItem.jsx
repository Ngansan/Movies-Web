import React from 'react'
import { randomRgbaColor } from '../../utils'; 
export default function MenuItem(props) {
    const {name, Icon} = props;
  return (
    <div className="subMenu">
        <Icon className="item" style={{ color: randomRgbaColor(1) }}/>
        <span>{name}</span>
    </div>
  );
}
