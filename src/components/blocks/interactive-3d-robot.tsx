
'use client';

import { Suspense, lazy, useState, useEffect } from 'react';
import { forwardRef } from 'react';

// Create a properly typed fallback component that matches Spline's interface
const SplineFallback = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div ref={ref} className={props.className}>
      <div className="w-full h-full flex items-center justify-center bg-surface-elevated text-foreground">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            3D Robot unavailable<br />
            <span className="text-xs">Interactive experience loading...</span>
          </p>
        </div>
      </div>
    </div>
  );
});

const Spline = lazy(() => import('@splinetool/react-spline').catch(err => {
  console.error('Failed to load Spline component:', err);
  return { default: SplineFallback };
}));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Pre-load the Spline component to catch errors early
    import('@splinetool/react-spline').catch(err => {
      console.error('Spline import error:', err);
      setHasError(true);
    });
  }, []);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-surface-elevated text-foreground ${className}`}>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            3D Robot unavailable<br />
            <span className="text-xs">Interactive experience loading...</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-surface-elevated text-foreground ${className}`}>
          <div className="flex flex-col items-center space-y-4">
            <svg className="animate-spin h-8 w-8 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
            <p className="text-sm text-muted-foreground">Loading 3D Robot...</p>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className} 
        onLoad={() => console.log('Spline scene loaded successfully')}
        onError={(error) => {
          console.error('Spline scene error:', error);
          setHasError(true);
        }}
      />
    </Suspense>
  );
}
