import createGlobe, { Marker } from "cobe";
import { useEffect, useRef } from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    width: number,
    height: number,
    markers: Marker[],
}

const Globe = (props: Props) => {

    const refCanvas = useRef<any>();

    useEffect(() => {

        let phi = 0;

        const globe = createGlobe(refCanvas.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            opacity: .9,
            markers: props.markers,
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01
            }
        });

        return () => globe.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <canvas ref={refCanvas} className={props.className} />
    )
}

export default Globe;