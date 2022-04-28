import keys from "./Constants";
import BingMapsReact from "bingmaps-react";

export default function Map(props) {
    const pushPin = {
        center: {
            latitude: props.latitude,
            longitude: props.longitude,
        },
        options: {
            title: "Darwin III",
        },
    }

    const pushPins = [pushPin];

    return (
            <BingMapsReact bingMapsKey={keys.bingMapsKey}
                height="500px"
                mapOptions={{
                    navigationBarMode: "square",

                }}
                pushPins={pushPins}
                width="auto"
                viewOptions={{
                    center: { latitude: props.latitude, longitude: props.longitude},
                }}
            />
    )
}