
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useGraph } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import FaceLandmarkManager from "../facelandmarker/FaceLandmarkerManager";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import AvatarManager from "../facelandmarker/AvatarManager";
import { SkinnedMesh } from "three";
import { get } from "http";

type Props = {
    url: string
}

const Avatar = (props: Props) => {

    const [scene, setScene] = useState<THREE.Scene | null>();
    const avatarManagerRef = useRef<AvatarManager>(AvatarManager.getInstance());

    const animate = () => {
        const result: FaceLandmarkerResult = FaceLandmarkManager.getInstance().getResults();
        avatarManagerRef.current.updateFacialTransforms(result);
        requestAnimationFrame(animate)
    }

    useEffect(() => {
        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const avatarManager = AvatarManager.getInstance();
        avatarManager.loadModel(props.url).then(() => {
            setScene(avatarManager.getScene());
        })
    }, [props.url])

    return (
        <div className="w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh]">
            <Canvas camera={{ fov: 30, position: [0, 0.5, 1] }} className="rounded-2xl">
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