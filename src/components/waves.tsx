import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useMemo, useCallback, useRef } from "react";
import { buffer } from "stream/consumers";


function Waves() {

    const time = useRef(0);
    const bufferRef = useRef<any>();
    const texture = useLoader(THREE.TextureLoader, './points.png');

    const width = 400 * (window.innerWidth / window.innerHeight);
    const depth = 400

    const distance = 5
    const speed = 2
    const height = 4

    const PositionY = useCallback((positionX: any, positionZ: any) => {
        return (
            (Math.cos(positionX / width * Math.PI + time.current * speed) +
            Math.sin(positionZ / depth * Math.PI + time.current * speed)) * height
        )
    }, [width])

    const positions = useMemo(() => {

        let positions = []

        for (let x = 0; x < width; x += distance) {
            for (let z = 0; z < depth; z += distance) {
                positions.push(- width / 2 + x, -30, -depth/ 2 + z)
            }
        }

        return new Float32Array(positions);

    }, [width]);

    useFrame(() => {
        time.current += 0.01;

        const positions = bufferRef.current.array;

        let index = 0
        for (let x = 0; x < width; x += distance) {
            for (let z = 0; z < depth; z += distance) {

                let positionX = distance * (x - width / 2);
                let positionZ = distance * (z - depth / 2);

                positions[index + 1] = PositionY(positionX, positionZ);
                index += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })

    console.log(bufferRef);

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={texture}
                color={0x00AAFF}
                size={0.5}
            />
        </points>
    )
}

export default Waves;