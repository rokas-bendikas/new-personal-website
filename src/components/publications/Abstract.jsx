import React from 'react'

import "./Publications.css"

export const Abstract = (props) => {
  return (
    <div id='abstract-text'>{props.publication.abstract}</div>
  )
}
