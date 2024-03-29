import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const loadGLTF = async (url: string): Promise<GLTF> => {
    const loader = new GLTFLoader();
    return await new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => resolve(gltf),
            (progress) => { },
            (error) => reject(error)
        );
    });
};
export default loadGLTF;