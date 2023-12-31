import Slider from "./slider";
import TestimonialCard from "./card";
import data from "./data.json";
export default function BlogComponent() {
  return (
    <div className="relative items-center w-full max-w-7xl   mx-auto   mt-24  ">
      <h1 className="text-white  text-4xl font-extrabold text-left  mb-24 ">
        The latest Alpha
      </h1>
      <div className="mx-w-xl overflow-y-auto">
        <Slider>
          {data.map((data, i) => (
            <div key={i}>
              <TestimonialCard {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
