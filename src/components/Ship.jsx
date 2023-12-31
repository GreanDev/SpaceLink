/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Ship.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ship1(props) {
  const { nodes, materials } = useGLTF('./models/Ship.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rocket.geometry} material={materials['Material.002']} position={props.position}/>
    </group>
  )
}

useGLTF.preload('./models/Ship.glb')
