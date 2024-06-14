import React from 'react';

  import { useEffect, useState } from 'react';

function Tablerow() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (<div class="table-row small">
          {/* TABLE COLUMN */}
          <div class="table-column">
            {/* TABLE INFORMATION */}
            <div class="table-information">
              {/* TABLE IMAGE */}
              <img class="table-image" src="/img/quest/completedq-s.png" alt="completedq-s" />
              {/* /TABLE IMAGE */}
  
              {/* TABLE TITLE */}
              <p class="table-title">Press Start!</p>
              {/* /TABLE TITLE */}
            </div>
            {/* /TABLE INFORMATION */}
          </div>
          {/* /TABLE COLUMN */}
  
          {/* TABLE COLUMN */}
          <div class="table-column">
            {/* TABLE TITLE */}
            <p class="table-text">Post a status update or any other post for the first time</p>
            {/* /TABLE TITLE */}
          </div>
          {/* /TABLE COLUMN */}
  
          {/* TABLE COLUMN */}
          <div class="table-column centered padded-big-left">
            {/* TEXT STICKER */}
            <p class="text-sticker void">
              {/* TEXT STICKER ICON */}
              <svg class="text-sticker-icon icon-plus-small">
                <use xlinkHref="#svg-plus-small"></use>
              </svg>
              {/* TEXT STICKER ICON */}
              20 EXP
            </p>
            {/* /TEXT STICKER */}
          </div>
          {/* /TABLE COLUMN */}
  
          {/* TABLE COLUMN */}
          <div class="table-column padded-big-left">
            {/* PROGRESS STAT WRAP */}
            <div class="progress-stat-wrap">
              {/* PROGRESS STAT */}
              <div class="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div id="quest-line-ps" class="progress-stat-bar" style={{'width': '200px', 'height': '4px', 'position': 'relative'}}><canvas width="200" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas><canvas width="200" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /PROGRESS STAT BAR */}
          
                {/* BAR PROGRESS WRAP */}
                <div class="bar-progress-wrap">
                  {/* BAR PROGRESS INFO */}
                  <p class="bar-progress-info medium negative"><span class="bar-progress-text no-space">100<span class="bar-progress-unit">%</span></span></p>
                  {/* /BAR PROGRESS INFO */}
                </div>
                {/* /BAR PROGRESS WRAP */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /PROGRESS STAT WRAP */}
          </div>
          {/* /TABLE COLUMN */}
        </div>)}

export default Tablerow;