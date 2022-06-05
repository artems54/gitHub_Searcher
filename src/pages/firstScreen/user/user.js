import React from 'react'
import { Link } from "react-router-dom";
import "../user/style.css";

const User = (props) => {
    const {
        img,
        username,
        repo
    } = props

    return (
    <Link to={username} style={{ textDecoration: 'none' }}>
        <div className="user">
            <img src={img} className="img"/>
            <div>{username}</div>
            <div>{repo}</div>
        </div>
    </Link>
  )
}

export default User