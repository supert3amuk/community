
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
<div class="user-preview">
        {/* USER PREVIEW COVER */}
        <figure class="user-preview-cover liquid" style={{'background': 'url(&quot;/img/cover/04.jpg&quot;) center center / cover no-repeat'}}>
          <img src="/img/cover/04.jpg" alt="cover-04" style={{'display': 'none'}} />
        </figure>
        {/* /USER PREVIEW COVER */}
    
        {/* USER PREVIEW INFO */}
        <div class="user-preview-info">{data.title}
          {/* USER SHORT DESCRIPTION */}
          <div class="user-short-description">
            {/* USER SHORT DESCRIPTION AVATAR */}
            <a class="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
              {/* USER AVATAR BORDER */}
              <div class="user-avatar-border">
                {/* HEXAGON */}
                <div class="hexagon-120-132" style={{'width': '120px', 'height': '132px', 'position': 'relative'}}><canvas width="120" height="132" f></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
          
              {/* USER AVATAR CONTENT */}
              <div class="user-avatar-content">
                {/* HEXAGON */}
                <div class="hexagon-image-82-90" data-src="/img/avatar/05.jpg" style={{'width': '82px', 'height': '90px', 'position': 'relative'}}><canvas width="82" height="90" style={{ position: 'absolute', top: '0px', left: '0px' }}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
          
              {/* USER AVATAR PROGRESS */}
              <div class="user-avatar-progress">
                {/* HEXAGON */}
                <div class="hexagon-progress-100-110" style={{'width': '100px', 'height': '110px', 'position':' relative'}}><canvas width="100" height="110" style={{ position: 'absolute', top: '0px', left: '0px' }}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS */}
          
              {/* USER AVATAR PROGRESS BORDER */}
              <div class="user-avatar-progress-border">
                {/* HEXAGON */}
                <div class="hexagon-border-100-110" style={{'width': '100px', 'height': '110px', 'position':' relative'}}><canvas width="100" height="110" style={{ position: 'absolute', top: '0px', left: '0px' }}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS BORDER */}
          
              {/* USER AVATAR BADGE */}
              <div class="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div class="user-avatar-badge-border">
                  {/* HEXAGON */}
                  <div class="hexagon-32-36" style={{'width': '100px', 'height': '110px', 'position': 'relative'}}><canvas width="32" height="36" style={{ position: 'absolute', top: '0px', left: '0px' }}></canvas></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}
          
                {/* USER AVATAR BADGE CONTENT */}
                <div class="user-avatar-badge-content">
                  {/* HEXAGON */}
                  <div class="hexagon-dark-26-28" style={{'width': '26px', 'height': '28px', 'position': 'relative'}}><canvas width="26" height="28" style={{ position: 'absolute', top: '0px', left: '0px' }}></canvas></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}
          
                {/* USER AVATAR BADGE TEXT */}
                <p class="user-avatar-badge-text">12</p>
                {/* /USER AVATAR BADGE TEXT */}
              </div>
              {/* /USER AVATAR BADGE */}
            </a>
            {/* /USER SHORT DESCRIPTION AVATAR */}
      
            {/* USER SHORT DESCRIPTION TITLE */}
            <p class="user-short-description-title"><a href="profile-timeline.html">NekoBebop</a></p>
            {/* /USER SHORT DESCRIPTION TITLE */}
      
            {/* USER SHORT DESCRIPTION TEXT */}
            <p class="user-short-description-text"><a href="#">www.store.com/nekoprints</a></p>
            {/* /USER SHORT DESCRIPTION TEXT */}
          </div>
          {/* /USER SHORT DESCRIPTION */}
      
          {/* BADGE LIST */}
          <div class="badge-list small">
            {/* BADGE ITEM */}
            <div class="badge-item">
              <img src="/img/badge/silver-s.png" alt="badge-silver-s" />
            </div>
            {/* /BADGE ITEM */}
      
            {/* BADGE ITEM */}
            <div class="badge-item">
              <img src="/img/badge/fcultivator-s.png" alt="badge-fcultivator-s" />
            </div>
            {/* /BADGE ITEM */}
      
            {/* BADGE ITEM */}
            <div class="badge-item">
              <img src="/img/badge/scientist-s.png" alt="badge-scientist-s" />
            </div>
            {/* /BADGE ITEM */}
      
            {/* BADGE ITEM */}
            <div class="badge-item">
              <img src="/img/badge/rmachine-s.png" alt="badge-rmachine-s" />
            </div>
            {/* /BADGE ITEM */}
      
            {/* BADGE ITEM */}
            <a class="badge-item" href="profile-badges.html">
              <img src="/img/badge/blank-s.png" alt="badge-blank-s" />
              {/* BADGE ITEM TEXT */}
              <p class="badge-item-text">+29</p>
              {/* /BADGE ITEM TEXT */}
            </a>
            {/* /BADGE ITEM */}
          </div>
          {/* /BADGE LIST */}
    
          {/* USER PREVIEW STATS SLIDES */}
          <div class="tns-outer" id="user-preview-stats-slides-01-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1</span>  of 2</div><div id="user-preview-stats-slides-01-mw" class="tns-ovh"><div class="tns-inner" id="user-preview-stats-slides-01-iw"><div id="user-preview-stats-slides-01" class="user-preview-stats-slides  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style={{'transition-duration': '0s', 'transform': 'translate3d(0%, 0px, 0px)'}}>
            {/* USER PREVIEW STATS SLIDE */}
            <div class="user-preview-stats-slide tns-item tns-slide-active" id="user-preview-stats-slides-01-item0">
              {/* USER STATS */}
              <div class="user-stats">
                {/* USER STAT */}
                <div class="user-stat">
                  {/* USER STAT TITLE */}
                  <p class="user-stat-title">874</p>
                  {/* /USER STAT TITLE */}
          
                  {/* USER STAT TEXT */}
                  <p class="user-stat-text">posts</p>
                  {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}
          
                {/* USER STAT */}
                <div class="user-stat">
                  {/* USER STAT TITLE */}
                  <p class="user-stat-title">60</p>
                  {/* /USER STAT TITLE */}
          
                  {/* USER STAT TEXT */}
                  <p class="user-stat-text">friends</p>
                  {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}
          
                {/* USER STAT */}
                <div class="user-stat">
                  {/* USER STAT TITLE */}
                  <p class="user-stat-title">3.9k</p>
                  {/* /USER STAT TITLE */}
          
                  {/* USER STAT TEXT */}
                  <p class="user-stat-text">visits</p>
                  {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}
              </div>
              {/* /USER STATS */}
            </div>
            {/* /USER PREVIEW STATS SLIDE */}
      
            {/* USER PREVIEW STATS SLIDE */}
            <div class="user-preview-stats-slide tns-item" id="user-preview-stats-slides-01-item1" aria-hidden="true" tabindex="-1">
              {/* USER PREVIEW TEXT */}
              <p class="user-preview-text">Hello! I'm James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!</p>
              {/* /USER PREVIEW TEXT */}
            </div>
            {/* /USER PREVIEW STATS SLIDE */}
          </div></div></div></div>
          {/* /USER PREVIEW STATS SLIDES */}
    
          {/* USER PREVIEW STATS ROSTER */}
          <div id="user-preview-stats-roster-01" class="user-preview-stats-roster slider-roster" aria-label="Carousel Pagination">
            {/* SLIDER ROSTER ITEM */}
            <div class="slider-roster-item tns-nav-active" data-nav="0" aria-label="Carousel Page 1 (Current Slide)" aria-controls="user-preview-stats-slides-01"></div>
            {/* /SLIDER ROSTER ITEM */}
    
            {/* SLIDER ROSTER ITEM */}
            <div class="slider-roster-item" data-nav="1" tabindex="-1" aria-label="Carousel Page 2" aria-controls="user-preview-stats-slides-01"></div>
            {/* /SLIDER ROSTER ITEM */}
          </div>
          {/* /USER PREVIEW STATS ROSTER */}
    
          {/* SOCIAL LINKS */}
          <div class="social-links small">
            {/* SOCIAL LINK */}
            <a class="social-link small twitter" href="#">
              {/* SOCIAL LINK ICON */}
              <svg class="social-link-icon icon-twitter">
                <use xlinkHref="#svg-twitter"></use>
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}

            {/* SOCIAL LINK */}
            <a class="social-link small instagram" href="#">
              {/* SOCIAL LINK ICON */}
              <svg class="social-link-icon icon-instagram">
                <use xlinkHref="#svg-instagram"></use>
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}

            {/* SOCIAL LINK */}
            <a class="social-link small twitch" href="#">
              {/* SOCIAL LINK ICON */}
              <svg class="social-link-icon icon-twitch">
                <use xlinkHref="#svg-twitch"></use>
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}

            {/* SOCIAL LINK */}
            <a class="social-link small discord" href="#">
              {/* SOCIAL LINK ICON */}
              <svg class="social-link-icon icon-discord">
                <use xlinkHref="#svg-discord"></use>
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}
          </div>
          {/* /SOCIAL LINKS */}
    
          {/* USER PREVIEW ACTIONS */}
          <div class="user-preview-actions">
            {/* BUTTON */}
            <p class="button secondary">Add Friend +</p>
            {/* /BUTTON */}
    
            {/* BUTTON */}
            <p class="button primary">Send Message</p>
            {/* /BUTTON */}
          </div>
          {/* /USER PREVIEW ACTIONS */}
        </div>
        {/* /USER PREVIEW INFO */}
      </div>);}
      export default JSONComponent;