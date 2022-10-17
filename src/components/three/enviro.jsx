import { Environment, useTexture } from '@react-three/drei'
import { BackSide } from 'three'

// import bgImg from '../../assets/hdr/StudioHDR_2_StarField_01_2k.hdr'

const Enviro = () => {
  // const [bgFile] = useTexture([bgImg])
  // console.log( bgImg)
  return (
    <Environment background>
      <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshStandardMaterial color={'black'} side={BackSide} />
      </mesh>
    </Environment>
  )
}

export default Enviro
