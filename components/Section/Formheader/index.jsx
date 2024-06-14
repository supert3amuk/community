import React from 'react';

  import { useEffect, useState } from 'react';

function FormHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (<div class="section-filters-bar v2">
      {/* FORM */}
      <form class="form">
        {/* FORM ITEM */}
        <div class="form-item split medium">
          {/* FORM SELECT */}
          <div class="form-select">
            <label for="quest-filter-show">Show</label>
            <select id="quest-filter-show" name="quest_filter_show">
              <option value="0">All Quests</option>
              <option value="1">Completed Quests</option>
              <option value="2">Open Quests</option>
            </select>
            {/* FORM SELECT ICON */}
            <svg class="form-select-icon icon-small-arrow">
              <use xlink:href="#svg-small-arrow"></use>
            </svg>
            {/* /FORM SELECT ICON */}
          </div>
          {/* /FORM SELECT */}

          {/* FORM SELECT */}
          <div class="form-select">
            <label for="quest-filter-criteria">Filter By</label>
            <select id="quest-filter-criteria" name="quest_filter_criteria">
              <option value="0">Quest Progress</option>
              <option value="1">Quest EXP</option>
            </select>
            {/* FORM SELECT ICON */}
            <svg class="form-select-icon icon-small-arrow">
              <use xlink:href="#svg-small-arrow"></use>
            </svg>
            {/* /FORM SELECT ICON */}
          </div>
          {/* /FORM SELECT */}

          {/* FORM SELECT */}
          <div class="form-select">
            <label for="quest-filter-order">Order By</label>
            <select id="quest-filter-order" name="quest_filter_order">
              <option value="0">Descending</option>
              <option value="1">Ascending</option>
            </select>
            {/* FORM SELECT ICON */}
            <svg class="form-select-icon icon-small-arrow">
              <use xlink:href="#svg-small-arrow"></use>
            </svg>
            {/* /FORM SELECT ICON */}
          </div>
          {/* /FORM SELECT */}
      
          {/* BUTTON */}
          <button class="button secondary">Filter Quests</button>
          {/* /BUTTON */}
        </div>
        {/* /FORM ITEM */}
      </form>
      {/* /FORM */}
    </div>
    );
}

export default FormHeader;