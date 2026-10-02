"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { Product } from "@/lib/products";

const CanScene = dynamic(() => import("./CanScene"), {
  ssr: false,
  loading: () => <StageFallback src="/img/can-mockup.jpg" />,
});
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function StageFallback({ src }: { src: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center opacity-40">
      <div className="h-2 w-16 animate-pulse rounded-full bg-ivory/40" />
      <span className="sr-only">{src}</span>
    </div>
  );
}

/** Illustrated bottle with pointer-driven 3D tilt. */
function BottleTilt({ hovered }: { hovered: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), {
    stiffness: 140,
    damping: 16,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-22, 22]), {
    stiffness: 140,
    damping: 16,
  });
  const shine = useTransform(
    mx,
    [-0.5, 0.5],
    [
      "radial-gradient(60% 40% at 20% 35%, rgba(255,255,255,.55), transparent 70%)",
      "radial-gradient(60% 40% at 80% 35%, rgba(255,255,255,.55), transparent 70%)",
    ],
  );

  return (
    <div
      className="flex h-full w-full items-center justify-center [perspective:1200px]"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative h-[78%] aspect-[700/1691] animate-float"
      >
        <Image
          src="/img/bottle.webp"
          alt="elixir bitters dropper bottle, amber glass with an orange-to-cobalt potion"
          fill
          priority
          sizes="(max-width: 768px) 40vw, 20vw"
          className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.55)]"
          style={{ transform: "translateZ(40px)" }}
        />
        {/* moving glass highlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            background: shine,
            maskImage: "url(/img/bottle.webp)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: "url(/img/bottle.webp)",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            transform: "translateZ(41px)",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function ProductStage({
  product,
  hovered,
}: {
  product: Product;
  hovered: boolean;
}) {
  if (product.splineScene) {
    return <Spline scene={product.splineScene} className="h-full w-full" />;
  }
  return product.id === "can" ? (
    <CanScene hovered={hovered} />
  ) : (
    <BottleTilt hovered={hovered} />
  );
}
