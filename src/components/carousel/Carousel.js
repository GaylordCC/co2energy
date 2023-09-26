import React, { useEffect, useState } from 'react';
import "./__style__/index.css";


const BodyCarousel = () => {

    
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    
      setSlideIndex((prevSlideIndex) => {
        let newIndex = prevSlideIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        return newIndex;
      });
    
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
      }
    };
  
    const slideshowInterval = setInterval(showSlides, 2000);
  
    return () => {
      clearInterval(slideshowInterval);
    };
  }, [slideIndex]);

  return (
    <div class="slideshow-container">
      <div class="mySlides fade">
        <div class="numbertext"> </div>
        <img src="https://images.pexels.com/photos/695342/pexels-photo-695342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        {/* <img className='image-carousel' src="https://images.pexels.com/photos/695342/pexels-photo-695342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{objectFit:"cover"}}/> */}
        <div class="text"> </div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext"> </div>
        <img src="https://images.pexels.com/photos/3641377/pexels-photo-3641377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div class="text"> </div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext"> </div>
        <img src="https://images.pexels.com/photos/305833/pexels-photo-305833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div class="text"> </div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext"> </div>
        <img src="https://images.pexels.com/photos/14673396/pexels-photo-14673396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div class="text"> </div>
      </div>
    </div>
  ) 
}

export default BodyCarousel