import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CorouselApple= () => {
  const images = [
    'https://www.vitalthrills.com/wp-content/uploads/2023/05/hijack-trailer.jpg', // Replace with your image URLs
    'https://ntvb.tmsimg.com/assets/p22972321_v_h10_aa.jpg?w=1280&h=720',
    'https://ntvb.tmsimg.com/assets/p19843772_b_h10_aa.jpg?w=960&h=540',
    'https://www.screennearyou.com/wp-content/uploads/2023/07/Apple_TV_Foundation_key_art_graphic_header_4_1_show_home.jpg.og_.webp',
  ];

  return (
   <div>
        <Carousel interval={1500} className="d-block w-100 ">
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-center ">
        <Button style={{backgroundColor:'white'}} className='btn text-black mt-2 mb-3  rounded-3'>Stream Now <i class="fa-solid fa-play ms-2"></i></Button>
      </div>
   </div>
  
  );
};

export default CorouselApple;
