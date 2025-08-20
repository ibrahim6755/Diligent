"use client";

import { useEffect, useState, useRef } from "react";
import { Settings, Camera, Bell } from "lucide-react";

const Counter = ({ end, duration, label, Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const increment = end / (duration / 16); // ~60fps
          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="m-6 flex flex-col items-start justify-start text-left"
    >
      <Icon className="text-orange-600 w-8 h-8 mb-2" />
      <p className="font-bold text-3xl">{count}+</p>
      <p className="uppercase tracking-wide text-gray-700">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-start  my-6">
      <Counter end={100} duration={1500} label="Clients" Icon={Settings} />
      <Counter end={700} duration={2000} label="Experience" Icon={Camera} />
      <Counter end={500} duration={1800} label="Members" Icon={Bell} />
    </div>
  );
};

export default StatsSection;
