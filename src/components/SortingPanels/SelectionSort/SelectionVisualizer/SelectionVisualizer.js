import React from 'react';
import classes from './SelectionVisualizer.module.css';
import Bar from '../../UI/Bar/Bar';

class selectionVisualizer extends React.Component{ 
<<<<<<< HEAD
=======

>>>>>>> working-version
  componentDidUpdate() {
    console.log('[SelectionVisualizer.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.array !== this.props.array) ||
              (nextProps.sorted !== this.props.sorted);
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
<<<<<<< HEAD
    let bars = this.props.array.map( (value, index) => {
=======
    let bars = array.map( (value, index) => {
>>>>>>> working-version
      return <Bar 
        sorted={this.props.sorted}
        barIdx={index}
        value={value} 
<<<<<<< HEAD
        barHeight={value/Math.max(...this.props.array)*100}
=======
        barHeight={value/Math.max(...array)*100}
>>>>>>> working-version
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
