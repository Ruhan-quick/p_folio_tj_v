import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useRef} from "react";

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.01;
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args = {[1,1,1]}/>
            <meshLambertMaterial color="#468585" emissive="#468585"></meshLambertMaterial>
        </mesh>
    )
}

const App = () =>{
    return (
        <Canvas style={{height: '100vh', width:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <OrbitControls enablePan enableZoom enableRotate></OrbitControls>
                <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}></directionalLight>
                <color attach={background} args={['#F0F0F0']}></color>
                <RotatingCube />
        </Canvas>
    )
}

export default App;