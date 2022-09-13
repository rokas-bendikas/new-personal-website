import React from 'react'

import "./Publications.css"

export const Abstract = (props) => {
  return (
    <div className='publication-abstract'>{props.publication.abstract}</div>
  )
}
