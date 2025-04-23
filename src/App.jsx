import { useEffect, useRef, useState } from 'react';
import './App.css';
import { toast, Toaster } from 'react-hot-toast';

import logo from '../src/assets/logo.png';

import takka from '../src/assets/takka-logo.jpg';

import model1 from '../src/assets/model1.jpeg';
import model2 from '../src/assets/model2.jpg';

import model3 from '../src/assets/model3.jpg';
import model4 from '../src/assets/model4.jpg';
import model5 from '../src/assets/model5.jpg';
import model6 from '../src/assets/model6.jpg';
import model7 from '../src/assets/model7.jpg';
import model8 from '../src/assets/model8.jpg';
import model9 from '../src/assets/model9.jpg';





function App() {
  const tips = [

    "• Coming Soon ",

    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",
    "• Coming Soon ",

  ];
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;
    let position = 0;
    const speed = 0.5; // pixels per frame (adjust for speed)

    const animate = () => {
      position = (position + speed) % (slider.scrollWidth / 2);
      slider.style.transform = `translateX(-${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    // Adjust speed based on screen width
    const handleResize = () => {
      const width = window.innerWidth;
      setScrollSpeed(width < 640 ? 0.3 : width < 768 ? 0.4 : 0.5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let animationId;
    const container = containerRef.current;

    const animate = () => {
      setScrollPosition(prev => {
        const newPos = prev + scrollSpeed;
        // Reset to 0 when we've scrolled through one full set
        return newPos >= container.scrollWidth / 2 ? 0 : newPos;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollSpeed]);



  const slides = [
    {
      id: 1,
      content: (
        <div className="  absolute inset-0 ">
          <img src={model8} className='absolute inset-0 w-full h-full' alt="" />
          <div className="layout absolute inset-0 bg-black/60">
            <div className="content absolute flex justify-center items-center text-white inset-0 ">


              <p className='lg:text-6xl md:text-3xl text-2xl great'>Dress in Dreams, Shine in Couture.</p>


            </div>


          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="bg-black w-full absolute top-0 bottom-0 text-white">
          <img src={model3} className='absolute inset-0 w-full h-full' alt="" />
          <div className="layout absolute inset-0 bg-black/60">
            <div className="content absolute flex justify-center items-center text-white inset-0 ">


              <p className='lg:text-6xl md:text-3xl text-2xl great'>Be the Envy of Every Soirée.</p>


            </div>


          </div>

        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="bg-black w-full absolute top-0 bottom-0 text-white">
          <img src={model6} className='absolute inset-0 w-full h-full' alt="" />
          <div className="layout absolute inset-0 bg-black/60">
            <div className="content absolute flex justify-center items-center text-white inset-0 ">


              <p className='lg:text-6xl md:text-3xl text-2xl great'>Step into the Spotlight</p>


            </div>


          </div>

        </div>)
    },
    {
      id: 4,
      content: (
        <div className="bg-black w-full absolute top-0 bottom-0 text-white">
          <img src={model4} className='absolute inset-0 w-full h-full' alt="" />
          <div className="layout absolute inset-0 bg-black/60">
            <div className="content absolute flex justify-center items-center text-white inset-0 ">


              <p className='lg:text-6xl md:text-3xl text-2xl great'>Classic Silhouettes, Daring Details.</p>


            </div>
          </div>

        </div>)
    },
    // Add as many custom slides as you need
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef2 = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentSlide(index);
  };

  const handlePrev = () => goToSlide(currentSlide - 1);
  const handleNext = () => goToSlide(currentSlide + 1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext(); // Swipe left
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev(); // Swipe right
    }
  };

  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);


  return (
    <>
      <Toaster />
      <div className="page min-h-screen relative bg-white">

        <div className="header w-full lg:h-[85vh] md:h-[55vh] sm:h-[35vh] h-[25vh]">
          <img src={logo} className='w-full h-full' alt="" />

        </div>

        <div className="multi-tips w-full z-50 shadow-md border-t-2 border-gray-900 md:h-28 h-20 bg-black overflow-hidden">
          <div
            ref={containerRef}
            className="flex h-full items-center whitespace-nowrap"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...tips, ...tips].map((tip, index) => (
              <div
                key={`${tip}-${index}`}
                className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-4 text-center"
              >
                <div className="p-2 sm:p-3 cairo text-sm sm:text-base great text-[#F1C871] inline-block">
                  {tip}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="custom-slider-container relative w-full   bg-black">
          <div className="w-full  relative">
            <div
              ref={sliderRef2}
              className="overflow-hidden lg:h-[85vh] h-[55vh] relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex transition-transform absolute inset-0 duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="w-full flex-shrink-0 "
                  >
                    {slide.content}
                  </div>
                ))}
              </div>


              {/* Navigation arrows */}

              {/* Slide indicators */}
              <div className="flex justify-center  absolute bottom-5 right-1/2 space-x-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-1 h-1 rounded-full ${currentSlide === index ? 'bg-gray-400' : 'bg-gray-900'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us relative bg-black  p-4 lg:h-[70vh] md:h-[50vh] h-[40vh]">

          <div className="layout absolute inset-0 bg-black/30"></div>

          <div className="content flex flex-col items-center absolute inset-0 ">
            <p className='text-white great mt-20  lg:text-6xl md:text-4xl text-2xl'>Contact Us </p>
            <div className="copyrights absolute bottom-2 w-full text-white flex items-center gap-2 justify-center">
              <span>              2025. All Rights reserved  -
              </span>
              <img src={takka} className='w-10 rounded-full' alt="" />

            </div>


            <div className="container flex justify-center mt-16 space-x-4">
              {/* Instagram */}

              <a href="https://www.instagram.com/sirinovacouture?igsh=MjVpN3l4Y24wdTFy">

                <button className="Btn instagram">
                  <svg className="svgIcon" viewBox="0 0 448 512" height="1.5em">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <span className="text">Instagram</span>
                </button>
              </a>


              {/* YouTube */}


              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61574697525004&mibextid=wwXIfr&rdid=7RVEi93b8tnWTOtB#">              <button className="Btn facebook">
                <svg className="svgIcon" viewBox="0 0 320 512" height="1.5em">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
                <span className="text">Facebook</span>
              </button></a>


              {/* WhatsApp */}
              <a href="https://wa.link/g43c36">
                <button className="Btn whatsapp">
                  <svg className="svgIcon" viewBox="0 0 448 512" height="1.5em">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L4 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                  <span className="text">WhatsApp</span>
                </button>


              </a>

              {/* TikTok */}

            </div>


          </div>



        </div>


      </div>
    </>
  );
}

export default App;
