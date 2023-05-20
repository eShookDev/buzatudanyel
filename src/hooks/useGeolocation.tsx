import { useCallback, useEffect, useState } from "react"


const useGeolocation = () => {

    const [coordinates, setCoordinates] = useState<GeolocationCoordinates>()

    const successCallback: PositionCallback = useCallback(({ coords }) => {
        return setCoordinates({
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            heading: coords.heading,
            latitude: coords.latitude,
            longitude: coords.longitude,
            speed: coords.speed
        })
    }, [])

    const errorCallback = useCallback(() => {

    }, [])

    useEffect(() => {

        let watchPositionId: number;

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            watchPositionId = navigator.geolocation.watchPosition(successCallback, errorCallback);

            return () => {
                watchPositionId && navigator.geolocation.clearWatch(watchPositionId);
            }
        }

    }, [errorCallback, successCallback])

    return coordinates

}

export default useGeolocation