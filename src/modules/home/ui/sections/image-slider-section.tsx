"use client";

import VectorCombined from "@/components/vector-combined";

interface Props {
  photos: string[];
}

export const ImageSliderSection = ({ photos }: Props) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500">
        {photos.map((url, index) => (
          <div key={index} className="flex-[0_0_100%] h-full relative">
            <img
              src={url}
              alt={`Photo ${index}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="absolute right-0 bottom-0">
        <VectorCombined title="Photography" position="bottom-right" />
      </div>
    </div>
  );
};
