import React from "react";
import "./style.css"
import './script.js'
const GamePage =()=>{

return(   
    <div>
    <body>
    
<div class="game">

{/* <div class="name">Typing kids</div> */}

<div class="container">
  <div class="finish"></div>

  <div class="message">

    You Are Playing On
    <span class="lvl"></span> Level
    & You Have <span class="seconds"></span> Seconds To Type The Word
  </div>


  <div class="the-word"></div>

  <input type="text" class="input" />
  <div class="start">Start Playing</div>
  
  <div class="upcoming-words">Words Will Show Here</div>
  <div class="control">
    <div class="time"><span id="time-score"></span> Seconds</div>
    <div id="time-score2" class="score">
      <div class="poz">
        Score: <span class="got">0</span> From <span class="total"></span>

      </div>

    </div>
  </div>
</div>
</div>



      
    </body>
      <script type ="text/javascript" src="script.js"> </script>

      </div>
    )
   
}

export default GamePage 