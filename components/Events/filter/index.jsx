import React from 'react';

  import { useEffect, useState } from 'react';

function EventsFilter() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (<div className="section-filters-bar v6">
      {/* SECTION FILTERS BAR ACTIONS */}
      <div className="section-filters-bar-actions">
        {/* FORM */}
        <form className="form">
          {/* FORM ITEM */}
          <div className="form-item split">
            {/* FORM INPUT */}
            <div className="form-input small">
              <label for="events-search">Search Events</label>
              <input type="text" id="events-search" name="events_search" />
            </div>
            {/* /FORM INPUT */}
  
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
          {/* /FORM ITEM */}
        </form>
        {/* /FORM */}
      </div>
      {/* /SECTION FILTERS BAR ACTIONS */}
  
      {/* SECTION FILTERS BAR ACTIONS */}
      <div className="section-filters-bar-actions">
        {/* BUTTON */}
        <p className="button secondary popup-event-creation-trigger">+ Add New Event</p>
        {/* /BUTTON */}
      </div>
      {/* /SECTION FILTERS BAR ACTIONS */}
    </div>);
    }

export default EventsFilter;