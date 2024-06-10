"use client";
export default function Widget6() {
return (

    <div className="widget-box no-padding">
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
        <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'z-index': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
          {/* SIMPLE DROPDOWN LINK */}
          <p className="simple-dropdown-link">Edit Post</p>
          {/* /SIMPLE DROPDOWN LINK */}

          {/* SIMPLE DROPDOWN LINK */}
          <p className="simple-dropdown-link">Delete Post</p>
          {/* /SIMPLE DROPDOWN LINK */}

          {/* SIMPLE DROPDOWN LINK */}
          <p className="simple-dropdown-link">Make it Featured</p>
          {/* /SIMPLE DROPDOWN LINK */}

          {/* SIMPLE DROPDOWN LINK */}
          <p className="simple-dropdown-link">Report Post</p>
          {/* /SIMPLE DROPDOWN LINK */}

          {/* SIMPLE DROPDOWN LINK */}
          <p className="simple-dropdown-link">Report Author</p>
          {/* /SIMPLE DROPDOWN LINK */}
        </div>
        {/* /SIMPLE DROPDOWN */}
      </div>
      {/* /POST SETTINGS WRAP */}
    </div>
    {/* /WIDGET BOX SETTINGS */}
    
    {/* WIDGET BOX STATUS */}
    <div className="widget-box-status">
      {/* WIDGET BOX STATUS CONTENT */}
      <div className="widget-box-status-content">
        {/* USER STATUS */}
        <div className="user-status">
          {/* USER STATUS AVATAR */}
          <a className="user-status-avatar" href="profile-timeline.html">
            {/* USER AVATAR */}
            <div className="user-avatar small no-outline">
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="/img/avatar/02.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
          
              {/* USER AVATAR PROGRESS */}
              <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div className="hexagon-progress-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS */}
          
              {/* USER AVATAR PROGRESS BORDER */}
              <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS BORDER */}
          
              {/* USER AVATAR BADGE */}
              <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                  {/* HEXAGON */}
                  <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}
          
                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                  {/* HEXAGON */}
                  <div className="hexagon-dark-16-18" style={{'width': '16px', 'height': '18px', 'position': 'relative'}}><canvas width="16" height="18" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}
          
                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">19</p>
                {/* /USER AVATAR BADGE TEXT */}
              </div>
              {/* /USER AVATAR BADGE */}
            </div>
            {/* /USER AVATAR */}
          </a>
          {/* /USER STATUS AVATAR */}
      
          {/* USER STATUS TITLE */}
          <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Destroy Dex</a> uploaded <span className="bold">26 new photos</span></p>
          {/* /USER STATUS TITLE */}
      
          {/* USER STATUS TEXT */}
          <p className="user-status-text small">17 minutes ago</p>
          {/* /USER STATUS TEXT */}
        </div>
        {/* /USER STATUS */}

        {/* WIDGET BOX STATUS TEXT */}
        <p className="widget-box-status-text">Here are some of the photos from my last visit to StreamCon 2019!!</p>
        {/* /WIDGET BOX STATUS TEXT */}

        {/* PICTURE COLLAGE */}
        <div className="picture-collage">
          {/* PICTURE COLLAGE ROW */}
          <div className="picture-collage-row medium">
            {/* PICTURE COLLAGE ITEM */}
            <div className="picture-collage-item popup-picture-trigger">
              {/* PHOTO PREVIEW */}
              <div className="photo-preview">
                {/* PHOTO PREVIEW IMAGE */}
                <figure className="photo-preview-image liquid" style={{'background': `url(${bg1.src}) center center / cover no-repeat`}}>
                  <img src={bg1.src} alt="photo-preview-10" style={{'display': 'none'}} />
                </figure>
                {/* /PHOTO PREVIEW IMAGE */}
            
                {/* PHOTO PREVIEW INFO */}
                <div className="photo-preview-info">
                  {/* REACTION COUNT LIST */}
                  <div className="reaction-count-list">
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">2</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
            
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">5</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
                  </div>
                  {/* /REACTION COUNT LIST */}
                </div>
                {/* /PHOTO PREVIEW INFO */}
              </div>
              {/* /PHOTO PREVIEW */}
            </div>
            {/* /PICTURE COLLAGE ITEM */}

            {/* PICTURE COLLAGE ITEM */}
            <div className="picture-collage-item popup-picture-trigger">
              {/* PHOTO PREVIEW */}
              <div className="photo-preview">
                {/* PHOTO PREVIEW IMAGE */}
                <figure className="photo-preview-image liquid" style={{'background': `url(${bg2.src}) center center / cover no-repeat`}}>
                  <img src={bg2.src} alt="photo-preview-12" style={{'display': 'none'}} />
                </figure>
                {/* /PHOTO PREVIEW IMAGE */}
            
                {/* PHOTO PREVIEW INFO */}
                <div className="photo-preview-info">
                  {/* REACTION COUNT LIST */}
                  <div className="reaction-count-list">
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">2</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
            
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">5</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
                  </div>
                  {/* /REACTION COUNT LIST */}
                </div>
                {/* /PHOTO PREVIEW INFO */}
              </div>
              {/* /PHOTO PREVIEW */}
            </div>
            {/* /PICTURE COLLAGE ITEM */}
          </div>
          {/* /PICTURE COLLAGE ROW */}

          {/* PICTURE COLLAGE ROW */}
          <div className="picture-collage-row">
            {/* PICTURE COLLAGE ITEM */}
            <div className="picture-collage-item popup-picture-trigger">
              {/* PHOTO PREVIEW */}
              <div className="photo-preview">
                {/* PHOTO PREVIEW IMAGE */}
                <figure className="photo-preview-image liquid" style={{'background': `url(${bg3.src}) center center / cover no-repeat`}}>
                  <img src={bg3.src} alt="photo-preview-16" style={{'display': 'none'}} />
                </figure>
                {/* /PHOTO PREVIEW IMAGE */}
            
                {/* PHOTO PREVIEW INFO */}
                <div className="photo-preview-info">
                  {/* REACTION COUNT LIST */}
                  <div className="reaction-count-list">
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">2</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
            
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">5</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
                  </div>
                  {/* /REACTION COUNT LIST */}
                </div>
                {/* /PHOTO PREVIEW INFO */}
              </div>
              {/* /PHOTO PREVIEW */}
            </div>
            {/* /PICTURE COLLAGE ITEM */}

            {/* PICTURE COLLAGE ITEM */}
            <div className="picture-collage-item popup-picture-trigger">
              {/* PHOTO PREVIEW */}
              <div className="photo-preview">
                {/* PHOTO PREVIEW IMAGE */}
                <figure className="photo-preview-image liquid" style={{'background': `url(${bg5.src}) center center / cover no-repeat`}}>
                  <img src={bg5.src} alt="photo-preview-08" style={{'display': 'none'}} />
                </figure>
                {/* /PHOTO PREVIEW IMAGE */}
            
                {/* PHOTO PREVIEW INFO */}
                <div className="photo-preview-info">
                  {/* REACTION COUNT LIST */}
                  <div className="reaction-count-list">
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">2</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
            
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">5</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
                  </div>
                  {/* /REACTION COUNT LIST */}
                </div>
                {/* /PHOTO PREVIEW INFO */}
              </div>
              {/* /PHOTO PREVIEW */}
            </div>
            {/* /PICTURE COLLAGE ITEM */}

            {/* PICTURE COLLAGE ITEM */}
            <div className="picture-collage-item">
              {/* PICTURE COLLAGE ITEM OVERLAY */}
              <a className="picture-collage-item-overlay" href="profile-photos.html">
                {/* PICTURE COLLAGE ITEM OVERLAY TEXT */}
                <p className="picture-collage-item-overlay-text">+22</p>
                {/* /PICTURE COLLAGE ITEM OVERLAY TEXT */}
              </a>
              {/* /PICTURE COLLAGE ITEM OVERLAY */}

              {/* PHOTO PREVIEW */}
              <div className="photo-preview">
                {/* PHOTO PREVIEW IMAGE */}
                <figure className="photo-preview-image liquid" style={{'background': `url(${bg4.src}) center center / cover no-repeat`}}>
                  <img src={bg4.src} alt="photo-preview-14" style={{'display': 'none'}} />
                </figure>
                {/* /PHOTO PREVIEW IMAGE */}
            
                {/* PHOTO PREVIEW INFO */}
                <div className="photo-preview-info">
                  {/* REACTION COUNT LIST */}
                  <div className="reaction-count-list">
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-thumbs-up">
                        <use xlinkHref="#svg-thumbs-up"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">2</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
            
                    {/* REACTION COUNT */}
                    <div className="reaction-count negative">
                      {/* REACTION COUNT ICON */}
                      <svg className="reaction-count-icon icon-comment">
                        <use xlinkHref="#svg-comment"></use>
                      </svg>
                      {/* /REACTION COUNT ICON */}
            
                      {/* REACTION COUNT TEXT */}
                      <p className="reaction-count-text">5</p>
                      {/* /REACTION COUNT TEXT */}
                    </div>
                    {/* /REACTION COUNT */}
                  </div>
                  {/* /REACTION COUNT LIST */}
                </div>
                {/* /PHOTO PREVIEW INFO */}
              </div>
              {/* /PHOTO PREVIEW */}
            </div>
            {/* /PICTURE COLLAGE ITEM */}
          </div>
          {/* /PICTURE COLLAGE ROW */}
        </div>
        {/* /PICTURE COLLAGE */}

        {/* TAG LIST */}
        <div className="tag-list">
          {/* TAG ITEM */}
          <a className="tag-item secondary" href="newsfeed.html">Photos</a>
          {/* /TAG ITEM */}

          {/* TAG ITEM */}
          <a className="tag-item secondary" href="newsfeed.html">StreamCon</a>
          {/* /TAG ITEM */}

          {/* TAG ITEM */}
          <a className="tag-item secondary" href="newsfeed.html">StarGirl</a>
          {/* /TAG ITEM */}
        </div>
        {/* /TAG LIST */}

        {/* CONTENT ACTIONS */}
        <div className="content-actions">
          {/* CONTENT ACTION */}
          <div className="content-action">
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE LIST */}
              <div className="meta-line-list reaction-item-list">
                {/* REACTION ITEM */}
                <div className="reaction-item" style={{position: 'relative'}}>
                  {/* REACTION IMAGE */}
                  <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/wow.png" alt="reaction-wow" />
                  {/* /REACTION IMAGE */}
      
                  {/* SIMPLE DROPDOWN */}
                  <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'z-index': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/wow.png" alt="reaction-wow" /> <span className="bold">Wow</span></p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Matt Parker</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  </div>
                  {/* /SIMPLE DROPDOWN */}
                </div>
                {/* /REACTION ITEM */}

                {/* REACTION ITEM */}
                <div className="reaction-item" style={{position: 'relative'}}>
                  {/* REACTION IMAGE */}
                  <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/like.png" alt="reaction-like" />
                  {/* /REACTION IMAGE */}
      
                  {/* SIMPLE DROPDOWN */}
                  <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'z-index': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Sandra Strange</p>
                    {/* /SIMPLE DROPDOWN TEXT */}

                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Jane Rodgers</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  </div>
                  {/* /SIMPLE DROPDOWN */}
                </div>
                {/* /REACTION ITEM */}
              </div>
              {/* /META LINE LIST */}
      
              {/* META LINE TEXT */}
              <p className="meta-line-text">3</p>
              {/* /META LINE TEXT */}
            </div>
            {/* /META LINE */}
      
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE LIST */}
              <div className="meta-line-list user-avatar-list">
                {/* USER AVATAR */}
                <div className="user-avatar micro no-stats">
                  {/* USER AVATAR BORDER */}
                  <div className="user-avatar-border">
                    {/* HEXAGON */}
                    <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BORDER */}
              
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-18-20" data-src="/img/avatar/03.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
                </div>
                {/* /USER AVATAR */}
      
                {/* USER AVATAR */}
                <div className="user-avatar micro no-stats">
                  {/* USER AVATAR BORDER */}
                  <div className="user-avatar-border">
                    {/* HEXAGON */}
                    <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BORDER */}
              
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-18-20" data-src="/img/avatar/15.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
                </div>
                {/* /USER AVATAR */}
      
                {/* USER AVATAR */}
                <div className="user-avatar micro no-stats">
                  {/* USER AVATAR BORDER */}
                  <div className="user-avatar-border">
                    {/* HEXAGON */}
                    <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BORDER */}
              
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-18-20" data-src="/img/avatar/14.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
                </div>
                {/* /USER AVATAR */}
      
                {/* USER AVATAR */}
                <div className="user-avatar micro no-stats">
                  {/* USER AVATAR BORDER */}
                  <div className="user-avatar-border">
                    {/* HEXAGON */}
                    <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BORDER */}
              
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-18-20" data-src="/img/avatar/07.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
                </div>
                {/* /USER AVATAR */}
              </div>
              {/* /META LINE LIST */}
      
              {/* META LINE TEXT */}
              <p className="meta-line-text">4 Participants</p>
              {/* /META LINE TEXT */}
            </div>
            {/* /META LINE */}
          </div>
          {/* /CONTENT ACTION */}
      
          {/* CONTENT ACTION */}
          <div className="content-action">
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE LINK */}
              <p className="meta-line-link">3 Comments</p>
              {/* /META LINE LINK */}
            </div>
            {/* /META LINE */}
      
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE TEXT */}
              <p className="meta-line-text">0 Shares</p>
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
    <div className="post-options">
      {/* POST OPTION WRAP */}
      <div className="post-option-wrap" style={{position: 'relative'}}>
        {/* POST OPTION */}
        <div className="post-option reaction-options-dropdown-trigger">
          {/* POST OPTION ICON */}
          <svg className="post-option-icon icon-thumbs-up">
            <use xlinkHref="#svg-thumbs-up"></use>
          </svg>
          {/* /POST OPTION ICON */}

          {/* POST OPTION TEXT */}
          <p className="post-option-text">React!</p>
          {/* /POST OPTION TEXT */}
        </div>
        {/* /POST OPTION */}

        {/* REACTION OPTIONS */}
        <div className="reaction-options reaction-options-dropdown" style={{'position': 'absolute', 'z-index': '9999', 'bottom': '54px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Like" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/like.png" alt="reaction-like" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-22px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Like</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Love" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/love.png" alt="reaction-love" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-23.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Love</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/dislike.png" alt="reaction-dislike" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-28px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Dislike</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/happy.png" alt="reaction-happy" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-27.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Happy</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/funny.png" alt="reaction-funny" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-27px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Funny</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/wow.png" alt="reaction-wow" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-24px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Wow</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-26.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
          {/* /REACTION OPTION */}

          {/* REACTION OPTION */}
          <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{position: 'relative'}}>
            {/* REACTION OPTION IMAGE */}
            <img className="reaction-option-image" src="/img/reaction/sad.png" alt="reaction-sad" />
            {/* /REACTION OPTION IMAGE */}
          <div className="xm-tooltip" style={{'white-space': 'nowrap', 'position': 'absolute', 'z-index': '99999', 'top': '-28px', 'left': '50%', 'margin-left': '-21.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Sad</p></div></div>
          {/* /REACTION OPTION */}
        </div>
        {/* /REACTION OPTIONS */}
      </div>
      {/* /POST OPTION WRAP */}

      {/* POST OPTION */}
      <div className="post-option">
        {/* POST OPTION ICON */}
        <svg className="post-option-icon icon-comment">
          <use xlinkHref="#svg-comment"></use>
        </svg>
        {/* /POST OPTION ICON */}

        {/* POST OPTION TEXT */}
        <p className="post-option-text">Comment</p>
        {/* /POST OPTION TEXT */}
      </div>
      {/* /POST OPTION */}

      {/* POST OPTION */}
      <div className="post-option">
        {/* POST OPTION ICON */}
        <svg className="post-option-icon icon-share">
          <use xlinkHref="#svg-share"></use>
        </svg>
        {/* /POST OPTION ICON */}

        {/* POST OPTION TEXT */}
        <p className="post-option-text">Share</p>
        {/* /POST OPTION TEXT */}
      </div>
      {/* /POST OPTION */}
    </div>
    {/* /POST OPTIONS */}
  </div>


);}