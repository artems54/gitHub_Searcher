import React from 'react'
import "./style.css";

const Repo = (props) => {
    const {
        name,
        forks
    } = props

    return (
    <div className='repo'>
        <div>{name}</div>
        <div>{forks}</div>
    </div>
  )
}

export default Repo