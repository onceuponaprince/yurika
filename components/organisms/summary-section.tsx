import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Html } from '@react-three/drei'

export interface CardProps {
  title: string;
  description: string;
  scale: number | [number, number, number];
  url: string;
  position?: [number, number, number];
  [key: string]: any;
}

function Card({ title, description, scale, url, ...props }: CardProps) {
  const [hovered, hover] = useState(false)

  return (
    <group {...props}>
      <mesh
        scale={scale}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <planeGeometry />
        <meshBasicMaterial
          map={new THREE.TextureLoader().load(url)}
        />
      </mesh>
      {hovered && (
        <Html position={[0, -1, 0]} center>
          <div style={{
            padding: '20px',
            borderRadius: '8px',
            color: 'white',
            textAlign: 'center',
            width: '200px'
          }}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef<THREE.Group | null>(null)
  useFrame(() => {
    // Animation updates removed since we're using solid colors now
    // Use group.current safely, e.g. if (group.current) { ... }
  })
  return (
    <group ref={group}>
      <Card
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Welcome"
        description="Begin your journey here"
      />
      <Card
        position={[2, 0, 1]}
        scale={3}
        url="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Explore"
        description="Discover new horizons"
      />
      <Card
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url="https://images.unsplash.com/photo-1762568792352-f952c6a0a6cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2487"
        title="Adventure"
        description="Embark on new quests"
      />
      <Card
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Learn"
        description="Gain new skills"
      />
      <Card
        position={[0.75, -height, 3.5]}
        scale={1.5}
        url="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Connect"
        description="Join our community"
      />
      <Card
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url="/https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Create"
        description="Build something amazing"
      />
      <Card
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        title="Achieve"
        description="Reach your goals"
      />
    </group>
  )
}

export default function Summary() {
  return (
    <div className="w-full h-screen">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
              <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
              <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  )
}
