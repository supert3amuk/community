"use client";
export default function Widget1() {
return (

    <div className="widget-box">
          {/* WIDGET BOX CONTROLS */}
          <div className="widget-box-controls">
            {/* SLIDER CONTROLS */}
            <div id="badge-stat-slider-controls" className="slider-controls" aria-label="Carousel Navigation" tabIndex="0">
              {/* SLIDER CONTROL */}
              <div className="slider-control left" aria-controls="badge-stat-slider-items" tabIndex="-1" data-controls="prev" aria-disabled="true">
                {/* SLIDER CONTROL ICON */}
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                {/* /SLIDER CONTROL ICON */}
              </div>
              {/* /SLIDER CONTROL */}

              {/* SLIDER CONTROL */}
              <div className="slider-control right" aria-controls="badge-stat-slider-items" tabIndex="-1" data-controls="next">
                {/* SLIDER CONTROL ICON */}
                <svg className="slider-control-icon icon-small-arrow">
                  <use xlinkHref="#svg-small-arrow"></use>
                </svg>
                {/* /SLIDER CONTROL ICON */}
              </div>
              {/* /SLIDER CONTROL */}
            </div>
            {/* /SLIDER CONTROLS */}
          </div>
          {/* /WIDGET BOX CONTROLS */}

          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">Featured Badges</p>
          {/* /WIDGET BOX TITLE */}

          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* WIDGET BOX CONTENT SLIDER */}
            <div className="tns-outer" id="badge-stat-slider-items-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1</span>  of 3</div><div id="badge-stat-slider-items-mw" className="tns-ovh"><div className="tns-inner" id="badge-stat-slider-items-iw"><div id="badge-stat-slider-items" className="widget-box-content-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style={{'transition-duration': '0s', transform: 'translate3d(0%, 0px, 0px)'}}>
              {/* WIDGET BOX CONTENT SLIDER ITEM */}
              <div className="widget-box-content-slider-item tns-item tns-slide-active" id="badge-stat-slider-items-item0">
                {/* BADGE ITEM STAT */}
                <div className="badge-item-stat void">
                  {/* TEXT STICKER */}
                  <p className="text-sticker">
                    {/* TEXT STICKER ICON */}
                    <svg className="text-sticker-icon icon-plus-small">
                      <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                    {/* TEXT STICKER ICON */}
                    20 EXP
                  </p>
                  {/* /TEXT STICKER */}

                  {/* BADGE ITEM STAT IMAGE */}
                  <img className="badge-item-stat-image" src="/img/badge/uexp-b.png" alt="badge-uexp-b" />
                  {/* /BADGE ITEM STAT IMAGE */}

                  {/* BADGE ITEM STAT TITLE */}
                  <p className="badge-item-stat-title">Universe Explorer</p>
                  {/* /BADGE ITEM STAT TITLE */}

                  {/* BADGE ITEM STAT TEXT */}
                  <p className="badge-item-stat-text">Joined and posted on 20 different groups</p>
                  {/* /BADGE ITEM STAT TEXT */}

                  {/* PROGRESS STAT */}
                  <div className="progress-stat medium">
                    {/* PROGRESS STAT BAR */}
                    <div id="badge-uexp" className="progress-stat-bar" style={{width: '204px', height: '4px', position: 'relative'}}><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /PROGRESS STAT BAR */}

                    {/* BAR PROGRESS WRAP */}
                    <div className="bar-progress-wrap">
                      {/* BAR PROGRESS INFO */}
                      <p className="bar-progress-info negative center"><span className="bar-progress-text no-space">17<span className="bar-progress-unit">/</span>20</span></p>
                      {/* /BAR PROGRESS INFO */}
                    </div>
                    {/* /BAR PROGRESS WRAP */}
                  </div>
                  {/* /PROGRESS STAT */}
                </div>
                {/* /BADGE ITEM STAT */}
              </div>
              {/* /WIDGET BOX CONTENT SLIDER ITEM */}

              {/* WIDGET BOX CONTENT SLIDER ITEM */}
              <div className="widget-box-content-slider-item tns-item" id="badge-stat-slider-items-item1" aria-hidden="true" tabIndex="-1">
                {/* BADGE ITEM STAT */}
                <div className="badge-item-stat void">
                  {/* TEXT STICKER */}
                  <p className="text-sticker">
                    {/* TEXT STICKER ICON */}
                    <svg className="text-sticker-icon icon-plus-small">
                      <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                    {/* TEXT STICKER ICON */}
                    40 EXP
                  </p>
                  {/* /TEXT STICKER */}

                  {/* BADGE ITEM STAT IMAGE */}
                  <img className="badge-item-stat-image" src="/img/badge/verifieds-b.png" alt="badge-verifieds-b" />
                  {/* /BADGE ITEM STAT IMAGE */}

                  {/* BADGE ITEM STAT TITLE */}
                  <p className="badge-item-stat-title">Verified Streamer</p>
                  {/* /BADGE ITEM STAT TITLE */}

                  {/* BADGE ITEM STAT TEXT */}
                  <p className="badge-item-stat-text">Has linked a stream that was verified by the staff</p>
                  {/* /BADGE ITEM STAT TEXT */}

                  {/* PROGRESS STAT */}
                  <div className="progress-stat medium">
                    {/* PROGRESS STAT BAR */}
                    <div id="badge-verifieds" className="progress-stat-bar" style={{width: '204px', height: '4px', position: 'relative'}}><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /PROGRESS STAT BAR */}

                    {/* BAR PROGRESS WRAP */}
                    <div className="bar-progress-wrap">
                      {/* BAR PROGRESS INFO */}
                      <p className="bar-progress-info negative center">unlocked!</p>
                      {/* /BAR PROGRESS INFO */}
                    </div>
                    {/* /BAR PROGRESS WRAP */}
                  </div>
                  {/* /PROGRESS STAT */}
                </div>
                {/* /BADGE ITEM STAT */}
              </div>
              {/* /WIDGET BOX CONTENT SLIDER ITEM */}

              {/* WIDGET BOX CONTENT SLIDER ITEM */}
              <div className="widget-box-content-slider-item tns-item" id="badge-stat-slider-items-item2" aria-hidden="true" tabIndex="-1">
                {/* BADGE ITEM STAT */}
                <div className="badge-item-stat void">
                  {/* TEXT STICKER */}
                  <p className="text-sticker">
                    {/* TEXT STICKER ICON */}
                    <svg className="text-sticker-icon icon-plus-small">
                      <use xlinkHref="#svg-plus-small"></use>
                    </svg>
                    {/* TEXT STICKER ICON */}
                    40 EXP
                  </p>
                  {/* /TEXT STICKER */}

                  {/* BADGE ITEM STAT IMAGE */}
                  <img className="badge-item-stat-image" src="/img/badge/qconq-b.png" alt="badge-qconq-b" />
                  {/* /BADGE ITEM STAT IMAGE */}

                  {/* BADGE ITEM STAT TITLE */}
                  <p className="badge-item-stat-title">Quest Conqueror</p>
                  {/* /BADGE ITEM STAT TITLE */}

                  {/* BADGE ITEM STAT TEXT */}
                  <p className="badge-item-stat-text">Succesfully completed at least 10 quests at 100%</p>
                  {/* /BADGE ITEM STAT TEXT */}

                  {/* PROGRESS STAT */}
                  <div className="progress-stat medium">
                    {/* PROGRESS STAT BAR */}
                    <div id="badge-qconq" className="progress-stat-bar" style={{width: '204px', height: '4px', position: 'relative'}}><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="204" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                    {/* /PROGRESS STAT BAR */}

                    {/* BAR PROGRESS WRAP */}
                    <div className="bar-progress-wrap">
                      {/* BAR PROGRESS INFO */}
                      <p className="bar-progress-info negative center"><span className="bar-progress-text no-space">4<span className="bar-progress-unit">/</span>10</span></p>
                      {/* /BAR PROGRESS INFO */}
                    </div>
                    {/* /BAR PROGRESS WRAP */}
                  </div>
                  {/* /PROGRESS STAT */}
                </div>
                {/* /BADGE ITEM STAT */}
              </div>
              {/* /WIDGET BOX CONTENT SLIDER ITEM */}
            </div></div></div></div>
            {/* /WIDGET BOX CONTENT SLIDER */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>

);}