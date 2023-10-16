import { Box, MeshWobbleMaterial, OrbitControls, Plane, TransformControls, shaderMaterial } from "@react-three/drei"
import { Ship1 } from "./Ship"
import { Camera, Fog, MeshBasicMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshToonMaterial, ShadowMaterial } from "three"
import { MultiplayerIsland } from "./Multiplayer"
import { Arid_19_11 } from "./Arid_19_11"
import { Moon } from "./Stormworks_Moon"
import { Ship2 } from "./Ship2"

const gnd = new MeshBasicMaterial({ color: 0x136d15, })

export const Experience = (props) =>
{
    return (
        <>
            <OrbitControls target={[-400,(props.shipAlt)*2,0]} zoomToCursor={false}  enablePan={false}/>
            <ambientLight intensity={2.4} />
            <Arid_19_11 />
            <Ship2 position={[-200,props.shipAlt,0]}/>
            <Moon />
        </>
    )
}