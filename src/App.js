// import logo from './logo.svg';
import './App.css';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import { Physics, useBox } from '@react-three/cannon'

import Bulb from './components/Bulb'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import Cars from './components/Cars'
import CameraControls from './components/CameraControls'
import CameraButtons from './components/CameraButtons'
import ColorPicker from './components/ColorPicker'
import Lights from './components/Lights'

function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <CameraButtons/> 
      <ColorPicker/>   
      <Canvas 
      shadows
      style={{background: 'black'}}
      camera={{position: [3,3,3]}}>
        <Suspense fallback={null}>
          <Background></Background>
        </Suspense>  
        <CameraControls/>  
        <Lights/>
        <Orbit></Orbit>
        <axesHelper args={[5]}/>
        <Physics>
          <Cars/>          
          <Floor position={[0, -0.5, 0]}/>
        </Physics>
        
      </Canvas>
    </div>
  );
}

export default App;
