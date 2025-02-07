import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber'
import {
  softShadows,
  OrbitControls,
  Text,
  Points,
  PointMaterial,
} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Html } from '@react-three/drei'
import SpaceStation from './SpaceStation'
import XWing from './Xwing'
import {
  visibleHeightAtZDepth,
  visibleWidthAtZDepth,
} from '../helpers/VsizeAtZDepth'
import useWindowDimensions from '../helpers/WindowDimensions'
// Bounds file was made by some random guy on github and i straight up yanked his code. Link to the fork:
// https://codesandbox.io/s/bounds-and-makedefault-forked-y12ie?file=/src/App.js
// Compared to the original Bounds import from @react-three/drei, this version ensures that on window resize(first render or reload) the objects within the bounds doesn't get rotated
import { Bounds } from '../helpers/BoundsNoRotation'
export function Stars(props: number[]) {
  const ref = useRef(null)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(7500), { radius: 15 })
  )
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 80
    ref.current.rotation.y -= delta / 100
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color='white'
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02
    )
  )
}
function WelcomeText({ ...props }): JSX.Element {
  const welcomeText = useRef()
  const width: number = props.width
  const positionX: number = props.position[0]
  const positionY: number = props.position[1]
  const positionZ: number = props.position[2]
  const fontSize: number = 1
  return (
    <group ref={welcomeText}>
      <mesh position={[positionX, positionY, positionZ]}>
        <Text
          outlineWidth='5%'
          outlineColor='black'
          color='white'
          anchorX='left'
          anchorY='middle'
          fontSize={fontSize}
          font='/Inter-Bold.ttf'
        >
          HI!
        </Text>
      </mesh>
      <mesh position={[positionX, positionY - 1.2, positionZ]}>
        <Text
          outlineWidth='5%'
          outlineColor='black'
          color='white'
          anchorX='left'
          anchorY='middle'
          fontSize={fontSize}
          font='/Inter-Bold.ttf'
        >
          I'M MINH
        </Text>
      </mesh>
      {width > 1000 ? (
        <mesh position={[positionX, positionY - 2.4, positionZ]}>
          <Text
            outlineWidth='5%'
            color='#DEB841'
            anchorX='left'
            anchorY='middle'
            fontSize={fontSize}
            font='/Inter-Bold.ttf'
          >
            WELCOME TO MY SITE
          </Text>
        </mesh>
      ) : (
        <>
          <mesh position={[positionX, positionY - 2.4, positionZ]}>
            <Text
              outlineWidth='5%'
              color='#DEB841'
              anchorX='left'
              anchorY='middle'
              fontSize={fontSize}
              font='/Inter-Bold.ttf'
            >
              WELCOME TO
            </Text>
          </mesh>
          <mesh position={[positionX, positionY - 3.6, positionZ]}>
            <Text
              outlineWidth='5%'
              color='#DEB841'
              anchorX='left'
              anchorY='middle'
              fontSize={fontSize}
              font='/Inter-Bold.ttf'
            >
              MY SITE
            </Text>
          </mesh>
        </>
      )}
    </group>
  )
}

function ScrollLogo({ ...props }) {
  return (
    <div className='h-16 w-16'>
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200.000000 200.000000'
        preserveAspectRatio='xMidYMid meet'
      >
        <g
          transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
          fill={props.color}
          stroke='none'
        >
          <path
            d='M895 1966 c-162 -40 -289 -172 -324 -334 -15 -71 -15 -633 0 -704 48
            -223 273 -379 494 -341 181 31 314 153 360 330 19 72 22 631 4 715 -51 239
            -297 393 -534 334z m251 -100 c77 -35 145 -103 181 -180 l28 -61 0 -345 0
            -345 -28 -61 c-36 -77 -104 -145 -182 -181 -51 -24 -73 -28 -145 -28 -72 0
            -94 4 -145 28 -78 36 -146 104 -182 181 l-28 61 0 345 0 345 28 60 c86 183
            293 263 473 181z'
          />
          <path
            d='M971 1686 c-8 -9 -11 -48 -9 -111 2 -80 6 -100 21 -109 12 -8 22 -8
            35 0 14 9 18 29 20 109 3 101 -4 125 -38 125 -10 0 -23 -6 -29 -14z'
          />
          <path
            d='M772 528 c-7 -7 -12 -19 -12 -28 0 -20 220 -240 240 -240 20 0 240
            221 240 241 0 19 -20 39 -39 39 -9 0 -57 -42 -108 -92 l-93 -93 -93 93 c-92
            91 -112 103 -135 80z'
          />
          <path
            d='M772 268 c-7 -7 -12 -19 -12 -28 0 -20 220 -240 240 -240 20 0 240
            221 240 241 0 19 -20 39 -39 39 -9 0 -57 -42 -108 -92 l-93 -93 -93 93 c-92
            91 -112 103 -135 80z'
          />
        </g>
      </svg>
    </div>
  )
}
softShadows()
const Welcome = () => {
  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  camera.position.set(0, 0, 8)
  const vWidth = visibleWidthAtZDepth(0, camera)
  const vHeight = visibleHeightAtZDepth(0, camera)
  const { height, width } = useWindowDimensions()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const handleCursorMove = (event) => {
    setCursorPosition({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    })
  }
  // useEffect(() => {
  //   console.log(cursorPosition)
  // }, [cursorPosition])

  return (
    <div
      onMouseMove={handleCursorMove}
      id='welcome'
      className='bg-black h-screen w-full'
    >
      {/* the camera position takes parameter x,y,z. x and y already gives full sphere of rotation, z specifies how
            "far way the camera is from the origin" */}
      <Canvas shadows camera={camera}>
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />

        <Suspense fallback={null}>
          <Bounds fit clip margin={8} fixedOrientation>
            <Html position={[-3, 4, 0]}>
              <div className='text-white md:opacity-0 opacity-100 align-center'>
                Use desktop for the best experience
              </div>
            </Html>
            {/* <Car position={[0,0,0]}/> */}
            <XWing
              position={width > 1000 ? [0, 1, 0] : [-2,1,0]}
              scale={0.22}
              rotation={[1, 0, 0]}
              cursorPosition={cursorPosition}
              vWidth={vWidth}
              vHeight={vHeight}
              height={height}
              width={width}
            />
            <WelcomeText position={[-6, 1, 1]} width={width} />
			{/* 3 lines below enable the scroll logo, disabled for now because it don look good */}
            {/* <Html position={[0, -4, 0]}> */}
            {/*   <ScrollLogo color={'#ffffff'} /> */}
            {/* </Html> */}
          </Bounds>
          <group position={[10, 0, -4]} rotation={[0, -Math.PI / 2.5, 0]}>
            <SpaceStation scale={0.001} />
          </group>
        </Suspense>
        {/* <OrbitControls/> */}
        {/* <Rig /> */}
        <Stars position={[0, -5, 0]} />
      </Canvas>
    </div>
  )
}
export default Welcome
