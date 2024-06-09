
import { useEffect, useState, React } from 'react';

function Banner(props) {
const [isClient, setIsClient] = useState(false);
const {bannerimage, bannertitle, bannerdescription} = props;
useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null;
}
  return (
<div className="section-banner">
<img className="section-banner-icon" src={bannerimage} alt="newsfeed-icon" />
<p className="section-banner-title">{bannertitle}</p>

<p className="section-banner-text">{bannerdescription}</p>
</div>
  )}
  export default Banner;