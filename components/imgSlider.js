import Image from "next/image";
import slider1 from "../public/images/hogene/slider/1.png";
import slider2 from "../public/images/hogene/slider/2.png";
import slider3 from "../public/images/hogene/slider/3.png";
import slider4 from "../public/images/hogene/slider/4.png";
import slider5 from "../public/images/hogene/slider/5.png";
import { useRef, useState, useEffect } from "react";

const sliderItems = [slider1, slider2, slider3, slider4, slider5, slider1, slider2, slider3, slider4, slider5];
export default function ImgSlider() {
  const sliderRef = useRef();
  const currentTransform = useRef();
  const requestRef = useRef();
  const sliderWidth = useRef(1800);
  const [sliderLoaded, setsliderLoaded] = useState(false);
  const slider = (time) => {
    if (!sliderRef.current) return;
    currentTransform.current = currentTransform.current - 1;
    if (Number(sliderWidth.current) === Math.abs(currentTransform.current)) {
      currentTransform.current = 0;
    }
    sliderRef.current.style.transform = "translateX(" + currentTransform.current + "px)";
    requestRef.current = window.requestAnimationFrame(slider);
  };
  const runSlider = () => {
    if (requestRef.current) return;
    sliderWidth.current = sliderRef.current.querySelector(".shrink-0").clientWidth * 5 + 16 * 4;
    const transform = window.getComputedStyle(sliderRef.current)["transform"];
    if (typeof transform.split(",")[4] === "string") {
      currentTransform.current = transform.split(",")[4].trim();
    }
    requestRef.current = window.requestAnimationFrame(slider);
  };
  const cancleSlider = () => {
    window.cancelAnimationFrame(requestRef.current);
    requestRef.current = null;
  };
  useEffect(() => {
    if (sliderLoaded) runSlider();
  }, [sliderLoaded]);

  return (
    <div className="px-6">
      <div className="w-full overflow-hidden">
        <div ref={sliderRef} className={`flex grid-cols-5 gap-4 justify-start transform-gpu`} onMouseEnter={cancleSlider} onMouseLeave={runSlider} style={{ transform: "translateX(0px)" }}>
          {sliderItems.map((item, index) => {
            return (
              <div key={index} className="shrink-0">
                <Image onLoadingComplete={() => setsliderLoaded(true)} src={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
