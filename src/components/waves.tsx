import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useMemo, useCallback, useRef } from "react";
import { PointsMaterial } from "three";

interface IWave {
    pointSize: number,
    distance: number
    speed: number
    height: number
}

function Waves() {

    const time = useRef(0);
    const positionRef = useRef<any>();
    const materialRef = useRef<PointsMaterial>();
    const texture = useLoader(THREE.TextureLoader, './points.png');

    const pointSize = 15

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

    const [positions, colors] = useMemo(() => {

        let positions = []
        let colors = []

        for (let x = 0; x < width; x += distance) {
            for (let z = 0; z < depth; z += distance) {
                positions.push(- width / 2 + x, -30, -depth / 2 + z)
                colors.push(0, 1 - (x / width) * 1, 0.5 + x / width * 0.5, z / depth)
            }
        }

        return [new Float32Array(positions), new Float32Array(colors)];

    }, [width]);

    useFrame(({ clock }) => {
        if (positionRef.current) {

            time.current += 0.01;

            let index = 0
            for (let x = 0; x < width; x += distance) {
                for (let z = 0; z < depth; z += distance) {
                    let positionX = distance * (x - width / 2);
                    let positionZ = distance * (z - depth / 2);
                    positions[index + 1] = PositionY(positionX, positionZ);
                    index += 3;
                }
            }

            positionRef.current.needsUpdate = true;
        }

        if (materialRef.current){
            // Standard points sized
            //materialRef.current.size = ( height / 400) * pointSize * devicePixelRatio
            // Update point sized based on time
            materialRef.current.size = Math.abs(Math.sin(clock.elapsedTime * 5)) * 0.5 * 0.1;
        }
    })

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={positionRef}
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 4}
                    array={colors}
                    itemSize={4}
                />
            </bufferGeometry>
            <pointsMaterial
                ref={materialRef}
                attach="material"
                map={texture}
                vertexColors
                size={0.8}
            />
        </points>
    )
}

export default Waves;