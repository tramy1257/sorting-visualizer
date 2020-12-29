import React from 'react';
import classes from './Bars.module.css';
import Bar from '../../UI/Bar/Bar';

class Bars extends React.Component{ 
  /* Testing purpose
  componentDidUpdate() {
    console.log('[Bars.js] componentDidUpdate');
  }
  */
  shouldComponentUpdate(nextProps) {
    return nextProps.array !== this.props.array;
  }

  render () {
    const array = this.props.array;

    // Styling the div that contains all the bars
    const barsStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%'
    };

    // The list of bars
    let bars = array.map( (value, index) => {
      return <Bar 
        barIdx={index}
        value={value} 
        barHeight={value/Math.max(...array)*100}
        barWidth={80} 
        key={index} />;
    } );

    // Wrap the list of bars inside a div and style them
    bars = <div style={barsStyle}>{bars}</div>;

    return (
      <div className={classes.Bars}>
        {bars}
      </div>
    );
  } // render()

};

export default Bars;
