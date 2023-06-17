/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import { Canvas  } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import FaceLandmarkManager from "../facelandmarker/FaceLandmarkerManager";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import AvatarManager from "../facelandmarker/AvatarManager";

type Props = {
    url: string
}

const Avatar = (props: Props) => {

    const [scene, setScene] = useState<THREE.Scene | null>();
    const avatarManagerRef = useRef<AvatarManager>(AvatarManager.getInstance());
    const requestAnimatioRef = useRef(0);

    const Animate = () => {
        const result: FaceLandmarkerResult = FaceLandmarkManager.getInstance().getResults();
        avatarManagerRef.current.updateFacialTransforms(result);
        requestAnimatioRef.current =  requestAnimationFrame(Animate)
    }

    useEffect(() => {
        requestAnimatioRef.current = requestAnimationFrame(Animate);

        return () => cancelAnimationFrame(requestAnimatioRef.current);
    }, []);

    useEffect(() => {
        const avatarManager = AvatarManager.getInstance();
        AvatarManager.getInstance().loadModel(props.url).then(() => {
            setScene(avatarManager.getScene());
        })
    }, [props.url])

    return (
        <div className="w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh]">
            <Canvas camera={{ fov: 30, position: [0, 0.8, 1] }}>
                <ambientLight />
                <directionalLight />
                <OrbitControls
                    target={[0, 0.6, 0]}
                    enableDamping={false}
                    enableRotate={false}
                    enableZoom={false}
                    enablePan={false}
                />
                {scene && <primitive object={scene} position={[0, -1, 0]} />}
            </Canvas>
        </div>
    )
}

export default Avatar