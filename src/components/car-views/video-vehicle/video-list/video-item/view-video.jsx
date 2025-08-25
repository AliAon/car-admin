import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "../../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../ui/dialog";
import { FaPause, FaPlay } from "react-icons/fa";

export default function ViewVideo({ item }) {
  let sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const togglePlay = (index) => {
  if (playing && playingIndex === index) {
    setPlaying(false);
  } else {
    setPlayingIndex(index);
    setPlaying(true);
  }
};


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="hover:bg-transparent text-white p-0">
          <img
            src="/assets/svg/eye.svg"
            alt=""
            className="w-4 cursor-pointer"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[960px]  bg-[#1D1D1D] ">
        <DialogHeader>
          <DialogTitle className="text-white tracking-widest">
            {item?.name || "Video Gallery"}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[calc(100vh-150px)] w-full">
          <div className="grid grid-cols-1 p-4 relative">
            <Slider ref={sliderRef} {...settings}>
              {item?.videos?.map((videoUrl, index) => {
                const isCurrentPlaying = playing && playingIndex === index;

                return (
                  <div
                    key={index}
                    className="relative group flex justify-center items-center h-[80vh]"
                  >
                    <ReactPlayer
                      url={videoUrl?.url}
                      playing={isCurrentPlaying}
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                      width="100%"
                      height="100%"
                      className="max-w-full max-h-full"
                    />

                    {/* Centered Play/Pause Button */}
                    <button
                      onClick={() => togglePlay(index)}
                      className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      {isCurrentPlaying ? (
                        <FaPause
                          size={50}
                          className="text-[#FFE584] bg-white/50 backdrop-blur-md px-4 py-2 rounded-full"
                        />
                      ) : (
                        <FaPlay
                          size={50}
                          className="text-[#FFE584] bg-white/50 backdrop-blur-md px-4 py-2 rounded-full"
                        />
                      )}
                    </button>
                  </div>
                );
              })}

            </Slider>

            {/* Prev button */}
            <Button
              variant="secondary"
              size="icon"
              onClick={previous}
              className="size-14 bg-transparent absolute left-8 top-[50%] translate-y-[-50%] hover:bg-transparent"
            >
              <img src="/assets/svg/arrow-left.svg" alt="Previous" />
            </Button>

            {/* Next button */}
            <Button
              onClick={next}
              variant="secondary"
              size="icon"
              className="size-14 bg-transparent absolute right-8 top-[50%] translate-y-[-50%] hover:bg-transparent"
            >
              <img src="/assets/svg/arrow-right.svg" alt="Next" />
            </Button>
          </div>
        </ScrollArea>

        <DialogFooter className={"flex justify-start sm:justify-start gap-4"}>
          <Button
            type="button"
            variant="primary"
            className="bg-primary text-white"
            onClick={() => setPlaying(!playing)}
          >
            {isLoading ? (
              <div className="text-center flex gap-2 justify-center mx-auto">
                <Loader color="#00132f" /> <span>Loading...</span>
              </div>
            ) : (
              "DRUCKEN"
            )}
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
