
import {
    FaceLandmarker,
    FilesetResolver,
    FaceLandmarkerResult,
} from "@mediapipe/tasks-vision";

class FaceLandmarkManager {
    private static instance: FaceLandmarkManager = new FaceLandmarkManager();
    private results!: FaceLandmarkerResult;
    faceLandmarker!: FaceLandmarker | null;

    private constructor() {
        this.initializeModel();
    }

    static getInstance(): FaceLandmarkManager {
        return FaceLandmarkManager.instance;
    }

    initializeModel = async () => {
        this.faceLandmarker = null;
        const filesetResolver = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        this.faceLandmarker = await FaceLandmarker.createFromOptions(
            filesetResolver,
            {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                    delegate: "GPU",
                },
                outputFaceBlendshapes: true,
                outputFacialTransformationMatrixes: true,
                runningMode: "VIDEO",
                numFaces: 1,
            }
        );
    };

    getResults = () => {
        return this.results;
    };

    detectLandmarks = (videoElement: HTMLVideoElement, time: number) => {
        if (!this.faceLandmarker) return;

        const results = this.faceLandmarker.detectForVideo(videoElement, time);
        this.results = results;
        return results;
    };
}

export default FaceLandmarkManager;