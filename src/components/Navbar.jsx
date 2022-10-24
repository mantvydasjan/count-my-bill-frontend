import React from "react";
import {Link} from 'react-router-dom';

export default() => {
  return (
    <div className="navbar">
        <ul className="navbar--ul">
        <li className="navbar--li"><Link to="/">Home</Link></li>
        <li className="navbar--li"><Link to="/about">About Usz</Link></li>
        <li className="navbar--li"><Link to="/docs">Docs</Link></li>
        <li className="navbar--li"><Link to="/measurements">Measurements</Link></li>
        </ul>
     </div>
  );
}