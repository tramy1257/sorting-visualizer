import React from 'react';
import colors from '../../../../assets/colors';
import classes from './Button.module.css';

const button = (props) => {
  const btnStyle = {
    backgroundColor: colors.grey,
    color: colors.background
  };

  return (
      <button
        style = {props.active ? btnStyle : null}
        className = {classes.Button}
        onClick = {props.click}>{props.children}</button>
  );
};


export default button;
