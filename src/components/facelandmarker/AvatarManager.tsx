import * as THREE from "three";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import { loadGLTF } from "@/utils/";

class AvatarManager {
    private static instance: AvatarManager = new AvatarManager();
    private scene!: THREE.Scene;
    private constructor() {
        this.scene = new THREE.Scene();
    }

    static getInstance(): AvatarManager {
        return AvatarManager.instance;
    }

    getScene = () => {
        return this.scene;
    };

    loadModel = async (url: string) => {
        const gltf = await loadGLTF(url);
        this.scene.children.length === 1 && this.scene.children[0].removeFromParent();
        gltf.scene.traverse((obj) => { (obj.frustumCulled = false)});
        this.scene.add(gltf.scene);
    };

    updateFacialTransforms = (results: FaceLandmarkerResult) => {
        if (!results) return;

        this.updateBlendShapes(results);
        this.updateTranslation(results);
    };

    private updateBlendShapes = (results: FaceLandmarkerResult) => {
        if (!results.faceBlendshapes) return;

        const blendShapes = results.faceBlendshapes[0]?.categories;
        if (!blendShapes) return;

        this.scene.traverse((obj) => {
            if ("morphTargetDictionary" in obj && "morphTargetInfluences" in obj) {
                const morphTargetDictionary = obj.morphTargetDictionary as {
                    [key: string]: number;
                };
                const morphTargetInfluences = obj.morphTargetInfluences as Array<number>;

                for (const { score, categoryName } of blendShapes) {
                    const index = morphTargetDictionary[categoryName];
                    morphTargetInfluences[index] = score;
                }
            }
        });
    };

    private updateTranslation = (results: FaceLandmarkerResult) => {
        if (!results.facialTransformationMatrixes) return;

        const matrixes = results.facialTransformationMatrixes[0]?.data;
        if (!matrixes) return;

        const matrix = new THREE.Matrix4().fromArray(matrixes);
        const rotation = new THREE.Euler().setFromRotationMatrix(matrix);

        this.scene.getObjectByName("Head")!.rotation.set(rotation.x, rotation.y, rotation.z);
        this.scene.getObjectByName("Neck")!.rotation.set(rotation.x / 5 + 0.3, rotation.y / 5, rotation.z / 5);
        this.scene.getObjectByName("Spine2")!.rotation.set(rotation.x / 10, rotation.y / 10, rotation.z / 10)
    };
}

export default AvatarManager;