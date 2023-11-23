import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Card, Button } from 'react-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

import macbook from '../assets/welcome_hero_endframe__66ipqm3o5gyu_large_2x.jpg'
import CorouselApple from '../components/CorouselApple';
function Home() {
  return (
    <div style={{overflowX:'hidden'}}>
     
      <div className='bg-black d-flex align-items-center justify-content-center pt-4 flex-column'>
      <p  style={{ color:'white', padding:'40px'}}>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.‡ Shop now</p>
      
       <div className='d-flex align-items-center justify-content-center flex-column p-5'>
         <h1 style={{fontWeight:'510', fontSize:'58px'}}>iPhone 15Pro</h1>
        <h4>Titanium.So strong.So light.So Pro</h4>
        <Link style={{textDecoration:'none'}}>      
        <p style={{color:'violet',fontSize:'19px'}}>Learn More <i style={{fontSize:'12px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'12px'}} class="fa-solid fa-greater-than "></i></p>
        </Link>
       </div>
      </div>
        <img style={{width:'100%'}} src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large_2x.jpg" alt="" />
        <div className='bg-white  d-flex align-items-center justify-content-center pt-5 flex-column '> 
        
        <div className='d-flex align-items-center justify-content-center flex-column p-5'>
         <h1 className='text-black' style={{fontWeight:'510', fontSize:'58px'}}>iPhone 15</h1>
        <h4 className='text-black'>New Camera.New Design.New Phobia</h4>
        <Link style={{textDecoration:'none'}}>      
        <p style={{color:'violet',fontSize:'19px'}}>Learn More <i style={{fontSize:'12px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'12px'}} class="fa-solid fa-greater-than "></i></p>
        </Link>
       </div>
      </div>
      <img style={{width:'100%'}} src="https://www.apple.com/v/iphone-15/c/images/overview/welcome/hero_endframe__e0ajd2ayxqc2_large_2x.jpg" alt="" />
     <img src="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
     <div style={{height:'100vh',backgroundColor:'black'}}>
     <div  className='watch d-flex align-items-center justify-content-center'><i className="fab fa-apple fs-3 mb-3 me-2" style={{ color: '#ffffff', paddingTop:'320px'}}></i><h3 style={{fontWeight:'bold', paddingTop:'320px'}}>WATCH</h3></div>
     <div className='d-flex align-items-center justify-content-center flex-column'>
     <h6> SERIES 9</h6>
      <h5 className='p-5'>Double tap, a magical new way to use apple watch</h5>
      <div>
        <button style={{backgroundColor:'white'}} className='btn btn- rounded-5 text-black  me-3'>Learn more</button>
      <button style={{backgroundColor:'white'}} className='btn btn- rounded-5 text-black me-3'>Buy</button></div>
     </div>
    
     </div> 
     <div className='row bg-white'>
      <div className='col d-flex align-items-center justify-content-center flex-column p-5'>
        <h3 className='text-black fw-bold'>Macbook Pro</h3>
        <h5 className='text-black'>Mind-blowing. Head-turning</h5>
        <Link style={{textDecoration:'none'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>Learn More <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than "></i></p>
      </Link>
        <img style={{width:'70%', paddingTop:'50px'}} src={macbook} alt="" /></div>
        

     </div>
     <div className='row'>
     <div className='col d-flex align-items-center justify-content-center flex-column p-5 bg-white'>
        <h3 className='text-black fw-bold'>iMac</h3>
        <h5 className='text-black'>Packed with more juice</h5>
        <Link style={{textDecoration:'none'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>Learn More <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than "></i></p>
      </Link>
        <img style={{width:'50%', paddingTop:'25px'}} src='https://images.flexshopper.xyz/385x385/product-beta-images/1b2daa53-86f9-4109-b1cb-435d86fb77a9.jpeg' alt="" /></div>
     </div>
     <div className='row bg-white'>
     <div className='col d-flex align-items-center justify-content-center flex-column p-5 pb-0'>
        <h3 className='text-black fw-bold'>iPad</h3>
        <h5 className='text-black'>Lovable.Drawable</h5>
        <Link style={{textDecoration:'none'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>Learn More <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than "></i></p>
      </Link>
        <img style={{width:'60%', paddingTop:'0px'}} src='https://static.toiimg.com/thumb/msid-94963476,width-900,height-1200,resizemode-4.cms' alt="" /></div> 
        
        
        <div className='col d-flex align-items-center justify-content-center flex-column p-5'>
        <h3 className='text-black fw-bold'><div className='d-flex text-black'> <i className="fab fa-apple fs-3  me-2"></i><h3 style={{fontWeight:'bold', color:'black'}}>Watch</h3></div></h3>
        <h5 className='text-black'>SERIES 9</h5>
        <Link style={{textDecoration:'none', paddingBottom:'90px'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>Learn More <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than "></i></p>
      </Link>
        <img style={{width:'100%', paddingTop:'25px', height:'350PX'}} src='https://www.arabianbusiness.com/cloud/2023/09/13/Apple-Watch-Ultra-2-1024x683.jpg' alt="" /></div>
     </div>

     <div className='row bg-white'>
      <div className='col d-flex align-items-center justify-content-center flex-column p-5'>
        <h3 className='text-black fw-bold'><div className='d-flex text-black'> <i className="fab fa-apple fs-3 mb-3 me-2"></i><h3 style={{fontWeight:'bold', color:'black'}}>Airpods</h3></div></h3>
        <h5 className='text-black'>Wonder Awaits</h5>
        <Link style={{textDecoration:'none'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>Learn More <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>     Buy <i style={{fontSize:'9px'}} class="fa-solid fa-greater-than "></i></p>
      </Link>
        <img style={{width:'70%', paddingTop:'50px'}} src='https://mms.businesswire.com/media/20191028005232/en/752485/5/Apple_AirPods-Pro_New-Design_102819.jpg' alt="" /></div>
        <div className='col d-flex align-items-center justify-content-center flex-column p-5'>
       <div className='d-flex text-black'> <i className="fab fa-apple fs-3 mb-3 me-2"></i><h3 style={{fontWeight:'bold', color:'black'}}>TradeIn</h3></div>
        <h5 className='text-black'>Trade your old iphone</h5>
        <Link style={{textDecoration:'none'}}>      
      <p style={{color:'violet',fontSize:'15px'}}>See what your device is worth<i style={{fontSize:'9px'}} class="fa-solid fa-greater-than  me-4"></i>    </p>
      </Link>
        <img style={{width:'100%', paddingTop:'145px'}} src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-trade-in-202010?wid=3012&hei=1582&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601496902000' alt="" /></div>

     </div>
     <div >
      <CorouselApple/>
     </div>
     <div className='bg-white text-black'>
     
      <div className='container'>
        <p className='pt-2 text-sm' style={{fontSize:'12px',margin:'0px'}}>
       
  
   *Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
   ‡No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
   Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
   A subscription is required for Apple TV+.
   <hr />
        </p>
      </div>
     </div>
         </div>
    
  )
}

export default Home