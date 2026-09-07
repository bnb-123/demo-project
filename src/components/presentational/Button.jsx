import React from 'react'

export const Button = ({cssClass , onClickFunc}) => {
  return (
    <button className={cssClass} onClick={onClickFunc}>Delete</button>
  )
}
    