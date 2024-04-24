import React from 'react';
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>   
      <div className="descriptionbox-nav-box fade">Reviews(122)</div> 
         </div>
        <div className="descriptionbox-description">
          <p>An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.Businesses might create a branded store experience on a store like Amazon, build their own commerce site on a dedicated domain, or do it all for a multi-channel approach.</p><p>Ecommerce works by connecting buyers and sellers using various electronic channels. For example, you need a channel, such as a website or social media, so customers can find products and services to purchase. Then a payment processor enables the exchange of the goods or services. Once the transaction succeeds, the customer receives a confirmation email or SMS, and a printable receipt.If the transaction is for goods, then the seller ships the items and sends the customer a tracking number via email or SMS. If the transaction is for a service, then the service provider can reach out to schedule and complete the service.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;
