"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// 200ml slim can, in scene units. Label art is a full 360° wrap.
const R = 0.5;
const LABEL_H = 2.2;
const FRONT_U = 0.23; // horizontal position of the front artwork in the label image

function Can({ hovered }: { hovered: boolean }) {
  const group = useRef<THREE.Group>(null);
  const label = useTexture("/img/can-label.jpg", (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
  });

  // shoulder + lid and the base, drawn as lathe profiles
  const top = useMemo(() => {
    const pts = [
      [R, 0],
      [R * 0.98, 0.06],
      [R * 0.86, 0.16],
      [R * 0.84, 0.2],
      [R * 0.86, 0.22],
      [R * 0.82, 0.235],
      [R * 0.74, 0.215],
      [0, 0.215],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 96);
  }, []);
  const base = useMemo(() => {
    const pts = [
      [0, -0.02],
      [R * 0.7, -0.06],
      [R * 0.9, -0.08],
      [R * 0.98, -0.04],
      [R, 0],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 96);
  }, []);

  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * (hovered ? 0.9 : 0.25);
  });

  const metal = (
    <meshStandardMaterial color="#d9d6d2" metalness={1} roughness={0.28} />
  );

  return (
    <group ref={group} rotation={[0, -FRONT_U * Math.PI * 2, 0]}>
      <mesh>
        <cylinderGeometry args={[R, R, LABEL_H, 128, 1, true]} />
        <meshPhysicalMaterial
          map={label}
          roughness={0.32}
          metalness={0.15}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh geometry={top} position={[0, LABEL_H / 2, 0]}>
        {metal}
      </mesh>
      <mesh geometry={base} position={[0, -LABEL_H / 2, 0]}>
        {metal}
      </mesh>
      {/* ring pull */}
      <mesh
        position={[0, LABEL_H / 2 + 0.225, 0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[0.1, 0.022, 12, 48]} />
        {metal}
      </mesh>
    </group>
  );
}

// pull the camera back on tall, narrow stages so the can never clips
function FitCamera() {
  useFrame(({ camera, size }) => {
    const target = size.width / size.height < 0.55 ? 7.6 : 6.2;
    camera.position.z += (target - camera.position.z) * 0.1;
  });
  return null;
}

export default function CanScene({ hovered = false }: { hovered?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 6.2], fov: 32 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      <FitCamera />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      <Suspense fallback={null}>
        <PresentationControls
          global={false}
          cursor
          snap
          speed={1.4}
          polar={[-0.15, 0.25]}
          azimuth={[-Infinity, Infinity]}
        >
          <group position={[0, 0.05, 0]}>
            <Can hovered={hovered} />
          </group>
        </PresentationControls>
        <ContactShadows
          position={[0, -1.32, 0]}
          opacity={0.55}
          scale={4}
          blur={2.6}
          far={2}
          color="#000000"
        />
        <Environment resolution={256}>
          <Lightformer
            form="rect"
            intensity={3}
            position={[2.5, 1, 3]}
            scale={[1.2, 4, 1]}
          />
          <Lightformer
            form="rect"
            intensity={2}
            color="#ee7a2e"
            position={[-3, 0.5, 2]}
            scale={[1, 4, 1]}
          />
          <Lightformer
            form="rect"
            intensity={1.5}
            color="#5357d8"
            position={[0, -2, -3]}
            scale={[4, 1, 1]}
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
