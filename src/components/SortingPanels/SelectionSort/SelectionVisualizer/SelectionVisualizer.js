import React from 'react';
import classes from './SelectionVisualizer.module.css';
import Bar from '../../UI/Bar/Bar';

class selectionVisualizer extends React.Component{ 
  array = this.props.array;

  componentDidUpdate() {
    console.log('[SelectionVisualizer.js] componentDidUpdate');
  }

  render () {
    // Styling the div that contains all the bars
    const barsStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%'
    };

    // The list of bars
    let bars = this.array.map( (value, index) => {
      return <Bar 
        sorted={this.props.sorted}
        barIdx={index}
        value={value} 
        barHeight={value/Math.max(...this.array)*100}
        barWidth={80} 
        key={index} />;
    } );

    // Wrap the list of bars inside a div and style them
    bars = <div style={barsStyle}>{bars}</div>;

    return (
      <div className={classes.SelectionVisualizer}>
        {bars}
      </div>
    );
  } // render()

};

export default selectionVisualizer;
