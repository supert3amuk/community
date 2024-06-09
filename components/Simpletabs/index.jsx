import { useEffect, useState } from 'react';


function Simpletabs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (

        <div className="simple-tab-items">
        {/* FORM */}
        <form className="form">
          {/* FORM SELECT */}
          <div className="form-select">
            <select id="newsfeed-filter-category" name="newsfeed_filter_category">
              <option value="0">All Updates</option>
              <option value="1">Mentions</option>
              <option value="2">Friends</option>
              <option value="3">Groups</option>
              <option value="4">Blog Posts</option>
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

        {/* SIMPLE TAB ITEM */}
        <p className="simple-tab-item active">All Updates</p>
        {/* /SIMPLE TAB ITEM */}

        {/* SIMPLE TAB ITEM */}
        <p className="simple-tab-item">Mentions</p>
        {/* /SIMPLE TAB ITEM */}

        {/* SIMPLE TAB ITEM */}
        <p className="simple-tab-item">Friends</p>
        {/* /SIMPLE TAB ITEM */}

        {/* SIMPLE TAB ITEM */}
        <p className="simple-tab-item">Groups</p>
        {/* /SIMPLE TAB ITEM */}

        {/* SIMPLE TAB ITEM */}
        <p className="simple-tab-item">Blog Posts</p>
        {/* /SIMPLE TAB ITEM */}
      </div>

    );

}

export default Simpletabs;