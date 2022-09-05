import { createContext, ReactElement } from "react";
import { SingleNotification } from "..";

interface NotificaionState {
    notifications: ReadonlyArray<SingleNotification>
}

const initialState: NotificaionState = {
    notifications: []
}

export const NotificationContext = createContext(initialState)

interface INotificationContextProvider {
    children: ReactElement | ReactElement
}

const NotificationProvider = ({children}: INotificationContextProvider): ReactElement => {
    return (
        <>
            {children}
        </>
    )
}

export default NotificationProvider