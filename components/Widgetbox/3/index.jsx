"use client";
export default function Widget2() {
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
              <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'z-index': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
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
          <p className="widget-box-title">Members</p>
          {/* /WIDGET BOX TITLE */}

          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* FILTERS */}
            <div className="filters">
              {/* FILTER */}
              <p className="filter">Newest</p>
              {/* /FILTER */}

              {/* FILTER */}
              <p className="filter active">Popular</p>
              {/* /FILTER */}

              {/* FILTER */}
              <p className="filter">Active</p>
              {/* /FILTER */}
            </div>
            {/* /FILTERS */}

            {/* USER STATUS LIST */}
            <div className="user-status-list">
              {/* USER STATUS */}
              <div className="user-status request-small">
                {/* USER STATUS AVATAR */}
                <a className="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div className="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-30-32" data-src="/img/avatar/07.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
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
                      <p className="user-avatar-badge-text">26</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </div>
                  {/* /USER AVATAR */}
                </a>
                {/* /USER STATUS AVATAR */}
            
                {/* USER STATUS TITLE */}
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Sarah Diamond</a></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p className="user-status-text small">24.5K profile views</p>
                {/* /USER STATUS TEXT */}
            
                {/* ACTION REQUEST LIST */}
                <div className="action-request-list">
                  {/* ACTION REQUEST */}
                  <div className="action-request accept">
                    {/* ACTION REQUEST ICON */}
                    <svg className="action-request-icon icon-add-friend">
                      <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    {/* /ACTION REQUEST ICON */}
                  </div>
                  {/* /ACTION REQUEST */}
                </div>
                {/* ACTION REQUEST LIST */}
              </div>
              {/* /USER STATUS */}

              {/* USER STATUS */}
              <div className="user-status request-small">
                {/* USER STATUS AVATAR */}
                <a className="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div className="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-30-32" data-src="/img/avatar/03.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
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
                      <p className="user-avatar-badge-text">16</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </div>
                  {/* /USER AVATAR */}
                </a>
                {/* /USER STATUS AVATAR */}
            
                {/* USER STATUS TITLE */}
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Nick Grissom</a></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p className="user-status-text small">20.1K profile views</p>
                {/* /USER STATUS TEXT */}
            
                {/* ACTION REQUEST LIST */}
                <div className="action-request-list">
                  {/* ACTION REQUEST */}
                  <div className="action-request accept">
                    {/* ACTION REQUEST ICON */}
                    <svg className="action-request-icon icon-add-friend">
                      <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    {/* /ACTION REQUEST ICON */}
                  </div>
                  {/* /ACTION REQUEST */}
                </div>
                {/* ACTION REQUEST LIST */}
              </div>
              {/* /USER STATUS */}

              {/* USER STATUS */}
              <div className="user-status request-small">
                {/* USER STATUS AVATAR */}
                <a className="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div className="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-30-32" data-src="/img/avatar/23.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
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
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Rosie Sakura</a></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p className="user-status-text small">19.7K profile views</p>
                {/* /USER STATUS TEXT */}
            
                {/* ACTION REQUEST LIST */}
                <div className="action-request-list">
                  {/* ACTION REQUEST */}
                  <div className="action-request accept">
                    {/* ACTION REQUEST ICON */}
                    <svg className="action-request-icon icon-add-friend">
                      <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    {/* /ACTION REQUEST ICON */}
                  </div>
                  {/* /ACTION REQUEST */}
                </div>
                {/* ACTION REQUEST LIST */}
              </div>
              {/* /USER STATUS */}

              {/* USER STATUS */}
              <div className="user-status request-small">
                {/* USER STATUS AVATAR */}
                <a className="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div className="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-30-32" data-src="/img/avatar/15.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
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
                      <p className="user-avatar-badge-text">22</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </div>
                  {/* /USER AVATAR */}
                </a>
                {/* /USER STATUS AVATAR */}
            
                {/* USER STATUS TITLE */}
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Peter Stark</a></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p className="user-status-text small">16.5K profile views</p>
                {/* /USER STATUS TEXT */}
            
                {/* ACTION REQUEST LIST */}
                <div className="action-request-list">
                  {/* ACTION REQUEST */}
                  <div className="action-request accept">
                    {/* ACTION REQUEST ICON */}
                    <svg className="action-request-icon icon-add-friend">
                      <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    {/* /ACTION REQUEST ICON */}
                  </div>
                  {/* /ACTION REQUEST */}
                </div>
                {/* ACTION REQUEST LIST */}
              </div>
              {/* /USER STATUS */}

              {/* USER STATUS */}
              <div className="user-status request-small">
                {/* USER STATUS AVATAR */}
                <a className="user-status-avatar" href="profile-timeline.html">
                  {/* USER AVATAR */}
                  <div className="user-avatar small no-outline">
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-30-32" data-src="/img/avatar/04.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
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
                      <p className="user-avatar-badge-text">6</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </div>
                  {/* /USER AVATAR */}
                </a>
                {/* /USER STATUS AVATAR */}
            
                {/* USER STATUS TITLE */}
                <p className="user-status-title"><a className="bold" href="profile-timeline.html">Bearded Wonder</a></p>
                {/* /USER STATUS TITLE */}
            
                {/* USER STATUS TEXT */}
                <p className="user-status-text small">9.8K profile views</p>
                {/* /USER STATUS TEXT */}
            
                {/* ACTION REQUEST LIST */}
                <div className="action-request-list">
                  {/* ACTION REQUEST */}
                  <div className="action-request accept">
                    {/* ACTION REQUEST ICON */}
                    <svg className="action-request-icon icon-add-friend">
                      <use xlinkHref="#svg-add-friend"></use>
                    </svg>
                    {/* /ACTION REQUEST ICON */}
                  </div>
                  {/* /ACTION REQUEST */}
                </div>
                {/* ACTION REQUEST LIST */}
              </div>
              {/* /USER STATUS */}
            </div>
            {/* /USER STATUS LIST */}
          </div>
          {/* WIDGET BOX CONTENT */}
        </div>

); 
}