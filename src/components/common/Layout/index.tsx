import {
    IonContent,
    IonFab,
    IonFabButton,
    useIonRouter,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
    } from '@ionic/react';
import { ReactElement, useContext } from 'react';
import { addCircle } from 'ionicons/icons';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import { NotificationContext } from '../Notification/context';
import Notification from '../Notification';
interface ILayout {
    headerTitle: string;
    children: ReactElement | ReactElement[];
    customHeader?: ReactElement | ReactElement[];
}

const Layout = ({ headerTitle, children, customHeader }: ILayout) => {

    const router = useIonRouter();
    const FOB_WIDTH = 56;
    const { width, height } = useWindowDimensions();
    const { notifications } = useContext(NotificationContext)
  
    return (
        (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        {
                        customHeader && customHeader
                        }
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
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
                            top: height - FOB_WIDTH - FOB_WIDTH * 0.5,
                      
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
            )
    )
}

export default Layout