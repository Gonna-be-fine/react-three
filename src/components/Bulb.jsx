const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight
        castShadow
        // shadow-mapSize-height={2 ** 8}
        // shadow-mapSize-width={2 ** 8}
        shadow-radius={8}
      />
      <sphereBufferGeometry args={[0.2]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
