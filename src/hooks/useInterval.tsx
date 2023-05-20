import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number) => {

    const savedCallback = useRef<any>()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function intervalCallback(){
            savedCallback.current()
        }
        if (delay !== null) {
            let intervalId = setInterval(intervalCallback, delay)
            return () => clearInterval(intervalId);
        }
    }, [delay])
}

export default useInterval