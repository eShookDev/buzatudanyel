import { useCallback, useEffect, useState } from "react"


const useGeolocation = (
    { enableHighAccuracy, maximumAge, timeout}: any = {},
    callback?: any,
    isEnabled = true
) => {

    const [coordinates, setCoordinates] = useState<GeolocationCoordinates>()

    const successCallback: PositionCallback = useCallback(({ coords }) => {

        setCoordinates({
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            heading: coords.heading,
            latitude: coords.latitude,
            longitude: coords.longitude,
            speed: coords.speed
        })

        if (typeof callback === "function") {
            callback({
                accuracy: coords.accuracy,
                altitude: coords.altitude,
                altitudeAccuracy: coords.altitudeAccuracy,
                heading: coords.heading,
                latitude: coords.latitude,
                longitude: coords.longitude,
                speed: coords.speed

            })
        }
    }, [callback])

    const errorCallback = useCallback(() => {

    }, [])

    useEffect(() => {

        let watchPositionId: number;

        if (isEnabled && navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            watchPositionId = navigator.geolocation.watchPosition(
                successCallback,
                errorCallback,
                {
                    enableHighAccuracy,
                    maximumAge,
                    timeout,
                }
            );

            return () => {
                watchPositionId && navigator.geolocation.clearWatch(watchPositionId);
            }
        }

    }, [enableHighAccuracy, errorCallback, isEnabled, maximumAge, successCallback, timeout])

    return coordinates

}

export default useGeolocation