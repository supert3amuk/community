import React from 'react';

function JSONComponent({ jsonData }) {
  return (
    <div className='grid grid-3-3-3-3 top-space centered'>
      {jsonData && jsonData.map((item, index) => (
        <JSONItem key={index} data={item} />
      ))}
    </div>
  );
}

function JSONItem({ data }) {
  return (
<div className="badge-item-stat">
        {/* TEXT STICKER */}
        <p className="text-sticker">
          {/* TEXT STICKER ICON */}
          <svg className="text-sticker-icon icon-plus-small">
            <use xlinkHref="#svg-plus-small"></use>
          </svg>
          {/* TEXT STICKER ICON */}
          {data.number} Exp
        </p>
        {/* /TEXT STICKER */}
    
        {/* BADGE ITEM STAT IMAGE PREVIEW */}
        <img className="badge-item-stat-image-preview" src={data.image} alt={`badge-${data.lilname}-s`} />
        {/* /BADGE ITEM STAT IMAGE PREVIEW */}
    
        {/* BADGE ITEM STAT IMAGE */}
        <img className="badge-item-stat-image" src={`/img/badge/${data.lilname}-b.png`} alt={`badge-${data.lilname}-b`} />
        {/* /BADGE ITEM STAT IMAGE */}
    
        {/* BADGE ITEM STAT TITLE */}
        <p className="badge-item-stat-title">{data.title}</p>
        {/* /BADGE ITEM STAT TITLE */}
    
        {/* BADGE ITEM STAT TEXT */}
        <p className="badge-item-stat-text">Has posted more than 1 post on their profile</p>
        {/* /BADGE ITEM STAT TEXT */}
    
        {/* PROGRESS STAT */}
        <div className="progress-stat">
          {/* PROGRESS STAT BAR */}
          <div id={`badge-${data.lilname}`} className="progress-stat-bar" style={{'width': '204px', 'height': '4px', 'position': 'relative'}}><canvas width="204" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas><canvas width="204" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
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
      </div>);}
export default JSONComponent;