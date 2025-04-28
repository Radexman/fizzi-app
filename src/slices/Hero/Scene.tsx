"use client";

import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import FloatingCan from "@/app/components/FloatingCan";

const FLOAT_SPEED = 1.5;

gsap.registerPlugin(useGSAP);

export default function Scene() {
  const canOneRef = useRef<Group>(null);
  const canTwoRef = useRef<Group>(null);
  const canThreeRef = useRef<Group>(null);
  const canFourRef = useRef<Group>(null);
  const canFiveRef = useRef<Group>(null);

  const canOneGroupRef = useRef<Group>(null);
  const canTwoGroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  useGSAP(() => {
    if (
      !canOneRef.current ||
      !canTwoRef.current ||
      !canThreeRef.current ||
      !canFourRef.current ||
      !canFiveRef.current ||
      !canOneGroupRef.current ||
      !canTwoGroupRef.current ||
      !groupRef.current
    )
      return;

    // Set can starting location
    gsap.set(canOneRef.current.position, {
      x: -1.5,
    });
    gsap.set(canOneRef.current.rotation, {
      z: -0.5,
    });

    gsap.set(canTwoRef.current.position, {
      x: 1.5,
    });
    gsap.set(canTwoRef.current.rotation, {
      z: 0.5,
    });
    gsap.set(canThreeRef.current.position, {
      y: 5,
      z: 2,
    });
    gsap.set(canFourRef.current.position, {
      x: 2,
      y: 4,
      z: 2,
    });
    gsap.set(canFiveRef.current.position, {
      y: -5,
    });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    introTl
      .from(
        canOneGroupRef.current.position,
        {
          y: -5,
          x: 1,
        },
        0,
      )
      .from(
        canOneGroupRef.current.rotation,
        {
          z: 3,
        },
        0,
      )
      .from(
        canTwoGroupRef.current.position,
        {
          y: 5,
          x: 1,
        },
        0,
      )
      .from(
        canTwoGroupRef.current.rotation,
        {
          z: 3,
        },
        0,
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={canOneGroupRef}>
        <FloatingCan
          ref={canOneRef}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={canTwoGroupRef}>
        <FloatingCan
          ref={canTwoRef}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan ref={canThreeRef} flavor="grape" floatSpeed={FLOAT_SPEED} />
      <FloatingCan
        ref={canFourRef}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan
        ref={canFiveRef}
        flavor="watermelon"
        floatSpeed={FLOAT_SPEED}
      />
      {/* <OrbitControls /> */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
