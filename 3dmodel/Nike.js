/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/nike.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LENGUETA.geometry} material={nodes.LENGUETA.material} position={[0.06, 0.97, -1.84]} scale={[0.73, 1, 0.71]} />
      <mesh geometry={nodes.AGUJETAS.geometry} material={nodes.AGUJETAS.material} position={[0.33, 1.34, -1.5]} rotation={[-1.15, -0.3, -0.59]} scale={[0.2, 1, 1]} />
      <mesh geometry={nodes.TENIS.geometry} material={nodes.TENIS.material} position={[0.06, 0.97, -1.84]} scale={[0.73, 1, 0.71]} />
    </group>
  )
}

useGLTF.preload('/nike.gltf')