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
  };

  const textStyle = {
    color: 'white',
    marginTop: '5px',
    textAlign: 'center',
    padding: '0',
<<<<<<< HEAD
    fontSize: '14px'
=======
    fontSize: '15px'
>>>>>>> working-version
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
