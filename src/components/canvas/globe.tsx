import createGlobe, { Marker } from "cobe";
import { useEffect, useRef } from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    width: number,
    height: number,
}

const Globe = (props: Props) => {

    const canvasRef = useRef<any>();

    useEffect(() => {

        let currentPhi = 0

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: props.width * 2,
            height: props.height * 2,
            phi: currentPhi,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            opacity: .9,
            markers: [{ location: [43.4702359, 11.8525811], size: 0.1 }],
            onRender: (state) => {
                currentPhi += .01
                state.phi = currentPhi
            }
        });

        return () => {
            globe.destroy()
        }
    }, [props.height, props.width])

    return (
        <canvas
            ref={canvasRef}
            className={props.className}
        />
    )
}

export default Globe;