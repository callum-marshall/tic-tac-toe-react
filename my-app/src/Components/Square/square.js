/* eslint react/prop-types: 0 */
import React from 'react'

function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
