
import { useEffect, useRef, useState } from "react"

import FaceLandmarkerManager from "./FaceLandmarkerManager";
import Avatar from "../canvas/avatar";

const FaceLandmarker = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const lastVideoTimeRef = useRef(-1);
    const requestAnimatioRef = useRef(0);

    const [avatarURL, setAvatarURL] = useState("https://models.readyplayer.me/6471e7e00468253f12ef97f0.glb?morphTargets=ARKit")

    const Animate = () => {
        if (videoRef.current && videoRef.current.currentTime !== lastVideoTimeRef.current) {
            lastVideoTimeRef.current = videoRef.current.currentTime;
            try {
                const faceLandmarker = FaceLandmarkerManager.getInstance()
                faceLandmarker.detectLandmarks(videoRef.current, Date.now());
            } catch (e) {
                console.log(e);
            }
        }

        requestAnimatioRef.current = requestAnimationFrame(Animate);
    }

    useEffect(() => {
        const getUserMediaCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => {
                        requestAnimatioRef.current = requestAnimationFrame(Animate);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }

        getUserMediaCamera()

        return () => cancelAnimationFrame(requestAnimatioRef.current);
    })

    return (
        <>
            <video ref={videoRef} autoPlay className="hidden"></video>
            <Avatar url={avatarURL} />
        </>
    )
}

export default FaceLandmarker