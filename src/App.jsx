import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import  { Experience } from './components/Experience'
import './App.css';

function App() {
  const [ alt, setAlt] = useState(1);
  const [ speed, setSpd] = useState(0);
  const [ stage, setStage] = useState("N/A");
  const [ mBreif, setBreif] = useState("N/A");
  const [ mName, setName] = useState("N/A");

  const [ listening, setListening ] = useState(false);

  useEffect( () => {
    if (!listening) {
      const events = new EventSource('http://192.168.0.215:3000/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setAlt((alt) => parsedData.alt);
        setSpd((speed) => parsedData.spd);
        setStage((stage) => parsedData.stage);
        setBreif((mBreif) => parsedData.breif);
        setName((mName) => parsedData.name);

      };

      setListening(true);
    }
  }, [listening, alt]);
  console.log(alt);

  return (
    <>
        <div className='shipInfo'>
        <h1>Speed: {speed}</h1>
        <h1>Altitude: {alt}</h1>
        <h1>Stage: {stage}</h1>
      </div>
      <div className='missionInfo'>
        <h1>Mission Name: {mBreif}</h1>
        <h2>Mission Breif</h2>
        <p>{mName}</p>
      </div>
      <Canvas camera={{ fov: 75, position: [-396,(19.1+parseInt(alt))*2,0]}}>
        <Experience shipAlt={parseInt(alt)}/>
      </Canvas>

    </>
  );
}

export default App;