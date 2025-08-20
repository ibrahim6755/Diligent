import Image from "next/image";
import React from "react";

function OfferCard({ title, img, desc }) {
  return (
    <div className="flex flex-col w-3/4 items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-3 text-center m-4">
      {/* Card Image */}
      <div className="w-20 h-20 flex items-center justify-center bg-orange-500 rounded-full mb-6">
        <Image
          src={img || "/images/fallback.png"}
          alt={title || "offer"}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default OfferCard;
