import {  useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import { useRef } from 'react';
import {useBox} from '@react-three/cannon'

const Box = (props)=> {
  // const box = useRef()
  const [ref, api] = useBox(()=> ({mass: 1, ...props}))
  const texture = useLoader(
    THREE.TextureLoader,
    '/wood.jpg'
  )
  // useFrame(state => {
  //   // console.log(state)
  //   ref.current.rotation.x += 0.01
  //   ref.current.rotation.y += 0.01
  // })
  const handlePointerDown = e => {
    e.object.active = true;
    if(window.activeMesh) {
      scaleDown(window.activeMesh)
      window.activeMesh.active = false
    }
    window.activeMesh = e.object
  }
  const handlePointerEnter = e => {
    e.object.scale.x = 1.5
    e.object.scale.y = 1.5
    e.object.scale.z = 1.5
  }
  const handlePointerLeave = e => {
    if(!e.object.active){
      scaleDown(e.object)      
    }
  }
  const scaleDown = object => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }

  return (
    <mesh ref={ref} {...props}     
    receiveShadow castShadow
    api={api}
    onPointerDown={handlePointerDown}
    onPointerEnter={handlePointerEnter}
    onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry/>
      <meshPhysicalMaterial  map={texture} />
    </mesh>
  )
}

export default Box