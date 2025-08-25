import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Condition from "./condition";
import Detaildata from "./detailed-data";
import ExtraFuture from "./extra-future";
import Price from "./price";
import TechnicalData from "./technicalData";
import VehicleInformation from "./vehicle-Information";
import VehicleFeature from "./vehicle-feature";

export default function ViewForm({ formData }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="mb-4 border border-[#C1C1C1C1] p-4  rounded-lg">
        <div className="grid grid-cols-1 p-4 relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {formData?.images?.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image} alt="" className="w-full " />
                </div>
              );
            })}
          </Slider>
          <Button
            variant="secondary"
            size="icon"
            onClick={previous}
            className="size-14 bg-transparent absolute left-8 top-[50%] translate-y-[-50%] hover:bg-transparent"
          >
            <img src="/assets/svg/arrow-left.svg" alt="" />
          </Button>
          <Button
            onClick={next}
            variant="secondary"
            size="icon"
            className="size-14 bg-transparent absolute right-8 top-[50%] translate-y-[-50%] hover:bg-transparent"
          >
            <img src="/assets/svg/arrow-right.svg" alt="" />
          </Button>
        </div>
      </div>
      <div className="space-y-3 pr-3">
        <Accordion
          type="single"
          className="flex flex-col gap-4 border-[#C1C1C1C1]"
          collapsible
        >
          <AccordionItem
            value="item-1"
            className="bg-[#242424]  rounded-lg px-4 border border-[#C1C1C1C1]  text-[#4F6374]"
          >
            <AccordionTrigger className="text-white  ">
              Vehicle Information
            </AccordionTrigger>
            <VehicleInformation formData={formData} />
          </AccordionItem>
        </Accordion>{" "}
        {/* Vehicle Features */}
        <VehicleFeature formData={formData} />
        <Condition formData={formData} />
        <Price formData={formData} />
        <TechnicalData formData={formData} />
        <Detaildata formData={formData} />
        <ExtraFuture formData={formData} />
      </div>
    </>
  );
}
