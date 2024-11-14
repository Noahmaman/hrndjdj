"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import * as THREE from "three"

function VRHeadset({ scale = 1 }) {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={mesh} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#8B5CF6"
        roughness={0.3}
        metalness={0.8}
        emissive="#4C1D95"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export function VRScene() {
  return (
    <div className="h-[400px] w-full max-w-[600px] mx-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <VRHeadset scale={1.5} />
        
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}