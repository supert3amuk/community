import { useEffect, useState } from 'react';

function groupmenu() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }
    return (

<div className="section-filters-bar v1">
      {/* SECTION FILTERS BAR ACTIONS */}
      <div className="section-filters-bar-actions">
        {/* FORM */}
        <form className="form">
          {/* FORM INPUT */}
          <div className="form-input small with-button">
            <label for="groups-search">Search Groups</label>
            <input type="text" id="groups-search" name="groups_search" />
            {/* BUTTON */}
            <button className="button primary">
              {/* ICON MAGNIFYING GLASS */}
              <svg className="icon-magnifying-glass">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
              {/* /ICON MAGNIFYING GLASS */}
            </button>
            {/* /BUTTON */}
          </div>
          {/* /FORM INPUT */}
  
          {/* FORM SELECT */}
          <div className="form-select">
            <label for="groups-filter-category">Filter By</label>
            <select id="groups-filter-category" name="groups_filter_category">
              <option value="0">Newly Created</option>
              <option value="1">Most Members</option>
              <option value="2">Alphabetical</option>
            </select>
            {/* FORM SELECT ICON */}
            <svg className="form-select-icon icon-small-arrow">
              <use xlinkHref="#svg-small-arrow"></use>
            </svg>
            {/* /FORM SELECT ICON */}
          </div>
          {/* /FORM SELECT */}
        </form>
        {/* /FORM */}
  
        {/* FILTER TABS */}
        <div className="filter-tabs">
          {/* FILTER TAB */}
          <div className="filter-tab active">
            {/* FILTER TAB TEXT */}
            <p className="filter-tab-text">Newly Created</p>
            {/* /FILTER TAB TEXT */}
          </div>
          {/* /FILTER TAB */}
  
          {/* FILTER TAB */}
          <div className="filter-tab">
            {/* FILTER TAB TEXT */}
            <p className="filter-tab-text">Most Members</p>
            {/* /FILTER TAB TEXT */}
          </div>
          {/* /FILTER TAB */}
  
          {/* FILTER TAB */}
          <div className="filter-tab">
            {/* FILTER TAB TEXT */}
            <p className="filter-tab-text">Alphabetical</p>
            {/* /FILTER TAB TEXT */}
          </div>
          {/* /FILTER TAB */}
        </div>
        {/* /FILTER TABS */}
      </div>
      {/* /SECTION FILTERS BAR ACTIONS */}
  
      {/* SECTION FILTERS BAR ACTIONS */}
      <div className="section-filters-bar-actions">
        {/* VIEW ACTIONS */}
        <div className="view-actions">
          {/* VIEW ACTION */}
          <div className="view-action text-tooltip-tft-medium active" data-title="Big Grid" style={{'position': 'relative'}}>
            {/* VIEW ACTION ICON */}
            <svg className="view-action-icon icon-big-grid-view">
              <use xlinkHref="#svg-big-grid-view"></use>
            </svg>
            {/* /VIEW ACTION ICON */}
          <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-31.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px)', 'transition': '0.3s ease-in-out'}}><p className="xm-tooltip-text">Big Grid</p></div></div>
          {/* /VIEW ACTION */}
  
          {/* VIEW ACTION */}
          <div className="view-action text-tooltip-tft-medium" data-title="Small Grid" style={{'position': 'relative'}}>
            {/* VIEW ACTION ICON */}
            <svg className="view-action-icon icon-small-grid-view">
              <use xlinkHref="#svg-small-grid-view"></use>
            </svg>
            {/* /VIEW ACTION ICON */}
          <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-37.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px)', 'transition': '0.3s ease-in-out'}}><p className="xm-tooltip-text">Small Grid</p></div></div>
          {/* /VIEW ACTION */}
  
          {/* VIEW ACTION */}
          <div className="view-action text-tooltip-tft-medium" data-title="List" style={{'position': 'relative'}}>
            {/* VIEW ACTION ICON */}
            <svg className="view-action-icon icon-list-grid-view">
              <use xlinkHref="#svg-list-grid-view"></use>
            </svg>
            {/* /VIEW ACTION ICON */}
          <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-21px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px)', 'transition': '0.3s ease-in-out'}}><p className="xm-tooltip-text">List</p></div></div>
          {/* /VIEW ACTION */}
        </div>
        {/* /VIEW ACTIONS */}
      </div>
      {/* /SECTION FILTERS BAR ACTIONS */}
    </div>
    );
}
export default groupmenu;