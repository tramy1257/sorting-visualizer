import React from 'react';
import colors from '../../../../assets/colors';
//import Radium from radium;

const SORTED_COLOR = colors.green;
const UNSORTED_COLOR = colors.grey;

const bar = (props) => {
  const calcMargin = (barWidth) => {
    return barWidth / 30;
  };

  const barStyle = {
    height: (props.barHeight) + '%',
    width: props.barWidth + 'px',
    margin: calcMargin(props.barWidth) + 'px',
    backgroundColor: props.sorted ? SORTED_COLOR : UNSORTED_COLOR,
    order: props.barIdx
  };

  const textStyle = {
    color: 'white',
    marginTop: '10px',
    textAlign: 'center',
    padding: '0'
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
