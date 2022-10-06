import React from 'react'
import './style.css'
const Home =()=>{
    return (
<div>
  <div className="hero"> 
    <nav>
      <h2 className="logo">Typing kids</h2>
      <ul>
        <li><a href="#">Get Started</a></li>
        <li><a href="#">School Edition</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <a href="#" className="btn">Login</a>
    </nav>
    <img className="img-p1" src="img/i.png" />
    <div className="content">
      <h4>Learn to Type Faster, Easier, and Better </h4>
    </div>
    <div className="btnclass">
      <a href="#" className="btnn">Get Started</a>
    </div>
  </div>
  <section className="about">
    <div className="main">
      <img src="img/typingclub.png" />
      <div className="about-text">
        <h2>About Us</h2>
        <p className="ppp">
          Typing kids is an interactive typing game for kids. Through the course 
          interactive lessons, kids will learn all about the alphabet and practice sight 
          words, word families, and simple sentences. <br /><br />
          Aimed at students in pre-k, kindergarten, and the 1st grade,
          Typing kids will also teach children to associate each letter on the keyboard with 
          the correct finger while improving alphabet recognition, dexterity, and familiarity
          with technology.
        </p>
        <button type="button">Get Started</button>
      </div>
    </div>
  </section>
  <div className="wave">
    <img src="img/wave.png" />
  </div>
  <section className="sec1">
    <div className="guide1">
      <img src="img/img1.png" />
      <div className="guide1-text">
        <h2>Engaging Videos</h2>
        <p className="ppp">
          Our engaging videos keep kids entertained with friendly characters and music while 
          helping them learn the shape and sound of each letter, warming up their hands, and 
          getting them ready to type by associating each finger with letters on the keyboard.
        </p>
      </div>
    </div>
  </section>
  {/* --------------------------------------------------------- */}
  <section className="sec2">
    <div className="guide1">
      <div className="guide2-text">
        <h2>Engaging Videos</h2>
        <p className="ppp">
          Our engaging videos keep kids entertained with friendly characters and music while 
          helping them learn the shape and sound of each letter, warming up their hands, and 
          getting them ready to type by associating each finger with letters on the keyboard.
        </p>
      </div>
      <img src="img/img2.p²²²²²ng" />
    </div>
  </section>
  <div className="vid"> 
    <iframe width={560} height={315} src="https://www.youtube.com/embed/7wva2CkNoIc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>
  {/* --------------------------------------------------------- */}
  <footer>
    <p>Typing Kids</p>
    <p>For more games follow us </p>
    <div className="social">
      <a href="#"><i className="fab fa-facebook-f" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
    </div>
    <p id="pp">CopyRight By Typing Kids</p>
  </footer>
</div>

)
}
export default Home