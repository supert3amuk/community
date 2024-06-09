import { useEffect, useState, React } from 'react';

function BannerImageLink(props) {
const [isClient, setIsClient] = useState(false);
const {bannername, bannerhref, bannertarget, bannersrc, banneralt} = props;
useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null;
}
  return (
<a className={bannername} href={bannerhref} target={bannertarget}><img src={bannersrc} alt={banneralt} /></a>
  );}
  export default BannerImageLink;