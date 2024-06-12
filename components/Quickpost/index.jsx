import { useEffect, useState } from 'react';


function QuickPost() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
<div className="quick-post">
{/* QUICK POST HEADER */}
<div className="quick-post-header">
  {/* OPTION ITEMS */}
  <div className="option-items">
    {/* OPTION ITEM */}
    <div className="option-item active">
      {/* OPTION ITEM ICON */}
      <svg className="option-item-icon icon-status">
        <use xlinkHref="#svg-status"></use>
      </svg>
      {/* /OPTION ITEM ICON */}

      {/* OPTION ITEM TITLE */}
      <p className="option-item-title">Status</p>
      {/* /OPTION ITEM TITLE */}
    </div>
    {/* /OPTION ITEM */}

    {/* OPTION ITEM */}
    <div className="option-item">
      {/* OPTION ITEM ICON */}
      <svg className="option-item-icon icon-blog-posts">
        <use xlinkHref="#svg-blog-posts"></use>
      </svg>
      {/* /OPTION ITEM ICON */}

      {/* OPTION ITEM TITLE */}
      <p className="option-item-title">Blog Post</p>
      {/* /OPTION ITEM TITLE */}
    </div>
    {/* /OPTION ITEM */}

    {/* OPTION ITEM */}
    <div className="option-item">
      {/* OPTION ITEM ICON */}
      <svg className="option-item-icon icon-poll">
        <use xlinkHref="#svg-poll"></use>
      </svg>
      {/* /OPTION ITEM ICON */}

      {/* OPTION ITEM TITLE */}
      <p className="option-item-title">Poll</p>
      {/* /OPTION ITEM TITLE */}
    </div>
    {/* /OPTION ITEM */}
  </div>
  {/* /OPTION ITEMS */}
</div>
{/* /QUICK POST HEADER */}

{/* QUICK POST BODY */}
<div className="quick-post-body">
  {/* FORM */}
  <form className="form">
    {/* FORM ROW */}
    <div className="form-row">
      {/* FORM ITEM */}
      <div className="form-item">
        {/* FORM TEXTAREA */}
        <div className="form-textarea">
          <textarea id="quick-post-text" name="quick-post-text" placeholder="Hi Marina! Share your post here..."></textarea>
          {/* FORM TEXTAREA LIMIT TEXT */}
          <p className="form-textarea-limit-text">998/1000</p>
          {/* /FORM TEXTAREA LIMIT TEXT */}
        </div>
        {/* /FORM TEXTAREA */}
      </div>
      {/* /FORM ITEM */}
    </div>
    {/* /FORM ROW */}
  </form>
  {/* /FORM */}
</div>
{/* /QUICK POST BODY */}

{/* QUICK POST FOOTER */}
<div className="quick-post-footer">
  {/* QUICK POST FOOTER ACTIONS */}
  <div className="quick-post-footer-actions">
    {/* QUICK POST FOOTER ACTION */}
    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Photo" style={{position: 'relative'}}>
      {/* QUICK POST FOOTER ACTION ICON */}
      <svg className="quick-post-footer-action-icon icon-camera">
        <use xlinkHref="#svg-camera"></use>
      </svg>
      {/* /QUICK POST FOOTER ACTION ICON */}
    <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-42.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Insert Photo</p></div></div>
    {/* /QUICK POST FOOTER ACTION */}

    {/* QUICK POST FOOTER ACTION */}
    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert GIF" style={{position: 'relative'}}>
      {/* QUICK POST FOOTER ACTION ICON */}
      <svg className="quick-post-footer-action-icon icon-gif">
        <use xlinkHref="#svg-gif"></use>
      </svg>
      {/* /QUICK POST FOOTER ACTION ICON */}
    <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-35.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Insert GIF</p></div></div>
    {/* /QUICK POST FOOTER ACTION */}

    {/* QUICK POST FOOTER ACTION */}
    <div className="quick-post-footer-action text-tooltip-tft-medium" data-title="Insert Tag" style={{position: 'relative'}}>
      {/* QUICK POST FOOTER ACTION ICON */}
      <svg className="quick-post-footer-action-icon icon-tags">
        <use xlinkHref="#svg-tags"></use>
      </svg>
      {/* /QUICK POST FOOTER ACTION ICON */}
    <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-32px', 'left': '50%', 'marginLeft': '-36.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Insert Tag</p></div></div>
    {/* /QUICK POST FOOTER ACTION */}
  </div>
  {/* /QUICK POST FOOTER ACTIONS */}

    {/* QUICK POST FOOTER ACTIONS */}
    <div className="quick-post-footer-actions">
      {/* BUTTON */}
      <p className="button small void">Discard</p>
      {/* /BUTTON */}

      {/* BUTTON */}
      <p className="button small secondary">Post</p>
      {/* /BUTTON */}
    </div>
    {/* /QUICK POST FOOTER ACTIONS */}
</div>
{/* /QUICK POST FOOTER */}
</div> );
}
export default QuickPost;