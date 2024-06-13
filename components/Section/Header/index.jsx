import { useEffect, useState, React } from 'react';

function Header(props) {
const [isClient, setIsClient] = useState(false);
const {sectiontitle, sectionpretitle} = props;
useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null;
}
  return (
<div className="section-header">
      <div className="section-header-info">
        <p className="section-pretitle">{sectionpretitle}</p>
       <h2 className="section-title">{sectiontitle}</h2>
     </div>
     </div>
      )}
export default Header;