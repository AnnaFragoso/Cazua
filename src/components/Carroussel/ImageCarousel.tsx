// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";
// import Carousel, { WithStyles } from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// const ImageCarousel = () => {
//   const items = [
//     {
//       id: 1,
//       content: (
//         <div className="h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
//           <p className="text-2xl font-semibold text-foreground">Slide 1</p>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <div className="h-[400px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center">
//           <p className="text-2xl font-semibold text-foreground">Slide 2</p>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <div className="h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
//           <p className="text-2xl font-semibold text-foreground">Slide 3</p>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <section className="py-20 md:py-32 bg-background">
//       <div className="container mx-auto px-4">
//       <Carousel
//   additionalTransfrom={0}
//   arrows
//   autoPlaySpeed={3000}
//   centerMode={false}
//   className=""
//   containerClass="container-with-dots"
//   dotListClass=""
//   draggable
//   focusOnSelect={false}
//   infinite
//   itemClass=""
//   keyBoardControl
//   minimumTouchDrag={80}
//   pauseOnHover
//   renderArrowsWhenDisabled={false}
//   renderButtonGroupOutside={false}
//   renderDotsOutside={false}
//   responsive={{
//     desktop: {
//       breakpoint: {
//         max: 3000,
//         min: 1024
//       },
//       items: 3,
//       partialVisibilityGutter: 40
//     },
//     mobile: {
//       breakpoint: {
//         max: 464,
//         min: 0
//       },
//       items: 1,
//       partialVisibilityGutter: 30
//     },
//     tablet: {
//       breakpoint: {
//         max: 1024,
//         min: 464
//       },
//       items: 2,
//       partialVisibilityGutter: 30
//     }
//   }}
//   rewind={false}
//   rewindWithAnimation={false}
//   rtl={false}
//   shouldResetAutoplay
//   showDots={false}
//   sliderClass=""
//   slidesToSlide={1}
//   swipeable
// >
// <ImageCarousel />
// </Carousel>
//       </div>
//     </section>
//   );
// };

// export default ImageCarousel;

import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 15000, easing: (t: number) => t };

export default function ImageCarousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}
