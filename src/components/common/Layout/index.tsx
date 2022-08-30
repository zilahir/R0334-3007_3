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
import { ReactElement } from 'react';
import { addCircle } from 'ionicons/icons';
import useWindowDimensions from '../../../hooks/useWindowDimension';
interface ILayout {
    headerTitle: string;
    children: ReactElement | ReactElement[];
    customHeader?: ReactElement | ReactElement[];
}

const Layout = ({ headerTitle, children, customHeader }: ILayout) => {

    const router = useIonRouter();
    const FOB_WIDTH = 56;
    const { width, height } = useWindowDimensions();
  
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
        </IonPage>
            )
    )
}

export default Layout