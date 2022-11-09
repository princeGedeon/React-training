import React from 'react'

export default function Myheader(props) {
  return (
    <h1  style={{color:"red"}
}>
        {props.children}
    </h1>
  )
}
