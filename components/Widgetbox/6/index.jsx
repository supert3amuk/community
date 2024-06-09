"use client";
export default function Widget5() {
return (

<div class="widget-box no-padding">
          {/* WIDGET BOX SETTINGS */}
          <div class="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div class="post-settings-wrap" style={{'position': 'relative'}}>
              {/* POST SETTINGS */}
              <div class="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg class="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div class="simple-dropdown widget-box-post-settings-dropdown" style={{'position': 'absolute', 'z-index': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                {/* SIMPLE DROPDOWN LINK */}
                <p class="simple-dropdown-link">Edit Post</p>
                {/* /SIMPLE DROPDOWN LINK */}
      
                {/* SIMPLE DROPDOWN LINK */}
                <p class="simple-dropdown-link">Delete Post</p>
                {/* /SIMPLE DROPDOWN LINK */}
      
                {/* SIMPLE DROPDOWN LINK */}
                <p class="simple-dropdown-link">Make it Featured</p>
                {/* /SIMPLE DROPDOWN LINK */}
      
                {/* SIMPLE DROPDOWN LINK */}
                <p class="simple-dropdown-link">Report Post</p>
                {/* /SIMPLE DROPDOWN LINK */}
      
                {/* SIMPLE DROPDOWN LINK */}
                <p class="simple-dropdown-link">Report Author</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
          
          {/* WIDGET BOX STATUS */}
          <div class="widget-box-status">
            {/* WIDGET BOX STATUS CONTENT */}
            <div class="widget-box-status-content">
              {/* USER STATUS */}
              <div class="user-status">
                {/* USER STATUS AVATAR */}
                <a class="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div class="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div class="user-avatar-content">
                      {/* HEXAGON */}
                      <div class="hexagon-image-30-32" data-src="/img/avatar/07.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR CONTENT */}
                
                    {/* USER AVATAR PROGRESS */}
                    <div class="user-avatar-progress">
                      {/* HEXAGON */}
                      <div class="hexagon-progress-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR PROGRESS */}
                
                    {/* USER AVATAR PROGRESS BORDER */}
                    <div class="user-avatar-progress-border">
                      {/* HEXAGON */}
                      <div class="hexagon-border-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR PROGRESS BORDER */}
                
                    {/* USER AVATAR BADGE */}
                    <div class="user-avatar-badge">
                      {/* USER AVATAR BADGE BORDER */}
                      <div class="user-avatar-badge-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BADGE BORDER */}
                
                      {/* USER AVATAR BADGE CONTENT */}
                      <div class="user-avatar-badge-content">
                        {/* HEXAGON */}
                        <div className="hexagon-dark-16-18" style={{width: '16px', height: '18px', position: 'relative'}}><canvas width="16" height="18" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BADGE CONTENT */}
                
                      {/* USER AVATAR BADGE TEXT */}
                      <p class="user-avatar-badge-text">26</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </div>
                  {/* /USER AVATAR */}
                </a>
                {/* /USER STATUS AVATAR */}
            
                {/* USER STATUS TITLE */}
                <p class="user-status-title medium"><a class="bold" href="profile-timeline.html">Sarah Diamond</a> created a <span class="bold">poll</span></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p class="user-status-text small">9 minutes ago</p>
                {/* /USER STATUS TEXT */}
              </div>
              {/* /USER STATUS */}
      
              {/* WIDGET BOX STATUS TEXT */}
              <p class="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
              {/* /WIDGET BOX STATUS TEXT */}
      
              {/* POLL BOX */}
              <div class="poll-box">
                {/* POLL TITLE */}
                <p class="poll-title">What do you wanna see in my upcoming videos?</p>
                {/* /POLL TITLE */}
            
                {/* POLL TEXT */}
                <p class="poll-text">Poll ends in 5 days</p>
                {/* /POLL TEXT */}
            
                {/* FORM */}
                <form class="form">
                  {/* FORM ROW */}
                  <div class="form-row">
                    {/* FORM ITEM */}
                    <div class="form-item">
                      {/* CHECKBOX WRAP */}
                      <div class="checkbox-wrap">
                        <input type="radio" id="poll-option-1" name="poll_option" value="option-1" />
                        {/* CHECKBOX BOX */}
                        <div class="checkbox-box round"></div>
                        {/* /CHECKBOX BOX */}
                        <label for="poll-option-1">Retro Games</label>
                      </div>
                      {/* /CHECKBOX WRAP */}
                    </div>
                    {/* /FORM ITEM */}
                  </div>
                  {/* /FORM ROW */}
            
                  {/* FORM ROW */}
                  <div class="form-row">
                    {/* FORM ITEM */}
                    <div class="form-item">
                      {/* CHECKBOX WRAP */}
                      <div class="checkbox-wrap">
                        <input type="radio" id="poll-option-2" name="poll_option" value="option-2" checked="" />
                        {/* CHECKBOX BOX */}
                        <div class="checkbox-box round"></div>
                        {/* /CHECKBOX BOX */}
                        <label for="poll-option-2">Walkthroughs</label>
                      </div>
                      {/* /CHECKBOX WRAP */}
                    </div>
                    {/* /FORM ITEM */}
                  </div>
                  {/* /FORM ROW */}
            
                  {/* FORM ROW */}
                  <div class="form-row">
                    {/* FORM ITEM */}
                    <div class="form-item">
                      {/* CHECKBOX WRAP */}
                      <div class="checkbox-wrap">
                        <input type="radio" id="poll-option-3" name="poll_option" value="option-3" />
                        {/* CHECKBOX BOX */}
                        <div class="checkbox-box round"></div>
                        {/* /CHECKBOX BOX */}
                        <label for="poll-option-3">Unboxings</label>
                      </div>
                      {/* /CHECKBOX WRAP */}
                    </div>
                    {/* /FORM ITEM */}
                  </div>
                  {/* /FORM ROW */}
                </form>
                {/* /FORM */}
            
                {/* POLL BOX ACTIONS */}
                <div class="poll-box-actions">
                  {/* BUTTON */}
                  <p class="button small secondary">Vote Now!</p>
                  {/* /BUTTON */}
            
                  {/* BUTTON */}
                  <p class="button small white">See Results</p>
                  {/* /BUTTON */}
                </div>
                {/* /POLL BOX ACTIONS */}
              </div>
              {/* /POLL BOX */}
      
              {/* CONTENT ACTIONS */}
              <div class="content-actions">
                {/* CONTENT ACTION */}
                <div class="content-action">
                  {/* META LINE */}
                  <div class="meta-line">
                    {/* META LINE LIST */}
                    <div class="meta-line-list reaction-item-list">
                      {/* REACTION ITEM */}
                      <div class="reaction-item" style={{'position': 'relative'}}>
                        {/* REACTION IMAGE */}
                        <img class="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/funny.png" alt="reaction-funny" />
                        {/* /REACTION IMAGE */}
            
                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown padded reaction-item-dropdown" style={{position: 'absolute', zIndex: 9999, bottom: '38px', left: '-16px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 20px)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text"><img class="reaction" src="/img/reaction/funny.png" alt="reaction-funny" /> <span class="bold">Funny</span></p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Matt Parker</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Destroy Dex</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">The Green Goo</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /REACTION ITEM */}
      
                      {/* REACTION ITEM */}
                      <div class="reaction-item" style={{'position': 'relative'}}>
                        {/* REACTION IMAGE */}
                        <img class="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/like.png" alt="reaction-like" />
                        {/* /REACTION IMAGE */}
            
                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown padded reaction-item-dropdown" style={{position: 'absolute', zIndex: 9999, bottom: '38px', left: '-16px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 20px)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text"><img class="reaction" src="/img/reaction/like.png" alt="reaction-like" /> <span class="bold">Like</span></p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Sandra Strange</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Jane Rodgers</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /REACTION ITEM */}
      
                      {/* REACTION ITEM */}
                      <div class="reaction-item" style={{'position': 'relative'}}>
                        {/* REACTION IMAGE */}
                        <img class="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/love.png" alt="reaction-love" />
                        {/* /REACTION IMAGE */}
            
                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown padded reaction-item-dropdown" style={{position: 'absolute', zIndex: 9999, bottom: '38px', left: '-16px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 20px)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text"><img class="reaction" src="/img/reaction/love.png" alt="reaction-love" /> <span class="bold">Love</span></p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Neko Bebop</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Nick Grissom</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Sarah Diamond</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
      
                          {/* SIMPLE DROPDOWN TEXT */}
                          <p class="simple-dropdown-text">Jett Spiegel</p>
                          {/* /SIMPLE DROPDOWN TEXT */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /REACTION ITEM */}
                    </div>
                    {/* /META LINE LIST */}
            
                    {/* META LINE TEXT */}
                    <p class="meta-line-text">9</p>
                    {/* /META LINE TEXT */}
                  </div>
                  {/* /META LINE */}
            
                  {/* META LINE */}
                  <div class="meta-line">
                    {/* META LINE LIST */}
                    <div class="meta-line-list user-avatar-list">
                      {/* USER AVATAR */}
                      <div class="user-avatar micro no-stats">
                        {/* USER AVATAR BORDER */}
                        <div class="user-avatar-border">
                          {/* HEXAGON */}
                          <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                    
                        {/* USER AVATAR CONTENT */}
                        <div class="user-avatar-content">
                          {/* HEXAGON */}
                          <div class="hexagon-image-18-20" data-src="/img/avatar/09.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                      </div>
                      {/* /USER AVATAR */}
            
                      {/* USER AVATAR */}
                      <div class="user-avatar micro no-stats">
                        {/* USER AVATAR BORDER */}
                        <div class="user-avatar-border">
                          {/* HEXAGON */}
                          <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                    
                        {/* USER AVATAR CONTENT */}
                        <div class="user-avatar-content">
                          {/* HEXAGON */}
                          <div class="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                      </div>
                      {/* /USER AVATAR */}
            
                      {/* USER AVATAR */}
                      <div class="user-avatar micro no-stats">
                        {/* USER AVATAR BORDER */}
                        <div class="user-avatar-border">
                          {/* HEXAGON */}
                          <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                    
                        {/* USER AVATAR CONTENT */}
                        <div class="user-avatar-content">
                          {/* HEXAGON */}
                          <div class="hexagon-image-18-20" data-src="/img/avatar/12.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                      </div>
                      {/* /USER AVATAR */}
            
                      {/* USER AVATAR */}
                      <div class="user-avatar micro no-stats">
                        {/* USER AVATAR BORDER */}
                        <div class="user-avatar-border">
                          {/* HEXAGON */}
                          <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                    
                        {/* USER AVATAR CONTENT */}
                        <div class="user-avatar-content">
                          {/* HEXAGON */}
                          <div class="hexagon-image-18-20" data-src="/img/avatar/16.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                      </div>
                      {/* /USER AVATAR */}
            
                      {/* USER AVATAR */}
                      <div class="user-avatar micro no-stats">
                        {/* USER AVATAR BORDER */}
                        <div class="user-avatar-border">
                          {/* HEXAGON */}
                          <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                    
                        {/* USER AVATAR CONTENT */}
                        <div class="user-avatar-content">
                          {/* HEXAGON */}
                          <div class="hexagon-image-18-20" data-src="/img/avatar/06.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                      </div>
                      {/* /USER AVATAR */}
                    </div>
                    {/* /META LINE LIST */}
            
                    {/* META LINE TEXT */}
                    <p class="meta-line-text">11 Participants</p>
                    {/* /META LINE TEXT */}
                  </div>
                  {/* /META LINE */}
                </div>
                {/* /CONTENT ACTION */}
            
                {/* CONTENT ACTION */}
                <div class="content-action">
                  {/* META LINE */}
                  <div class="meta-line">
                    {/* META LINE LINK */}
                    <p class="meta-line-link">1 Comments</p>
                    {/* /META LINE LINK */}
                  </div>
                  {/* /META LINE */}
            
                  {/* META LINE */}
                  <div class="meta-line">
                    {/* META LINE TEXT */}
                    <p class="meta-line-text">0 Shares</p>
                    {/* /META LINE TEXT */}
                  </div>
                  {/* /META LINE */}
                </div>
                {/* /CONTENT ACTION */}
              </div>
              {/* /CONTENT ACTIONS */}
            </div>
            {/* /WIDGET BOX STATUS CONTENT */}
          </div>
          {/* /WIDGET BOX STATUS */}
      
          {/* POST OPTIONS */}
          <div class="post-options">
            {/* POST OPTION WRAP */}
            <div class="post-option-wrap" style={{'position': 'relative'}}>
              {/* POST OPTION */}
              <div class="post-option reaction-options-dropdown-trigger">
                {/* POST OPTION ICON */}
                <svg class="post-option-icon icon-thumbs-up">
                  <use xlinkHref="#svg-thumbs-up"></use>
                </svg>
                {/* /POST OPTION ICON */}
      
                {/* POST OPTION TEXT */}
                <p class="post-option-text">React!</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
      
              {/* REACTION OPTIONS */}
              <div className="reaction-options reaction-options-dropdown" style={{position: 'absolute', zIndex: 9999, bottom: '54px', left: '-16px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 20px)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-26px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
              
                <div className="reaction-option text-tooltip-tft" data-title="Like" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/like.png" alt="reaction-like" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-22px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Like</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Love" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/love.png" alt="reaction-love" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-23.5px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Love</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/dislike.png" alt="reaction-dislike" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-28px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Dislike</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/happy.png" alt="reaction-happy" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-27.5px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Happy</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/funny.png" alt="reaction-funny" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-27px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Funny</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/wow.png" alt="reaction-wow" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-24px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Wow</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-26.5px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
                {/* /REACTION OPTION */}
      
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{position: 'relative'}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="/img/reaction/sad.png" alt="reaction-sad" />
                  {/* /REACTION OPTION IMAGE */}
                <div className="xm-tooltip" style={{whiteSpace: 'nowrap', position: 'absolute', zIndex: 99999, top: '-28px', left: '50%', marginLeft: '-21.5px', opacity: 0, visibility: 'hidden', transform: 'translate(0px, 10px)', transition: '0.3s ease-in-out'}}><p className="xm-tooltip-text">Sad</p></div></div>
                {/* /REACTION OPTION */}
              </div>
              {/* /REACTION OPTIONS */}
            </div>
            {/* /POST OPTION WRAP */}
      
            {/* POST OPTION */}
            <div class="post-option">
              {/* POST OPTION ICON */}
              <svg class="post-option-icon icon-comment">
                <use xlinkHref="#svg-comment"></use>
              </svg>
              {/* /POST OPTION ICON */}
      
              {/* POST OPTION TEXT */}
              <p class="post-option-text">Comment</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
      
            {/* POST OPTION */}
            <div class="post-option">
              {/* POST OPTION ICON */}
              <svg class="post-option-icon icon-share">
                <use xlinkHref="#svg-share"></use>
              </svg>
              {/* /POST OPTION ICON */}
      
              {/* POST OPTION TEXT */}
              <p class="post-option-text">Share</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
          </div>
          {/* /POST OPTIONS */}
        </div>


);
}