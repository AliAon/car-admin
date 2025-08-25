import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useState } from "react";
import Slider from "react-slick";

export function ImageView({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button onClick={() => setIsOpen(true)} type="button">
          <img
            src="/assets/svg/eye.svg"
            alt="View"
            className="w-4 cursor-pointer"
          />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[960px] bg-[#1D1D1D] p-4">
        <ScrollArea className="h-[calc(100vh-150px)] w-full">
          <div className="grid grid-cols-1 p-4 relative">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {item?.images?.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image?.url} alt="" className="w-full " />
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
        </ScrollArea>
        <DialogFooter className={"flex justify-start sm:justify-start gap-4"}>
          <Button
            type="button"
            variant="primary"
            className="bg-primary text-white"
            onClick={() => setIsOpen(false)}
          >
            Done
          </Button>
          <Button
            type="button"
            variant="default"
            onClick={() => setIsOpen(false)}
            className="mr-2 bg-white text-[#4F6374]"
          >
            Abbrechen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
