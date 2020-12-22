import React from 'react';
import colors from '../../../../assets/colors';
//import Radium from radium;

const UNSORTED_COLOR = colors.grey;

const bar = (props) => {
  // Style for bars
  const barStyle = {
    height: (props.barHeight) + '%',
    width: props.barWidth + 'px',
    margin: '2px',
    backgroundColor: UNSORTED_COLOR,
  };
  
  // Style for text
  const textStyle = {
    color: 'white',
    marginTop: '5px',
    textAlign: 'center',
    padding: '0',
    fontSize: '15px'
  }

  return (
    <div 
      id={'bar' + props.barIdx}
      style={barStyle}>
      <p style={textStyle}>{props.value}</p>
    </div>
  );
}

export default bar;
