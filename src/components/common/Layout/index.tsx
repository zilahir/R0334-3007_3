import {
    IonContent,
    IonFab,
    IonFabButton,
    useIonRouter,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonRefresher,
    IonRefresherContent,
    RefresherEventDetail
    } from '@ionic/react';
import { ReactElement, useContext } from 'react';
import { addCircle } from 'ionicons/icons';

import useWindowDimensions from '../../../hooks/useWindowDimension';
import { NotificationContext } from '../Notification/context';
import Notification from '../Notification';
import { useEmail } from '../../../hooks/useEmail';
import { EmailContext } from '../../../api/context';
import { EmailType } from '../../../screens/Compose';
import Loader from '../Loader';

interface ILayout {
    headerTitle: string;
    children: ReactElement | ReactElement[];
    customHeader?: ReactElement | ReactElement[];
    headerHeight?: number,
}

const Layout = ({ headerTitle, children, customHeader, headerHeight }: ILayout): ReactElement => {

    const router = useIonRouter();
    const FOB_WIDTH = 56;
    const BOTTOM_TAB_HEIGHT = 60
    const { width, height } = useWindowDimensions();
    const { notifications } = useContext(NotificationContext)

    const { setEmails } = useContext(EmailContext)
    const { getEmail, isLoading } = useEmail()

    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        getEmail(EmailType.INCOMING.toLowerCase()).then((emails) => {
            console.log("emails", emails)
            setEmails(emails)
            setTimeout(() => {
                event.detail.complete();
            }, 3000)
        })
    }
  
    return (
        (
            !isLoading ? (
                <IonPage>
                {
                    customHeader && (
                        <IonHeader>
                            <IonToolbar>
                                {
                                customHeader
                                }
                            </IonToolbar>
                        </IonHeader>
                    )
                }
                    <IonContent>
                        <IonRefresher
                            style={{
                                top: 50,
                            }}
                            slot='fixed'
                            onIonRefresh={(event): void => doRefresh(event)}
                        >
                            <IonRefresherContent 
                                refreshingSpinner="dots"
                                pullingText="Pull to refresh"
                            />
                        </IonRefresher>
                        <IonHeader style={{
                            height: headerHeight || "unset",
                            display: "flex",
                            alignItems: "center",
                        }} collapse="fade">
                            <IonToolbar>
                                <IonTitle size="large">
                                    {headerTitle}
                                </IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        {children}
                    </IonContent>
                    {
                        router.routeInfo.pathname !== '/compose' && (
                            <IonFab style={{
                                position: "absolute",
                                left: width - FOB_WIDTH - FOB_WIDTH * 0.5,
                                top: (height - FOB_WIDTH - FOB_WIDTH * 0.5) - (BOTTOM_TAB_HEIGHT + BOTTOM_TAB_HEIGHT * 0.5),
                        
                            }}>
                                <IonFabButton href="/compose">
                                    <IonIcon icon={addCircle} />
                                </IonFabButton>
                            </IonFab>
                        )
                    }
                    {
                        notifications.map(({message, severity, timestamp}) => (
                            <Notification
                                severity={severity}
                                message={message}
                                timestamp={timestamp}
                            />
                        ))
                    }
                </IonPage>
        ) : <IonPage>
            <IonContent fullscreen>
                <Loader message='Emails are loading!' />
            </IonContent>
        </IonPage>
        )
    )
}

export default Layout