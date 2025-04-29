"use client";

import { Loader, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Suspense } from "react";

const ViewCanvas = () => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={2}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <Stats />
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ViewCanvas;
