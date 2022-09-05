import { IonContent, IonPage, IonText } from "@ionic/react";
import { ReactElement } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimension";
import Loader from "../Loader";

const SplashScreen = (): ReactElement => {
    const { height, width } = useWindowDimensions()
    return (
        <IonPage>
        <IonContent
            fullscreen
        >
            <Loader message="Please wait" />
            <div style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#333456",
            }}>
                <div style={{
                    height: "80%",
                    padding: width * 0.1,
                    width: width * 0.9,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 40,

                }}>
                    <IonText style={{
                        textAlign: "center",
                        fontSize: 26,
                        color: "#fff"
                    }}>
                        Introduction To Mobile App Design & Development
                    </IonText>
                    <IonText style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#fff"
                    }}>
                        Email Client App
                    </IonText>
                </div>
            </div>
        </IonContent>
        </IonPage>
    )
}

export default SplashScreen