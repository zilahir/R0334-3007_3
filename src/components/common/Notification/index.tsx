import { IonCard, IonText } from "@ionic/react"
import { ReactElement } from "react"

type Severity = "success" | "danger"

export interface SingleNotification {
    message: string,
    severity: Severity,
    timestamp: number,
}

export interface INotification extends Omit<SingleNotification, "severity" | "timestamp"> {} 

const Notification = ({
    message
}: INotification): ReactElement => {
    return (
        <IonCard>
            <IonText>
                {message}
            </IonText>
        </IonCard>
    )
}

export default Notification