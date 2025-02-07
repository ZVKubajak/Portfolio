import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const OtherProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <article>
      <div className="flex justify-center overflow-hidden" ref={emblaRef}>
        <div className="flex h-64 w-full mx-8">
          <div className="flex-[0_0_100%] min-w-0 bg-gray-100 border border-gray-200 rounded-xl mx-8">
            <div>Slide 1</div>
          </div>
          <div className="flex-[0_0_100%] min-w-0 bg-gray-100 border border-gray-200 rounded-xl mx-8">
            <div>Slide 2</div>
          </div>
          <div className="flex-[0_0_100%] min-w-0 bg-gray-100 border border-gray-200 rounded-xl mx-8">
            <div>Slide 3</div>
          </div>
        </div>
      </div>

      <div className="float-left mt-2 space-x-2">
        <button onClick={prev} className="border rounded-full">
          <ChevronLeft />
        </button>
        <button onClick={next} className="border rounded-full">
          <ChevronRight />
        </button>
      </div>
    </article>
  );
};

export default OtherProject;
