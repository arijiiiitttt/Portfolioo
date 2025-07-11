"use client";
import React, { useState, useEffect } from "react";

const LoadingPg = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setLeftVisible(true), 500);
    const t2 = setTimeout(() => setRightVisible(true), 1000);
    const t3 = setTimeout(() => setShake(true), 1500);
    const t4 = setTimeout(() => setShake(false), 2000);
    const t5 = setTimeout(() => setExitAnim(true), 2100); // Quick start
    const t6 = setTimeout(() => setShowLoader(false), 2400); // Fast unmount

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const imageSrc = "./logos/a.png";

  if (!showLoader) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className={`relative w-32 h-32 ${shake ? "animate-shake" : ""}`}>
        {/* Left Half */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in ${
            leftVisible ? "translate-x-0" : "-translate-x-full"
          } ${exitAnim ? "-translate-y-[200%]" : ""}`}
          style={{ clipPath: "inset(0 50% 0 0)" }}
        >
          <img
            src={imageSrc}
            alt="Left Half"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Half */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in ${
            rightVisible ? "translate-x-0" : "translate-x-full"
          } ${exitAnim ? "translate-y-[200%]" : ""}`}
          style={{ clipPath: "inset(0 0 0 50%)" }}
        >
          <img
            src={imageSrc}
            alt="Right Half"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style>
        {`
        @keyframes shake {
          0% { transform: translateX(0); }
          10% { transform: translateX(-10px); }
          20% { transform: translateX(5px); }
          30% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          50% { transform: translateX(-5px); }
          60% { transform: translateX(5px); }
          70% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
          90% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
          animation-iteration-count: 1;
        }
      `}
      </style>
    </div>
  );
};

export default LoadingPg;
