import React from "react";
import "./style.css"
import './script.js'
const Home =()=>{

return(   
    <div>
    <body>
      <div class="game">
        <div class="name">Typing Speed Test Game</div>
        <div class="container">
          <div class="message">
            You Are Playing On
            <span class="lvl"></span> Level
            & You Have <span class="seconds"></span> Seconds To Type The Word
          </div>
          <div class="start">Start Playing</div>
          <div class="the-word"></div>
          <input type="text" class="input" />
          <div class="upcoming-words">Words Will Show Here</div>
          <div class="control">
            <div class="time">Time Left: <span></span> Seconds</div>
            <div class="score">
              Score: <span class="got">0</span> From <span class="total"></span>
            </div>
          </div>
          <div class="finish"></div>
        </div>
      </div>
      
    </body>
      <script type ="text/javascript" src="script.js"> </script>

      </div>
    )
   
}

export default Home 