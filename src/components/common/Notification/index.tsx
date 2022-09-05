import { IonCard, IonText } from "@ionic/react"
import { ReactElement, useContext, useEffect } from "react"
import styled from "styled-components";

import { NotificationContext } from "./context";

type Severity = "success" | "danger"

export interface SingleNotification {
    message: string,
    severity: Severity,
    timestamp: number,
}

const severityColors = {
    success: {
        backgroundColor: "#4ed34e",
        fontColor: "#ffffff"
    },
    danger: {
        backgroundColor: "#ff1a1a",
        fontColor: "#fff"
    },
}

interface RootProps extends Omit<SingleNotification, "timestamp" | "message"> {}

const NotificationRootContainer = styled(IonCard)<RootProps>`
    background-color: ${props => severityColors[props.severity].backgroundColor};
`

const NotificationMessage = styled(IonText)<RootProps>`
    color: ${props => severityColors[props.severity].fontColor};
`

export interface INotification extends Omit<SingleNotification, "severity" | "timestamp"> {} 

const Notification = ({
    message,
    severity,
    timestamp
}: SingleNotification): ReactElement => {

    const { removeNotificationByTimeStamp } = useContext(NotificationContext)

    useEffect(() => {
        setTimeout(() => {
            removeNotificationByTimeStamp(timestamp)
        }, 5000)
    }, [])
    return (
        <NotificationRootContainer
            key={timestamp}
            style={{
                padding: 20,
                bottom: 20,
        }}
            severity={severity}
        >
            <NotificationMessage
                style={{
                    fontSize: 22,
                }}
                severity={severity}
            >
                {message}
            </NotificationMessage>
        </NotificationRootContainer>
    )
}

export default Notification