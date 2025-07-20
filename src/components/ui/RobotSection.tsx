
'use client';

import React from 'react';
import { InteractiveRobotSpline } from '@/components/blocks/interactive-3d-robot';

const RobotSection = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="robot" className="relative w-full h-screen overflow-hidden bg-background">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0 w-full h-full" 
      />
    </section> 
  );
};

export default RobotSection;
