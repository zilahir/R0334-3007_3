import { IonLoading } from "@ionic/react";
import { ReactElement } from "react";

interface ILoader {
    message: string
}

const Loader = ({message}: ILoader): ReactElement => (
    <IonLoading
        showBackdrop={false}
        mode="ios"
        isOpen
        message={message}
    />
)

export default Loader;