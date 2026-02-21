// 'use client';
// import React, { useRef, useEffect, useCallback, useMemo } from 'react';
// import { gsap } from 'gsap';

// const throttle = (func: (...args: any[]) => void, limit: number) => {
//   let lastCall = 0;
//   return function (this: any, ...args: any[]) {
//     const now = performance.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// };

// interface Dot {
//   cx: number;
//   cy: number;
//   xOffset: number;
//   yOffset: number;
//   _inertiaApplied: boolean;
// }

// export interface DotGridProps {
//   dotSize?: number;
//   gap?: number;
//   baseColor?: string;
//   activeColor?: string;
//   proximity?: number;
//   speedTrigger?: number;
//   shockRadius?: number;
//   shockStrength?: number;
//   className?: string;
//   style?: React.CSSProperties;
//   returnDuration?: number;
// }

// export default function DotGrid({
//   dotSize = 5,
//   gap = 15,
//   baseColor = '#271E37',
//   activeColor = '#3c83f6',
//   proximity = 120,
//   speedTrigger = 100,
//   shockRadius = 250,
//   shockStrength = 5,
//   className = '',
//   style,
//   returnDuration = 1.5,
// }: DotGridProps) {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const contextRef = useRef<CanvasRenderingContext2D | null>(null);
//   const dotsRef = useRef<Dot[]>([]);
//   const animationFrameRef = useRef<number>(0);
//   const mousePosRef = useRef({ x: 0, y: 0, speed: 0 });
//   const lastMousePosRef = useRef({ x: 0, y: 0 });
//   const lastTimeRef = useRef(performance.now());

//   const initGrid = useCallback(() => {
//     if (!wrapperRef.current || !canvasRef.current) return;
//     const { width, height } = wrapperRef.current.getBoundingClientRect();
//     canvasRef.current.width = width;
//     canvasRef.current.height = height;
//     const ctx = canvasRef.current.getContext('2d');
//     if (!ctx) return;
//     contextRef.current = ctx;

//     const cols = Math.floor(width / gap);
//     const rows = Math.floor(height / gap);
//     const offsetX = (width - cols * gap) / 2;
//     const offsetY = (height - rows * gap) / 2;

//     const newDots: Dot[] = [];
//     for (let i = 0; i <= cols; i++) {
//       for (let j = 0; j <= rows; j++) {
//         newDots.push({
//           cx: offsetX + i * gap,
//           cy: offsetY + j * gap,
//           xOffset: 0,
//           yOffset: 0,
//           _inertiaApplied: false,
//         });
//       }
//     }
//     dotsRef.current = newDots;
//   }, [gap]);

//   useEffect(() => {
//     initGrid();
//     window.addEventListener('resize', initGrid);
//     return () => window.removeEventListener('resize', initGrid);
//   }, [initGrid]);

//   const hexToRgb = (hex: string) => {
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result
//       ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
//       : '255, 255, 255';
//   };

//   const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
//   const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

//   const draw = useCallback(() => {
//     if (!contextRef.current || !canvasRef.current) return;
//     const ctx = contextRef.current;
//     const { width, height } = canvasRef.current;
//     const { x: mouseX, y: mouseY } = mousePosRef.current;

//     ctx.clearRect(0, 0, width, height);

//     dotsRef.current.forEach((dot) => {
//       const currentX = dot.cx + dot.xOffset;
//       const currentY = dot.cy + dot.yOffset;
//       const dx = currentX - mouseX;
//       const dy = currentY - mouseY;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       let color = `rgba(${baseRgb}, 0.3)`;
//       let scale = 1;

//       if (distance < proximity) {
//         const factor = 1 - distance / proximity;
//         scale = 1 + factor * 0.5;
//         color = `rgba(${activeRgb}, ${0.3 + factor * 0.7})`;
//       }

//       ctx.beginPath();
//       ctx.arc(currentX, currentY, (dotSize / 2) * scale, 0, Math.PI * 2);
//       ctx.fillStyle = color;
//       ctx.fill();
//     });

//     animationFrameRef.current = requestAnimationFrame(draw);
//   }, [baseRgb, activeRgb, dotSize, proximity]);

//   useEffect(() => {
//     animationFrameRef.current = requestAnimationFrame(draw);
//     return () => cancelAnimationFrame(animationFrameRef.current);
//   }, [draw]);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     const onMove = (e: MouseEvent) => {
//       const rect = wrapper.getBoundingClientRect();
//       const currentX = e.clientX - rect.left;
//       const currentY = e.clientY - rect.top;
//       const currentTime = performance.now();
//       const dt = Math.max(1, currentTime - lastTimeRef.current);

//       const dx = currentX - lastMousePosRef.current.x;
//       const dy = currentY - lastMousePosRef.current.y;
//       const speed = Math.sqrt(dx * dx + dy * dy) / dt;

//       mousePosRef.current = { x: currentX, y: currentY, speed: speed * 1000 };

//       if (mousePosRef.current.speed > speedTrigger) {
//         dotsRef.current.forEach((dot) => {
//           const dist = Math.sqrt(
//             Math.pow(dot.cx - currentX, 2) + Math.pow(dot.cy - currentY, 2)
//           );
//           if (dist < shockRadius && !dot._inertiaApplied) {
//             dot._inertiaApplied = true;
//             gsap.killTweensOf(dot);
//             const falloff = Math.max(0, 1 - dist / shockRadius);
//             const pushX = (dot.cx - currentX) * shockStrength * falloff;
//             const pushY = (dot.cy - currentY) * shockStrength * falloff;
            
//             // Standard GSAP animation replacing InertiaPlugin
//             gsap.to(dot, {
//               xOffset: pushX,
//               yOffset: pushY,
//               duration: 0.3, // Quick push duration
//               ease: "power2.out",
//               onComplete: () => {
//                 // Snap back
//                 gsap.to(dot, {
//                   xOffset: 0,
//                   yOffset: 0,
//                   duration: returnDuration,
//                   ease: 'elastic.out(1,0.75)'
//                 });
//                 dot._inertiaApplied = false;
//               }
//             });
//           }
//         });
//       }

//       lastMousePosRef.current = { x: currentX, y: currentY };
//       lastTimeRef.current = currentTime;
//     };

//     const throttledMove = throttle(onMove, 50);
//     window.addEventListener('mousemove', throttledMove, { passive: true });

//     return () => {
//       window.removeEventListener('mousemove', throttledMove);
//     };
//   }, [speedTrigger, proximity, returnDuration, shockRadius, shockStrength]);

//   return (
//     <div className={`p-4 flex items-center justify-center h-full w-full relative ${className}`} style={style}>
//       <div ref={wrapperRef} className="absolute inset-0 overflow-hidden rounded-xl">
//         <canvas ref={canvasRef} className="block w-full h-full" />
//       </div>
//     </div>
//   );
// }