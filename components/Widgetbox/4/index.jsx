"use client";
export default function Widget3() {
return (

<div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap" style={{position: 'relative'}}>
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'zIndex': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">Open Quests</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* QUEST PREVIEW LIST */}
            <div className="quest-preview-list">
              {/* QUEST PREVIEW */}
              <div className="quest-preview">
                {/* QUEST PREVIEW INFO */}
                <div className="quest-preview-info">
                  {/* QUEST PREVIEW IMAGE */}
                  <img className="quest-preview-image" src="/img/quest/openq-s.png" alt="openq-s" />
                  {/* /QUEST PREVIEW IMAGE */}
            
                  {/* QUEST PREVIEW TITLE */}
                  <p className="quest-preview-title">Nothing to hide</p>
                  {/* /QUEST PREVIEW TITLE */}
            
                  {/* QUEST PREVIEW TEXT */}
                  <p className="quest-preview-text">You have completed all your profile information fields</p>
                  {/* /QUEST PREVIEW TEXT */}
                </div>
                {/* /QUEST PREVIEW INFO */}
            
                {/* PROGRESS STAT */}
                <div className="progress-stat">
                  {/* PROGRESS STAT BAR */}
                  <div id="quest-preview-nth" className="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /PROGRESS STAT BAR */}
                </div>
                {/* /PROGRESS STAT */}
              </div>
              {/* /QUEST PREVIEW */}
      
              {/* QUEST PREVIEW */}
              <div className="quest-preview">
                {/* QUEST PREVIEW INFO */}
                <div className="quest-preview-info">
                  {/* QUEST PREVIEW IMAGE */}
                  <img className="quest-preview-image" src="/img/quest/openq-s.png" alt="openq-s" />
                  {/* /QUEST PREVIEW IMAGE */}
            
                  {/* QUEST PREVIEW TITLE */}
                  <p className="quest-preview-title">Social King</p>
                  {/* /QUEST PREVIEW TITLE */}
            
                  {/* QUEST PREVIEW TEXT */}
                  <p className="quest-preview-text">You have linked at least 8 social networks to your profile</p>
                  {/* /QUEST PREVIEW TEXT */}
                </div>
                {/* /QUEST PREVIEW INFO */}
            
                {/* PROGRESS STAT */}
                <div className="progress-stat">
                  {/* PROGRESS STAT BAR */}
                  <div id="quest-preview-sk" className="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /PROGRESS STAT BAR */}
                </div>
                {/* /PROGRESS STAT */}
              </div>
              {/* /QUEST PREVIEW */}
      
              {/* QUEST PREVIEW */}
              <div className="quest-preview">
                {/* QUEST PREVIEW INFO */}
                <div className="quest-preview-info">
                  {/* QUEST PREVIEW IMAGE */}
                  <img className="quest-preview-image" src="/img/quest/openq-s.png" alt="openq-s" />
                  {/* /QUEST PREVIEW IMAGE */}
            
                  {/* QUEST PREVIEW TITLE */}
                  <p className="quest-preview-title">Buffed Profile</p>
                  {/* /QUEST PREVIEW TITLE */}
            
                  {/* QUEST PREVIEW TEXT */}
                  <p className="quest-preview-text">You have posted every day for at least 30 days in a row</p>
                  {/* /QUEST PREVIEW TEXT */}
                </div>
                {/* /QUEST PREVIEW INFO */}
            
                {/* PROGRESS STAT */}
                <div className="progress-stat">
                  {/* PROGRESS STAT BAR */}
                  <div id="quest-preview-bp" className="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /PROGRESS STAT BAR */}
                </div>
                {/* /PROGRESS STAT */}
              </div>
              {/* /QUEST PREVIEW */}
      
              {/* QUEST PREVIEW */}
              <div className="quest-preview">
                {/* QUEST PREVIEW INFO */}
                <div className="quest-preview-info">
                  {/* QUEST PREVIEW IMAGE */}
                  <img className="quest-preview-image" src="/img/quest/openq-s.png" alt="openq-s" />
                  {/* /QUEST PREVIEW IMAGE */}
            
                  {/* QUEST PREVIEW TITLE */}
                  <p className="quest-preview-title">Hear the People</p>
                  {/* /QUEST PREVIEW TITLE */}
            
                  {/* QUEST PREVIEW TEXT */}
                  <p className="quest-preview-text">You have created and posted your first poll</p>
                  {/* /QUEST PREVIEW TEXT */}
                </div>
                {/* /QUEST PREVIEW INFO */}
            
                {/* PROGRESS STAT */}
                <div className="progress-stat">
                  {/* PROGRESS STAT BAR */}
                  <div id="quest-preview-htp" className="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /PROGRESS STAT BAR */}
                </div>
                {/* /PROGRESS STAT */}
              </div>
              {/* /QUEST PREVIEW */}
      
              {/* QUEST PREVIEW */}
              <div className="quest-preview">
                {/* QUEST PREVIEW INFO */}
                <div className="quest-preview-info">
                  {/* QUEST PREVIEW IMAGE */}
                  <img className="quest-preview-image" src="/img/quest/openq-s.png" alt="openq-s" />
                  {/* /QUEST PREVIEW IMAGE */}
            
                  {/* QUEST PREVIEW TITLE */}
                  <p className="quest-preview-title">Store Manager</p>
                  {/* /QUEST PREVIEW TITLE */}
            
                  {/* QUEST PREVIEW TEXT */}
                  <p className="quest-preview-text">You have uploaded at least 10 items in your shop</p>
                  {/* /QUEST PREVIEW TEXT */}
                </div>
                {/* /QUEST PREVIEW INFO */}
            
                {/* PROGRESS STAT */}
                <div className="progress-stat">
                  {/* PROGRESS STAT BAR */}
                  <div id="quest-preview-sm" className="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="228" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /PROGRESS STAT BAR */}
                </div>
                {/* /PROGRESS STAT */}
              </div>
              {/* /QUEST PREVIEW */}
            </div>
            {/* /QUEST PREVIEW LIST */}
          </div>
          {/* WIDGET BOX CONTENT */}
      
          {/* WIDGET BOX BUTTON */}
          <a className="widget-box-button button small white" href="quests.html">See all Quests!</a>
          {/* /WIDGET BOX BUTTON */}
        </div>

);
}