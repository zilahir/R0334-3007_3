import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ReactElement } from "react";
import { ellipse, square, triangle } from 'ionicons/icons';
import { Route } from "react-router-dom";

import Compose from "./Compose";
import HomeScreen from "./Home";
import Sent from "./Sent";

interface Screen {
    name: string,
    path: string,
    Screen: ReactElement,
    onTab: boolean,
    icon?: string
}

const appRoutes: ReadonlyArray<Screen> = [
    {
        name: "Home",
        path: "/",
        Screen: <HomeScreen />,
        onTab: true,
        icon: ellipse,
    },
    {
        name: "Compose",
        path: "/compose",
        Screen: <Compose />,
        onTab: false,
    },
    {
        name: "Sent",
        path: "/sent",
        Screen: <Sent />,
        onTab: true,
        icon: square,
    }
]

const AppRoutes = () => (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                {
                    appRoutes.map((route) => (
                        <Route exact path={route.path} key={route.name}>
                            {route.Screen}
                        </Route>
                    ))
                }
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                {
                    appRoutes.filter(({ onTab }) => onTab === true ).map((screen) => (
                        <IonTabButton tab={screen.name} href={screen.path}>
                            <IonIcon icon={screen.icon} />
                            <IonLabel>
                                {screen.name}
                            </IonLabel>
                        </IonTabButton>
                    ))
                }
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
)

export default AppRoutes;