import Bulb from './Bulb';

const Lights = (props) => {
  return (
    <>
      <ambientLight intensity={0.2}></ambientLight>
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        shadow-mapSize-height={2 ** 8}
        shadow-mapSize-width={2 ** 8}
        shadow-radius={2}
        castShadow
      />
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[6, 3, 0]} />
      <Bulb position={[-6, 3, 0]} />
    </>
  );
};

export default Lights;
