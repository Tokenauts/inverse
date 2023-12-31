"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  author: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="block rounded-lg border w-64  h-full ">
      <a href="#!">
        <img className="rounded-t-lg" src={props.imgSrc} alt={props.author} />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {props.title}
        </h5>
        <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default TestimonialCard;
