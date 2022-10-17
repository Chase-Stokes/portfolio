const Camera = (props) => {

  return (
    <perspectiveCamera
      fov={75}
      near={.1}
      far={1000}
      aspect={window.innerWidth / window.innerHeight}
    />
  )
}

export default Camera
