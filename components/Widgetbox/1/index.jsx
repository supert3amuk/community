"use client";
export default function Widget() {
return (
<div className="widget-box">
{/* PROGRESS ARC SUMMARY */}
<div className="progress-arc-summary">
  {/* PROGRESS ARC WRAP */}
  <div className="progress-arc-wrap">
    {/* PROGRESS ARC */}
    <div className="progress-arc"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <canvas id="profile-completion-chart" style={{'display': 'block', 'height': '140px', 'width': '140px'}} width="280" height="280" className="chartjs-render-monitor"></canvas>
    </div>
    {/* PROGRESS ARC */}

    {/* PROGRESS ARC INFO */}
    <div className="progress-arc-info">
      {/* PROGRESS ARC TITLE */}
      <p className="progress-arc-title">59%</p>
      {/* /PROGRESS ARC TITLE */}
    </div>
    {/* /PROGRESS ARC INFO */}
  </div>
  {/* /PROGRESS ARC WRAP */}

  {/* PROGRESS ARC SUMMARY INFO */}
  <div className="progress-arc-summary-info">
    {/* PROGRESS ARC SUMMARY TITLE */}
    <p className="progress-arc-summary-title">Profile Completion</p>
    {/* /PROGRESS ARC SUMMARY TITLE */}

    {/* PROGRESS ARC SUMMARY TITLE */}
    <p className="progress-arc-summary-subtitle">Marina Valentine</p>
    {/* /PROGRESS ARC SUMMARY TITLE */}

    {/* PROGRESS ARC SUMMARY TITLE */}
    <p className="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
    {/* /PROGRESS ARC SUMMARY TITLE */}
  </div>
  {/* /PROGRESS ARC SUMMARY INFO */}
</div>
{/* /PROGRESS ARC SUMMARY */}

{/* ACHIEVEMENT STATUS LIST */}
<div className="achievement-status-list">
  {/* ACHIEVEMENT STATUS */}
  <div className="achievement-status">
    {/* ACHIEVEMENT STATUS PROGRESS */}
    <p className="achievement-status-progress">11/30</p>
    {/* /ACHIEVEMENT STATUS PROGRESS */}

    {/* ACHIEVEMENT STATUS INFO */}
    <div className="achievement-status-info">
      {/* ACHIEVEMENT STATUS TITLE */}
      <p className="achievement-status-title">Quests</p>
      {/* /ACHIEVEMENT STATUS TITLE */}
      
      {/* ACHIEVEMENT STATUS TEXT */}
      <p className="achievement-status-text">Completed</p>
      {/* /ACHIEVEMENT STATUS TEXT */}
    </div>
    {/* /ACHIEVEMENT STATUS INFO */}

    {/* ACHIEVEMENT STATUS IMAGE */}
    <img className="achievement-status-image" src="/img/badge/completedq-s.png" alt="bdage-completedq-s" />
    {/* /ACHIEVEMENT STATUS IMAGE */}
  </div>
  {/* /ACHIEVEMENT STATUS */}

  {/* ACHIEVEMENT STATUS */}
  <div className="achievement-status">
    {/* ACHIEVEMENT STATUS PROGRESS */}
    <p className="achievement-status-progress">22/46</p>
    {/* /ACHIEVEMENT STATUS PROGRESS */}

    {/* ACHIEVEMENT STATUS INFO */}
    <div className="achievement-status-info">
      {/* ACHIEVEMENT STATUS TITLE */}
      <p className="achievement-status-title">Badges</p>
      {/* /ACHIEVEMENT STATUS TITLE */}
      
      {/* ACHIEVEMENT STATUS TEXT */}
      <p className="achievement-status-text">Unlocked</p>
      {/* /ACHIEVEMENT STATUS TEXT */}
    </div>
    {/* /ACHIEVEMENT STATUS INFO */}

    {/* ACHIEVEMENT STATUS IMAGE */}
    <img className="achievement-status-image" src="/img/badge/unlocked-badge.png" alt="bdage-unlocked-badge" />
    {/* /ACHIEVEMENT STATUS IMAGE */}
  </div>
  {/* /ACHIEVEMENT STATUS */}
</div>
{/* /ACHIEVEMENT STATUS LIST */}
</div>);}