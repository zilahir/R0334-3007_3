import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";
import { SingleNotification } from "..";

interface NotificaionState {
    notifications: ReadonlyArray<SingleNotification>,
    setNotifications: Dispatch<SetStateAction<SingleNotification[]>>
    addNewNotificaion: (value: SingleNotification) => void,
    removeNotificationByTimeStamp: (value: number) => void,
}

const initialState = {
    notifications: [],
}

export const NotificationContext = createContext(initialState as unknown as NotificaionState)

interface INotificationContextProvider {
    children: ReactElement | ReactElement
}

const NotificationProvider = ({children}: INotificationContextProvider): ReactElement => {
    const [notifications, setNotifications] = useState<SingleNotification[]>([])

    function addNewNotificaion(newNotification: SingleNotification): void {
        setNotifications([...notifications, newNotification])
    }

    function removeNotificationByTimeStamp(timeStampToRemove: number): void {
        const filtered = notifications.filter(({ timestamp }) =>  timestamp !== timeStampToRemove);
        setNotifications(filtered);
    }

    return (
        <NotificationContext.Provider value={{notifications, setNotifications, addNewNotificaion, removeNotificationByTimeStamp}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider