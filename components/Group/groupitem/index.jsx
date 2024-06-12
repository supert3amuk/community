import React from 'react';

function JSONComponent({ jsonData }) {
  return (
    <div className='grid grid-4-4-4 centered'>
      {jsonData && jsonData.map((item, index) => (
        <JSONItem key={index} data={item} />
      ))}
    </div>
  );
}

function JSONItem({ data }) {
  return (
    <div className="user-preview">
        {/* USER PREVIEW COVER */}
        <figure className="user-preview-cover liquid" style={{'background': 'url(&quot;/img/cover/29.jpg&quot;) center center / cover no-repeat'}}>
          <img src="/img/cover/29.jpg" alt="cover-29" style={{'display': 'none'}} />
        </figure>
        {/* /USER PREVIEW COVER */}
    
        {/* USER PREVIEW INFO */}
        <div className="user-preview-info">
          {/* TAG STICKER */}
          <div className="tag-sticker">
            {/* TAG STICKER ICON */}
            <svg className="tag-sticker-icon icon-public">
              <use xlinkHref="#svg-public"></use>
            </svg>
            {/* /TAG STICKER ICON */}
          </div>
          {/* /TAG STICKER */}
    
          {/* USER SHORT DESCRIPTION */}
          <div className="user-short-description">
            {/* USER SHORT DESCRIPTION AVATAR */}
            <a className="user-short-description-avatar user-avatar medium no-stats" href="group-timeline.html">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-120-130" style={{'width': '120px', 'height': '130px', 'position': 'relative;'}}><canvas width="120" height="130" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
    
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-100-110" data-src="/img/avatar/24.jpg" style={{'width': '100px', 'height': '110px', 'position': 'relative'}}><canvas width="100" height="110" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </a>
            {/* /USER SHORT DESCRIPTION AVATAR */}
      
            {/* USER SHORT DESCRIPTION TITLE */}
            <p className="user-short-description-title"><a href="group-timeline.html">Cosplayers of the World</a></p>
            {/* /USER SHORT DESCRIPTION TITLE */}
      
            {/* USER SHORT DESCRIPTION TEXT */}
            <p className="user-short-description-text">All cosplayers welcome!</p>
            {/* /USER SHORT DESCRIPTION TEXT */}
          </div>
          {/* /USER SHORT DESCRIPTION */}
    
          {/* USER STATS */}
          <div className="user-stats">
            {/* USER STAT */}
            <div className="user-stat">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">139</p>
              {/* /USER STAT TITLE */}
      
              {/* USER STAT TEXT */}
              <p className="user-stat-text">members</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}
      
            {/* USER STAT */}
            <div className="user-stat">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">105</p>
              {/* /USER STAT TITLE */}
      
              {/* USER STAT TEXT */}
              <p className="user-stat-text">posts</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}
      
            {/* USER STAT */}
            <div className="user-stat">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">7.3k</p>
              {/* /USER STAT TITLE */}
      
              {/* USER STAT TEXT */}
              <p className="user-stat-text">visits</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}
          </div>
          {/* /USER STATS */}
    
          {/* USER AVATAR LIST */}
          <div className="user-avatar-list medium reverse centered">
            {/* USER AVATAR */}
            <div className="user-avatar smaller no-stats">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/03.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </div>
            {/* /USER AVATAR */}
            
            {/* USER AVATAR */}
            <div className="user-avatar smaller no-stats">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/05.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </div>
            {/* /USER AVATAR */}
    
            {/* USER AVATAR */}
            <div className="user-avatar smaller no-stats">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/10.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </div>
            {/* /USER AVATAR */}
    
            {/* USER AVATAR */}
            <div className="user-avatar smaller no-stats">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/02.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </div>
            {/* /USER AVATAR */}
    
            {/* USER AVATAR */}
            <div className="user-avatar smaller no-stats">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/06.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
            </div>
            {/* /USER AVATAR */}
    
            {/* USER AVATAR */}
            <a className="user-avatar smaller no-stats" href="group-members.html">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-34-36" style={{'width': '34px', 'height': '36px', 'position': 'relative'}}><canvas width="34" height="36" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/23.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
          
              {/* USER AVATAR OVERLAY */}
              <div className="user-avatar-overlay">
                {/* HEXAGON */}
                <div className="hexagon-overlay-30-32" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR OVERLAY */}
          
              {/* USER AVATAR OVERLAY CONTENT */}
              <div className="user-avatar-overlay-content">
                {/* USER AVATAR OVERLAY CONTENT TEXT */}
                <p className="user-avatar-overlay-content-text">+132</p>
                {/* /USER AVATAR OVERLAY CONTENT TEXT */}
              </div>
              {/* /USER AVATAR OVERLAY CONTENT */}
            </a>
            {/* /USER AVATAR */}
          </div>
          {/* /USER AVATAR LIST */}
    
          {/* USER PREVIEW ACTIONS */}
          <div className="user-preview-actions">
            {/* BUTTON */}
            <p className="button secondary full">
              {/* BUTTON ICON */}
              <svg className="button-icon icon-join-group">
                <use xlinkHref="#svg-join-group"></use>
              </svg>
              {/* /BUTTON ICON */}
              Join Group!
            </p>
            {/* /BUTTON */}
          </div>
          {/* /USER PREVIEW ACTIONS */}
        </div>
        {/* /USER PREVIEW INFO */}
      </div>
  );
}

export default JSONComponent;