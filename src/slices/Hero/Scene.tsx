"use client";

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

import FloatingCan from "@/app/components/FloatingCan";

export default function Scene() {
  const canOneRef = useRef<Group>(null);
  const canTwoRef = useRef<Group>(null);
  const canThreeRef = useRef<Group>(null);
  const canFourRef = useRef<Group>(null);
  const canFiveRef = useRef<Group>(null);

  return (
    <group>
      <FloatingCan />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
