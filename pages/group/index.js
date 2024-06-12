
import React, { useEffect } from 'react';
import Navcomponent from '../../components/Navigation/navwidget1';
import Navcomponent1 from '../../components/Navigation/navwidget2';
import Navcomponent2 from '../../components/Navigation/navwidget3';
import Chatwidget from '../../components/Chat/chatwidget';
import Chatwidget1 from '../../components/Chat/chatwidget1';
import Header1 from '../../components/Header';
import Bar1 from '../../components/Bar';
import Banner from '../../components/Banner';
import BannerImageLink from '../../components/Banner/ImageLink';
import Head from 'next/head';
import Widgetbox1 from '../../components/Widgetbox/1';
import Widgetbox2 from '../../components/Widgetbox/2';
import Widgetbox3 from '../../components/Widgetbox/3';
import Widgetbox4 from '../../components/Widgetbox/4';
import Widgetbox5 from '../../components/Widgetbox/5';
import Widgetbox6 from '../../components/Widgetbox/6';
import Widgetbox7 from '../../components/Widgetbox/7';
import Widgetbox8 from '../../components/Widgetbox/8';
import Widgetbox9 from '../../components/Widgetbox/9';
import QuickPost from '../../components/Quickpost';
import Simpletabs from '../../components/Simpletabs';
import Loadingbars from '../../components/Loadingbars';
import Groupmenu from '../../components/Group/menu';

function Groups() {
    const bannerImageUrl = '/img/banner/groups-icon.png';
    const title1 = 'Groups';
    const description = 'Browse all the groups of the community!';

 useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/app.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
     }; 
  }, []);
  return (
    
    <div>
     <Head>
        <title>{title1}</title>

        <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/styles.min.css" />
  <link rel="stylesheet" href="/css/vendor/simplebar.css" />
 
  <link rel="stylesheet" href="/css/vendor/tiny-slider.css" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Navcomponent />
    <Navcomponent1 />
    <Navcomponent2 />
    <Chatwidget />
    <Chatwidget1 />
    <Header1 />
    <Bar1 />
    <div className="content-grid">
   <Banner bannerdescription={description} bannertitle={title1} bannerimage={bannerImageUrl}/>
   <Groupmenu />
   <div className="grid grid-4-4-4 centered">
     
     
      {/* /GRID COLUMN */}
    </div>
    </div>

  </div>
   
    
  );
}

export default Groups;