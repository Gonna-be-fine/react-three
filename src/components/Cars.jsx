import { Suspense } from 'react';
import Model from './Model';
import DragControl from './DragControl';
import BoundingBox from './BoundingBox';

const Cars = (props) => {
  return (
    <Suspense fallback={null}>
      {/* transformGroup可视为同一个物体 */}
      <DragControl transformGroup>
        <BoundingBox
          visible
          position={[4, 0, 0]}
          dims={[0.8, 0.8, 1.5]}
          offset={[0, -0.4, 0]}
        >
          <Model path="/jeep/scene.gltf" scale={new Array(3).fill(10)}></Model>
          {/* <Suspense fallback={null}>
                <Box position={[-1,1,2]}></Box>
                </Suspense>
                <Suspense fallback={null}>
                <Box position={[4,1,2]}></Box>
              </Suspense> */}
        </BoundingBox>
      </DragControl>
      <DragControl transformGroup>
        <BoundingBox
          visible
          position={[-3, 0, 0]}
          dims={[1.5, 0.8, 1]}
          offset={[0, -0.4, 0]}
        >
          <Model
            path="/zis-5b/scene.gltf"
            scale={new Array(3).fill(0.3)}
          ></Model>
        </BoundingBox>
      </DragControl>
    </Suspense>
  );
};

export default Cars;
