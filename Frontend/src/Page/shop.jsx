import React from 'react';
import Hero from '../Component/Hero/Hero';
import Popular from '../Component/Popular/Popular';
import Offers from '../Component/Offers/Offers';
import Item from '../Component/Item/Item';
import Newcollection from '../Component/Newcollection/Newcollection';
import Newsletter from '../Component/Newsletter/Newsletter';




const shop = () => {
  return (
    <div>
   <Hero/>
   <Popular/>

  <Item/>
   <Offers/>
   <Newcollection/>
   <Newsletter/>
  

    </div>
  )
}
export default shop;
