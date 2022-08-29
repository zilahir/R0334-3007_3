import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ReactElement } from 'react';

interface ILayout {
    headerTitle: string;
    children: ReactElement | ReactElement[];
    customHeader?: ReactElement | ReactElement[];
}

const Layout = ({ headerTitle, children, customHeader }: ILayout) => {
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
            </IonPage>
            )
    )
}

export default Layout