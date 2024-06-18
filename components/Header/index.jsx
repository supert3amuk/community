
import React from 'react';
import St from "../../svg/st";


  import { useEffect, useState } from 'react';

function header1() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
<header className="header">
    {/* HEADER ACTIONS */}
    <div className="header-actions">
      {/* HEADER BRAND */}
      <div className="header-brand">
        {/* LOGO */}
        <div className="logo">
          {/* ICON LOGO VIKINGER */}
          <St />
          {/* /ICON LOGO VIKINGER */}
        </div>
        {/* /LOGO */}

        {/* HEADER BRAND TEXT */}
        <h1 className="header-brand-text">Superteam UK</h1>
        {/* /HEADER BRAND TEXT */}
      </div>
      {/* /HEADER BRAND */}
    </div>
    {/* /HEADER ACTIONS */}

    {/* HEADER ACTIONS */}
    <div className="header-actions">
      {/* SIDEMENU TRIGGER */}
      <div className="sidemenu-trigger navigation-widget-trigger">
        {/* ICON GRID */}
        <svg className="icon-grid">
          <use xlinkHref="#svg-grid"></use>
        </svg>
        {/* /ICON GRID */}
      </div>
      {/* /SIDEMENU TRIGGER */}

      {/* MOBILEMENU TRIGGER */}
      <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
        {/* BURGER ICON */}
        <div className="burger-icon inverted">
          {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
          {/* /BURGER ICON BAR */}

          {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
          {/* /BURGER ICON BAR */}

          {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
          {/* /BURGER ICON BAR */}
        </div>
        {/* /BURGER ICON */}
      </div>
      {/* /MOBILEMENU TRIGGER */}

      {/* NAVIGATION */}
      <nav className="navigation">
        {/* MENU MAIN */}
        <ul className="menu-main">
          {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
            {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="/">Home</a>
            {/* /MENU MAIN ITEM LINK */}
          </li>
          {/* /MENU MAIN ITEM */}

          {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
            {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="#">Careers</a>
            {/* /MENU MAIN ITEM LINK */}
          </li>
          {/* /MENU MAIN ITEM */}

          {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
            {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="#">Faqs</a>
            {/* /MENU MAIN ITEM LINK */}
          </li>
          {/* /MENU MAIN ITEM */}

          {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
            {/* MENU MAIN ITEM LINK */}
            <p className="menu-main-item-link">
              {/* ICON DOTS */}
              <svg className="icon-dots">
                <use xlinkHref="#svg-dots"></use>
              </svg>
              {/* /ICON DOTS */}
            </p>
            {/* /MENU MAIN ITEM LINK */}

            {/* MENU MAIN */}
            <ul className="menu-main">
              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">About Us</a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}

              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Our Blog</a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}

              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Contact Us</a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}

              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Privacy Policy</a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}
            </ul>
            {/* /MENU MAIN */}
          </li>
          {/* /MENU MAIN ITEM */}
        </ul>
        {/* /MENU MAIN */}
      </nav>
      {/* /NAVIGATION */}
    </div>
    {/* /HEADER ACTIONS */}

    {/* HEADER ACTIONS */}
    <div className="header-actions search-bar">
      {/* INTERACTIVE INPUT */}
      <div className="interactive-input dark">
        <input type="text" id="search-main" name="search_main" placeholder="Search here for people or groups" />
        {/* INTERACTIVE INPUT ICON WRAP */}
        <div className="interactive-input-icon-wrap">
          {/* INTERACTIVE INPUT ICON */}
          <svg className="interactive-input-icon icon-magnifying-glass">
            <use xlinkHref="#svg-magnifying-glass"></use>
          </svg>
          {/* /INTERACTIVE INPUT ICON */}
        </div>
        {/* /INTERACTIVE INPUT ICON WRAP */}

        {/* INTERACTIVE INPUT ACTION */}
        <div className="interactive-input-action">
          {/* INTERACTIVE INPUT ACTION ICON */}
          <svg className="interactive-input-action-icon icon-cross-thin">
            <use xlinkHref="#svg-cross-thin"></use>
          </svg>
          {/* /INTERACTIVE INPUT ACTION ICON */}
        </div>
        {/* /INTERACTIVE INPUT ACTION */}
      </div>
      {/* /INTERACTIVE INPUT */}

      {/* DROPDOWN BOX */}
      <div className="dropdown-box padding-bottom-small header-search-dropdown">
        {/* DROPDOWN BOX CATEGORY */}
        <div className="dropdown-box-category">
          {/* DROPDOWN BOX CATEGORY TITLE */}
          <p className="dropdown-box-category-title">Members</p>
          {/* /DROPDOWN BOX CATEGORY TITLE */}
        </div>
        {/* /DROPDOWN BOX CATEGORY */}
    
        {/* DROPDOWN BOX LIST */}
        <div className="dropdown-box-list small no-scroll">
          {/* DROPDOWN BOX LIST ITEM */}
          <a className="dropdown-box-list-item" href="profile-timeline.html">
            {/* USER STATUS */}
            <div className="user-status notification">
              {/* USER STATUS AVATAR */}
              <div className="user-status-avatar">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-30-32" data-src="/img/avatar/05.jpg"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
              
                  {/* USER AVATAR PROGRESS */}
                  <div className="user-avatar-progress">
                    {/* HEXAGON */}
                    <div className="hexagon-progress-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS */}
              
                  {/* USER AVATAR PROGRESS BORDER */}
                  <div className="user-avatar-progress-border">
                    {/* HEXAGON */}
                    <div className="hexagon-border-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS BORDER */}
              
                  {/* USER AVATAR BADGE */}
                  <div className="user-avatar-badge">
                    {/* USER AVATAR BADGE BORDER */}
                    <div className="user-avatar-badge-border">
                      {/* HEXAGON */}
                      <div className="hexagon-22-24"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE BORDER */}
              
                    {/* USER AVATAR BADGE CONTENT */}
                    <div className="user-avatar-badge-content">
                      {/* HEXAGON */}
                      <div className="hexagon-dark-16-18"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE CONTENT */}
              
                    {/* USER AVATAR BADGE TEXT */}
                    <p className="user-avatar-badge-text">12</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </div>
              {/* /USER STATUS AVATAR */}
          
              {/* USER STATUS TITLE */}
              <p className="user-status-title"><span className="bold">Neko Bebop</span></p>
              {/* /USER STATUS TITLE */}
          
              {/* USER STATUS TEXT */}
              <p className="user-status-text">1 friends in common</p>
              {/* /USER STATUS TEXT */}
          
              {/* USER STATUS ICON */}
              <div className="user-status-icon">
                {/* ICON FRIEND */}
                <svg className="icon-friend">
                  <use xlinkHref="#svg-friend"></use>
                </svg>
                {/* /ICON FRIEND */}
              </div>
              {/* /USER STATUS ICON */}
            </div>
            {/* /USER STATUS */}
          </a>
          {/* /DROPDOWN BOX LIST ITEM */}
    
          {/* DROPDOWN BOX LIST ITEM */}
          <a className="dropdown-box-list-item" href="profile-timeline.html">
            {/* USER STATUS */}
            <div className="user-status notification">
              {/* USER STATUS AVATAR */}
              <div className="user-status-avatar">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-30-32" data-src="/img/avatar/15.jpg"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
              
                  {/* USER AVATAR PROGRESS */}
                  <div className="user-avatar-progress">
                    {/* HEXAGON */}
                    <div className="hexagon-progress-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS */}
              
                  {/* USER AVATAR PROGRESS BORDER */}
                  <div className="user-avatar-progress-border">
                    {/* HEXAGON */}
                    <div className="hexagon-border-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS BORDER */}
              
                  {/* USER AVATAR BADGE */}
                  <div className="user-avatar-badge">
                    {/* USER AVATAR BADGE BORDER */}
                    <div className="user-avatar-badge-border">
                      {/* HEXAGON */}
                      <div className="hexagon-22-24"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE BORDER */}
              
                    {/* USER AVATAR BADGE CONTENT */}
                    <div className="user-avatar-badge-content">
                      {/* HEXAGON */}
                      <div className="hexagon-dark-16-18"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE CONTENT */}
              
                    {/* USER AVATAR BADGE TEXT */}
                    <p className="user-avatar-badge-text">7</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </div>
              {/* /USER STATUS AVATAR */}
          
              {/* USER STATUS TITLE */}
              <p className="user-status-title"><span className="bold">Tim Rogers</span></p>
              {/* /USER STATUS TITLE */}
          
              {/* USER STATUS TEXT */}
              <p className="user-status-text">4 friends in common</p>
              {/* /USER STATUS TEXT */}
          
              {/* USER STATUS ICON */}
              <div className="user-status-icon">
                {/* ICON FRIEND */}
                <svg className="icon-friend">
                  <use xlinkHref="#svg-friend"></use>
                </svg>
                {/* /ICON FRIEND */}
              </div>
              {/* /USER STATUS ICON */}
            </div>
            {/* /USER STATUS */}
          </a>
          {/* /DROPDOWN BOX LIST ITEM */}
        </div>
        {/* /DROPDOWN BOX LIST */}
    
        {/* DROPDOWN BOX CATEGORY */}
        <div className="dropdown-box-category">
          {/* DROPDOWN BOX CATEGORY TITLE */}
          <p className="dropdown-box-category-title">Groups</p>
          {/* /DROPDOWN BOX CATEGORY TITLE */}
        </div>
        {/* /DROPDOWN BOX CATEGORY */}
    
        {/* DROPDOWN BOX LIST */}
        <div className="dropdown-box-list small no-scroll">
          {/* DROPDOWN BOX LIST ITEM */}
          <a className="dropdown-box-list-item" href="group-timeline.html">
            {/* USER STATUS */}
            <div className="user-status notification">
              {/* USER STATUS AVATAR */}
              <div className="user-status-avatar">
                {/* USER AVATAR */}
                <div className="user-avatar small no-border">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-40-44" data-src="/img/avatar/24.jpg"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
                </div>
                {/* /USER AVATAR */}
              </div>
              {/* /USER STATUS AVATAR */}
          
              {/* USER STATUS TITLE */}
              <p className="user-status-title"><span className="bold">Cosplayers of the World</span></p>
              {/* /USER STATUS TITLE */}
          
              {/* USER STATUS TEXT */}
              <p className="user-status-text">139 members</p>
              {/* /USER STATUS TEXT */}
          
              {/* USER STATUS ICON */}
              <div className="user-status-icon">
                {/* ICON GROUP */}
                <svg className="icon-group">
                  <use xlinkHref="#svg-group"></use>
                </svg>
                {/* /ICON GROUP */}
              </div>
              {/* /USER STATUS ICON */}
            </div>
            {/* /USER STATUS */}
          </a>
          {/* /DROPDOWN BOX LIST ITEM */}
        </div>
        {/* /DROPDOWN BOX LIST */}
    
        {/* DROPDOWN BOX CATEGORY */}
        <div className="dropdown-box-category">
          {/* DROPDOWN BOX CATEGORY TITLE */}
          <p className="dropdown-box-category-title">Marketplace</p>
          {/* /DROPDOWN BOX CATEGORY TITLE */}
        </div>
        {/* /DROPDOWN BOX CATEGORY */}
      
        {/* DROPDOWN BOX LIST */}
        <div className="dropdown-box-list small no-scroll">
          {/* DROPDOWN BOX LIST ITEM */}
          <a className="dropdown-box-list-item" href="marketplace-product.html">
            {/* USER STATUS */}
            <div className="user-status no-padding-top">
              {/* USER STATUS AVATAR */}
              <div className="user-status-avatar">
                {/* PICTURE */}
                <figure className="picture small round liquid">
                  <img src="/img/marketplace/items/07.jpg" alt="item-07" />
                </figure>
                {/* /PICTURE */}
              </div>
              {/* /USER STATUS AVATAR */}
          
              {/* USER STATUS TITLE */}
              <p className="user-status-title"><span className="bold">Mercenaries White Frame</span></p>
              {/* /USER STATUS TITLE */}
          
              {/* USER STATUS TEXT */}
              <p className="user-status-text">By Neko Bebop</p>
              {/* /USER STATUS TEXT */}
          
              {/* USER STATUS ICON */}
              <div className="user-status-icon">
                {/* ICON MARKETPLACE */}
                <svg className="icon-marketplace">
                  <use xlinkHref="#svg-marketplace"></use>
                </svg>
                {/* /ICON MARKETPLACE */}
              </div>
              {/* /USER STATUS ICON */}
            </div>
            {/* /USER STATUS */}
          </a>
          {/* /DROPDOWN BOX LIST ITEM */}
        </div>
        {/* /DROPDOWN BOX LIST */}
      </div>
      {/* /DROPDOWN BOX */}
    </div>
    {/* /HEADER ACTIONS */}

    {/* HEADER ACTIONS */}
    <div className="header-actions">
      {/* PROGRESS STAT */}
      <div className="progress-stat">
        {/* BAR PROGRESS WRAP */}
        <div className="bar-progress-wrap">
          {/* BAR PROGRESS INFO */}
          <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
          {/* /BAR PROGRESS INFO */}
        </div>
        {/* /BAR PROGRESS WRAP */}
    
        {/* PROGRESS STAT BAR */}
        <div id="logged-user-level" className="progress-stat-bar"></div>
        {/* /PROGRESS STAT BAR */}
      </div>
      {/* /PROGRESS STAT */}
    </div>
    {/* /HEADER ACTIONS */}

    {/* HEADER ACTIONS */}
    <div className="header-actions">
      {/* ACTION LIST */}
   
      {/* /ACTION LIST */}

      {/* ACTION ITEM WRAP */}
      <div className="action-item-wrap">
        {/* ACTION ITEM */}
        <div className="action-item dark header-settings-dropdown-trigger">
          {/* ACTION ITEM ICON */}
          <svg className="action-item-icon icon-settings">
            <use xlinkHref="#svg-settings"></use>
          </svg>
          {/* /ACTION ITEM ICON */}
        </div>
        {/* /ACTION ITEM */}

        {/* DROPDOWN NAVIGATION */}
        <div className="dropdown-navigation header-settings-dropdown">
          {/* DROPDOWN NAVIGATION HEADER */}
          <div className="dropdown-navigation-header">
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER STATUS AVATAR */}
              <a className="user-status-avatar" href="profile-timeline.html">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div className="hexagon-image-30-32" data-src="/img/avatar/01.jpg"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR CONTENT */}
              
                  {/* USER AVATAR PROGRESS */}
                  <div className="user-avatar-progress">
                    {/* HEXAGON */}
                    <div className="hexagon-progress-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS */}
              
                  {/* USER AVATAR PROGRESS BORDER */}
                  <div className="user-avatar-progress-border">
                    {/* HEXAGON */}
                    <div className="hexagon-border-40-44"></div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR PROGRESS BORDER */}
              
                  {/* USER AVATAR BADGE */}
                  <div className="user-avatar-badge">
                    {/* USER AVATAR BADGE BORDER */}
                    <div className="user-avatar-badge-border">
                      {/* HEXAGON */}
                      <div className="hexagon-22-24"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE BORDER */}
              
                    {/* USER AVATAR BADGE CONTENT */}
                    <div className="user-avatar-badge-content">
                      {/* HEXAGON */}
                      <div className="hexagon-dark-16-18"></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BADGE CONTENT */}
              
                    {/* USER AVATAR BADGE TEXT */}
                    <p className="user-avatar-badge-text">24</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </a>
              {/* /USER STATUS AVATAR */}
          
              {/* USER STATUS TITLE */}
              <p className="user-status-title"><span className="bold">Hi Marina!</span></p>
              {/* /USER STATUS TITLE */}
          
              {/* USER STATUS TEXT */}
              <p className="user-status-text small"><a href="profile-timeline.html">@marinavalentine</a></p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
          </div>
          {/* /DROPDOWN NAVIGATION HEADER */}
      
          {/* DROPDOWN NAVIGATION CATEGORY */}
          <p className="dropdown-navigation-category">My Profile</p>
          {/* /DROPDOWN NAVIGATION CATEGORY */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-profile-info.html">Profile Info</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-profile-social.html">Social &amp; Stream</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-profile-notifications.html">Notifications</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-profile-messages.html">Messages</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-profile-requests.html">Friend Requests</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION CATEGORY */}
          <p className="dropdown-navigation-category">Account</p>
          {/* /DROPDOWN NAVIGATION CATEGORY */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-account-info.html">Account Info</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-account-password.html">Change Password</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-account-settings.html">General Settings</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION CATEGORY */}
          <p className="dropdown-navigation-category">Groups</p>
          {/* /DROPDOWN NAVIGATION CATEGORY */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-group-management.html">Manage Groups</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-group-invitations.html">Invitations</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION CATEGORY */}
          <p className="dropdown-navigation-category">My Store</p>
          {/* /DROPDOWN NAVIGATION CATEGORY */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-store-account.html">My Account <span className="highlighted">$250,32</span></a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-store-statement.html">Sales Statement</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-store-items.html">Manage Items</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION LINK */}
          <a className="dropdown-navigation-link" href="hub-store-downloads.html">Downloads</a>
          {/* /DROPDOWN NAVIGATION LINK */}
      
          {/* DROPDOWN NAVIGATION BUTTON */}
          <p className="dropdown-navigation-button button small secondary">Logout</p>
          {/* /DROPDOWN NAVIGATION BUTTON */}
        </div>
        {/* /DROPDOWN NAVIGATION */}
      </div>
      {/* /ACTION ITEM WRAP */}
    </div>
    {/* /HEADER ACTIONS */}
  </header>


 );
}
export default header1;