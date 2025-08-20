import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <div className="mx-auto container flex items-center justify-center p-8">
      <Image src="/images/brand1.png" width={100} height={100} alt="brand-logo" className="mx-8" />
      <Image src="/images/brand1.png" width={100} height={100} alt="brand-logo" className="mx-8" />
      <Image src="/images/brand2.png" width={100} height={100} alt="brand-logo" className="mx-8" />
      <Image src="/images/brand3.png" width={100} height={100} alt="brand-logo" className="mx-8" />
      <Image src="/images/brand4.png" width={100} height={100} alt="brand-logo" className="mx-8" />
    </div>
  );
}

export default Brands;
