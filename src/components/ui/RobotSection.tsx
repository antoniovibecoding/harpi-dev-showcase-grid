
'use client';

import React from 'react';
import { InteractiveRobotSpline } from '@/components/blocks/interactive-3d-robot';

const RobotSection = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="robot" className="relative w-full h-screen overflow-hidden">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0" 
      />

      <div className="
        absolute inset-0 z-10
        pt-20 md:pt-32 lg:pt-40
        px-4 md:px-8            
        pointer-events-none     
      ">
        <div className="
          text-center
          text-foreground
          drop-shadow-lg
          w-full max-w-2xl
          mx-auto
        ">
          <h1 className="
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-bold 
          ">
            This is interactive 3d robot Whobee
          </h1>
        </div>
      </div>
    </section> 
  );
};

export default RobotSection;
