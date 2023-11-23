import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%', backgroundColor:'white', fontSize:'13px'}} className='d-flex align-items-center justify-content-center flex-column text-black'>
      <div className=' d-flex align-items-center justify-content-evenly w-100 text-black'>
   <div class="container">
      <div class="row p-5 mt-2">
         <div class="col-md-6 col-lg-2 col-sm-12 me-5 ">
            <div className="list d-flex flex-column mt-2 ">
            <h7 className='text-black fw-bold'>Shop and Learn</h7>
            <Link className='text-black' to={'/'} style={{textDecoration:'none'}}>Store</Link>
            <Link className='text-black' to={'/home'} style={{textDecoration:'none'}}>Mac</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>iPad</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>iPhone</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>Watch</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>Airpods</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>TV & HOME</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>Airtag</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>Accessories</Link>
            <Link className='text-black' to={'/watchhistory'} style={{textDecoration:'none'}}>Gift card</Link>
           </div>
         </div>

         <div class="col-md-6 col-lg-2 col ">
         <div class="guides d-flex flex-column mt-2 me-5">
          <h7 className='text-black fw-bold'>Account</h7>
          <Link className='text-black' to={'/manage-id'} style={{textDecoration:'none'}}>Manage Your Apple ID</Link>
          <Link className='text-black' to={'/apple-store-account'} style={{textDecoration:'none'}}>Apple Store Account</Link>
          <Link className='text-black' to={'/icloud'} style={{textDecoration:'none'}}>iCloud.com</Link>
          <h7 className='text-black fw-bold'>Entertainment</h7>
          <Link className='text-black' to={'/apple-one'} style={{textDecoration:'none'}}>Apple One</Link>
          <Link className='text-black' to={'/apple-tv-plus'} style={{textDecoration:'none'}}>Apple TV+</Link>
          <Link className='text-black' to={'/apple-music'} style={{textDecoration:'none'}}>Apple Music</Link>
          <Link className='text-black' to={'/apple-arcade'} style={{textDecoration:'none'}}>Apple Arcade</Link>
          <Link className='text-black' to={'/apple-podcasts'} style={{textDecoration:'none'}}>Apple Podcasts</Link>
          <Link className='text-black' to={'/apple-books'} style={{textDecoration:'none'}}>Apple Books</Link>
          <Link className='text-black' to={'/app-store'} style={{textDecoration:'none'}}>App Store</Link>
        </div>
</div>


         <div class="col-md-6 col-lg-2">
         <div className="list d-flex flex-column mb-1 me-5 ms-5">
     <h7 className='text-black fw-bold'>Apple Store</h7>
<Link className='text-black' to={'/find-a-store'} style={{textDecoration:'none'}}>Find a Store</Link>
<Link className='text-black' to={'/genius-bar'} style={{textDecoration:'none'}}>Genius Bar</Link>
<Link className='text-black' to={'/today-at-apple'} style={{textDecoration:'none'}}>Today at Apple</Link>
<Link className='text-black' to={'/apple-camp'} style={{textDecoration:'none'}}>Apple Camp</Link>
<Link className='text-black' to={'/apple-trade-in'} style={{textDecoration:'none'}}>Apple Trade In</Link>
<Link className='text-black' to={'/ways-to-buy'} style={{textDecoration:'none'}}>Ways to Buy</Link>
<Link className='text-black' to={'/recycling-programme'} style={{textDecoration:'none'}}>Recycling Programme</Link>
<Link className='text-black' to={'/order-status'} style={{textDecoration:'none'}}>Order Status</Link>
<Link className='text-black' to={'/shopping-help'} style={{textDecoration:'none'}}>Shopping Help</Link>


     </div>
</div>
<div class="col-md-6 col-lg-2">
<div className="guides d-flex flex-column mb-4 me-5 ms-5">
     <h7 className='text-black fw-bold'>For Business</h7>
<Link className='text-black' to={'/apple-and-business'} style={{textDecoration:'none'}}>Apple and Business</Link>
<Link className='text-black' to={'/shop-for-business'} style={{textDecoration:'none'}}>Shop for Business</Link>

<h7 className='text-black fw-bold'>For Education</h7>
<Link className='text-black' to={'/apple-and-education'} style={{textDecoration:'none'}}>Apple and Education</Link>
<Link className='text-black' to={'/shop-for-education'} style={{textDecoration:'none'}}>Shop for Education</Link>
<Link className='text-black' to={'/shop-for-university'} style={{textDecoration:'none'}}>Shop for University</Link>

<h7 className='text-black fw-bold'>For Healthcare</h7>
<Link className='text-black' to={'/apple-in-healthcare'} style={{textDecoration:'none'}}>Apple in Healthcare</Link>
<Link className='text-black' to={'/health-on-apple-watch'} style={{textDecoration:'none'}}>Health on Apple Watch</Link>
     </div>
</div>
<div class="col-md-6 col-lg-3">
<div className="guides d-flex flex-column mt-1 me-5 ms-5">
     <h7 className='text-black fw-bold'>Apple Values</h7>
<Link className='text-black' to={'/accessibility'} style={{textDecoration:'none'}}>Accessibility</Link>
    <Link className='text-black' to={'/education'} style={{textDecoration:'none'}}>Education</Link>    <Link className='text-black' to={'/environment'} style={{textDecoration:'none'}}>Environment</Link>
    <Link className='text-black' to={'/privacy'} style={{textDecoration:'none'}}>Privacy</Link>
    <Link className='text-black' to={'/supplier-responsibility'} style={{textDecoration:'none'}}>Supplier Responsibility</Link>
 

  <h7 className='text-black fw-bold'>About Apple</h7>

  
    <Link className='text-black' to={'/newsroom'} style={{textDecoration:'none'}}>Newsroom</Link>
    <Link className='text-black' to={'/apple-leadership'} style={{textDecoration:'none'}}>Apple Leadership</Link>
    <Link className='text-black' to={'/career-opportunities'} style={{textDecoration:'none'}}>Career Opportunities</Link>
    <Link className='text-black' to={'/investors'} style={{textDecoration:'none'}}>Investors</Link>
    <Link className='text-black' to={'/ethics-compliance'} style={{textDecoration:'none'}}>Ethics & Compliance</Link>
    <Link className='text-black' to={'/events'} style={{textDecoration:'none'}}>Events</Link>
    <Link className='text-black' to={'/contact-apple'} style={{textDecoration:'none'}}>Contact Apple</Link>
    

     </div>
</div>

      </div>
     
       
   
   </div>
    
    
    

    
    
      </div>
      <p>More ways to shop: Find an <a href="#">Apple Store</a> or other retailer near you. Or call <a href="tel:0008000401966">000800 040 1966</a>.</p>
     <hr />
     <div>
  <p>&copy; 2023 Apple Inc. All rights reserved.</p>
  <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Sales Policy</a> | <a href="#">Legal</a> | <a href="#">Site Map</a></p>
</div>

    </div>
  )
}

export default Footer