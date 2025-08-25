import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../ui/accordion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "../../../../../ui/button";
import { useVehicle } from "@/context/VehicleContext";

export default function Step4Form({ formData }) {
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

  const { file } = useVehicle();

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
            {file?.map((image, index) => {
              return (
                <div key={index}>
                  <img
                    src={image?.url ? image?.url : image}
                    alt=""
                    className="w-full "
                  />
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
            {formData?.model}
          </AccordionTrigger>
          <AccordionContent className="text-white bg-[#242424] flex flex-col gap-4">
            <div>
              <div className="grid grid-cols-1 gap-10">
                <div className="border border-white rounded-lg p-4">
                  <h2 className="text-white text-base mb-2">Specification</h2>
                  <div>
                    <table className="text-white">
                      <tbody>
                        <tr className="leading-8">
                          <td className="w-[200px]">Brand</td>
                          <td>{formData.brand}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Model</td>
                          <td>{formData.model}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Body Type</td>
                          <td>{formData.bodyType}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Fuel Type</td>
                          <td>{formData.fuelType}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Transmission</td>
                          <td>{formData.transmission}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Drive Type</td>
                          <td>{formData.driveType}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Number of Gears</td>
                          <td>{formData.numberofGears}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Cylinders</td>
                          <td>{formData.cylinders}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Doors</td>
                          <td>{formData.doors}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Seats</td>
                          <td>{formData.seats}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Engine Power</td>
                          <td>{formData.enginePower}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Cubic Capacity</td>
                          <td>{formData.cubicCapacity}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Date of First Registration</td>
                          <td>{formData.dateFirstRegistration}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>License Category</td>
                          <td>{formData.licenseCategory}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Engine Type</td>
                          <td>{formData.engineType}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Total Weight</td>
                          <td>{formData.totalWeight}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Towing Capacity</td>
                          <td>{formData.towingCapacity}</td>
                        </tr>
                        <tr className="leading-8">
                          <td>Empty Weight</td>
                          <td>{formData.emptyWeight}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
