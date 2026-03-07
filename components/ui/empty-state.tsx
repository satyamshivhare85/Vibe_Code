import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
}

const EmptyState: React.FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={192} // Tailwind w-48 = 12rem = 192px
          height={192}
          className="mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default EmptyState;