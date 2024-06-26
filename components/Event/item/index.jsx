
function JSONComponent({ jsonData }) {
    return (
      <div className='grid grid-3-3-3-3 centered'>
        {jsonData && jsonData.map((item, index) => (
          <JSONItem key={index} data={item} />
        ))}
      </div>
    );
  }
  
  function JSONItem({ data }) {
    return (
  

<div className="event-preview">
    <figure className="event-preview-cover liquid" style={{'background': `url(${data.image}) center center / cover no-repeat`}}>
          <img src={data.image} alt="cover-47" style={{'display': 'none'}} />
        </figure>
        <div className="event-preview-info">
          <div className="event-preview-info-top">
            <div className="date-sticker">
              <p className="date-sticker-day">13</p>
              <p className="date-sticker-month">Aug</p>
            </div>
            <p className="event-preview-title popup-event-information-trigger">{data.title}</p>
            <p className="event-preview-timestamp"><span className="bold">8:30</span> AM</p>
            <p className="event-preview-text">{data.description}</p>
          </div>
          <div className="event-preview-info-bottom">
            <div className="decorated-text">
              <svg className="decorated-text-icon icon-pin">
                <use xlinkHref="#svg-pin"></use>
              </svg>
              <p className="decorated-text-content">{data.location}</p>
            </div>
            <div className="meta-line">
              <div className="meta-line-list user-avatar-list">
                <div className="user-avatar micro no-stats">
                  <div className="user-avatar-border">
                    <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                  </div>
                  <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="/img/avatar/05.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                  </div>
               </div>
             <div className="user-avatar micro no-stats">
                 <div className="user-avatar-border">
                   <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                  </div>
                 <div className="user-avatar-content">
                    <div className="hexagon-image-18-20" data-src="/img/avatar/01.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                  </div>
                </div>
              </div>
              <p className="meta-line-text">will assist</p>
            </div>
            <p className="button white white-tertiary">Remove from Calendar</p>
          </div>
        </div>
      </div>);}
      export default JSONComponent;