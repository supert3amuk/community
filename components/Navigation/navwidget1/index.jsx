import { useEffect, useState } from 'react';

function navwidget() {
  const [isClient, setIsClient] = useState(false);
const jsonData = [
  {
    "title": "Newsfeed",
    "icon": "newsfeed",
    "link": "/newsfeed/"
  },
  {
    "title": "Overview",
    "icon": "overview",
    "link": "overview.html"
  },
  {
    "title": "Groups",
    "icon": "group",
    "link": "/group"
  },
  {
    "title": "Members",
    "icon": "members",
    "link": "members.html"
  },
  {
    "title": "Badges",
    "icon": "badges",
    "link": "badges.html"
  },
  {
    "title": "Quests",
    "icon": "quests",
    "link": "quests.html"
  },
  {
    "title": "Streams",
    "icon": "streams",
    "link": "streams.html"
  },
  {
    "title": "Events",
    "icon": "events",
    "link": "events.html"
  },
  {
    "title": "Forums",
    "icon": "forums",
    "link": "forums.html"
  },
  {
    "title": "Marketplace",
    "icon": "marketplace",
    "link": "marketplace.html"
  }
]
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    
<nav id="navigation-widget-small" className="navigation-widget navigation-widget-desktop closed sidebar left delayed">
   
    <a className="user-avatar small no-outline online" href="profile-timeline.html">
    
      <div className="user-avatar-content">
     
        <div className="hexagon-image-30-32" data-src="../../../../img/avatar/01.jpg"></div>
      
      </div>
     
      <div className="user-avatar-progress">
        <div className="hexagon-progress-40-44"></div>
       </div>
    
      <div className="user-avatar-progress-border">
        <div className="hexagon-border-40-44"></div>
      </div>
       <div className="user-avatar-badge">
        <div className="user-avatar-badge-border">
           <div className="hexagon-22-24"></div>
         </div>
        <div className="user-avatar-badge-content">
          <div className="hexagon-dark-16-18"></div>
        </div>
        <p className="user-avatar-badge-text">24</p>
      </div>
    </a>
    <ul className="menu small">
    {jsonData && jsonData.map((item, index) => (
        <JSONItem key={index} data={item} />
      ))}
    </ul>
  </nav>
   );
}
function JSONItem({ data, currentPage }) {
  const isActive = currentPage === data.link ? 'active' : '';

  return (
    <li className={`menu-item ${isActive}`}>
      <a className='menu-item-link text-tooltip-tfr' href={`${data.link}`} data-title={data.title}>
        <svg className={`menu-item-link-icon icon-${data.icon}`}>
          <use xlinkHref={`#svg-${data.icon}`}></use>
        </svg>
      </a>
    </li>
  );
}


export default navwidget;