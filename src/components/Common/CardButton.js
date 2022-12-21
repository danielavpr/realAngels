import { Card } from 'antd';
import React from 'react';

const CardButton = ({ title, description }) => {
  return (
    <button style={{background: 'none', border: 'none'}}>
      <Card hoverable style={{background: '#fafafa'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Card>
    </button>
  )
}

export default CardButton
