import React from "react";
import "./style.css"
import abc1 from './img/abc1.png'
import abc2 from './img/abc2.png'
import a from './img/a.png'
import ap from './img/ap.png'
import abc from './img/abc.png'
import b from './img/b.png'
import bb from './img/bb.png'
import bk from './img/bk.jpg'
import c from './img/c.png'
import cat from './img/cat.png'
import d from './img/d.png';
import { Link } from "react-router-dom";


const Levels =()=>{

  window.onload = function what(){

    if (localStorage.getItem("name") !== null) {
      const main = document.getElementById('btnLogin');
      const externalHTML = localStorage.getItem("name");
        main.innerHTML = externalHTML;
    }
    }

    return(
<div>
<nav>
      <h2 className="logo">Typing kids</h2>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Home#about">About Us</Link></li>
        <li><Link to="/Levels">Get Started</Link></li>
      </ul>
      <div id='btnLogin'><Link to="/Login" className="btn">Login</Link></div>
    </nav>
  <div className="abc1">
    <img src={abc1} />
  </div>      
  <div className="tr">
    
  </div>
  <div className="levels">
    <div className="g1">
      <div id="l1" className="level">
        <h3>1</h3>
        <img id="abc" src={abc} alt="" />
        <div className="line" />
        <center><Link to='/Game' className="pp2">Start Here!</Link></center>
      </div>
      <div id="l2" className="level">
        <h3>2</h3>
        <img id="abc" className="a" src={a} alt="" />
        <div className="line" />
        <p className="pp2">A</p>
      </div>
      <div id="l3" className="level">
        <h3>3</h3>
        <img id="abc" src={ap} alt="" />
        <div className="line" />
        <p className>Apple</p></div>
      <div id="l4" className="level">
        <h3>4</h3>
        <img id="abc" className="a" src={b} alt="" />
        <div className="line" />
        <p className="pp2">B</p>
      </div>
    </div>
    <div className="g2">
      <div id="l5" className="level">
        <h3>5</h3>
        <img id="abc" src={bb} alt="" />
        <div className="line" />
        <p className="pp2">Bear</p>
      </div>
      <div id="l6" className="level">
        <h3>6</h3>
        <img id="abc" src={c} alt="" />
        <div className="line" />
        <p className="pp2">C</p>
      </div>
      <div id="l7" className="level">
        <h3>7</h3>
        <img id="abc" src={cat} alt="" />
        <div className="line" />
        <p className="pp2">Cat</p>
      </div>
      <div id="l8" className="level">
        <h3>8</h3>
        <img id="abc" src={d} alt="" />
        <div className="line" />
        <p className="pp2">D</p>
      </div>
    </div>
  </div>
</div>

        )
}
export default Levels