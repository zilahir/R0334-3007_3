import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonIcon,
  IonFab,
  NavContext,
  IonFabButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Compose from './screens/Compose';
import useWindowDimensions from './hooks/useWindowDimension';
import { useContext } from 'react';
import { addCircle } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useContext(NavContext)
  return (
    (
      <IonApp>
        <IonReactRouter> 
            <IonRouterOutlet>
              <Route path="/">
                <Tab1 />
              </Route>
              <Route path="/compose">
                <Compose />
              </Route>
            </IonRouterOutlet>
        </IonReactRouter>
        <IonFab style={{
              position: "absolute",
              right: width * 0.1,
              bottom: height * 0.05,
              
          }}>
              <IonFabButton onClick={(): void => navigate('/compose', "forward", "push")}>
                  <IonIcon icon={addCircle} />
              </IonFabButton>
          </IonFab>
      </IonApp>
    )
  )
}

export default App;
