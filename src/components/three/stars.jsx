import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Stars() {
  const stars = useMemo(() => {
    const starPosition = [];
    for (let i = 0; i < 300; i++) {
      const x = THREE.MathUtils.randFloatSpread(100);
      const y = THREE.MathUtils.randFloatSpread(100);
      const z = THREE.MathUtils.randFloatSpread(100);

      starPosition.push({ x, y, z });
    }
    return starPosition;
  }, [300])

  const meshRef = useRef()
  const light = useRef()
  const scene = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    stars.forEach((star, index) => {
      let { x, y, z } = star;
      scene.position.set(x, y, z);
      scene.updateMatrix();
      meshRef.current.setMatrixAt(index, scene.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  })


  return (
    <>
      <pointLight ref={light} intensity={8} color="#ffffff" />
      <instancedMesh ref={meshRef} args={[null, null, 300]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#050505" />
      </instancedMesh>
    </>
  )
}
