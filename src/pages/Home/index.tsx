import { IonAvatar, IonContent, IonItem, IonLabel, IonVirtualScroll } from "@ionic/react"
import { Virtuoso } from 'react-virtuoso';

import Layout from '../../components/common/Layout';
import Email from "./components/Email";

const EMAILS = [
    { id: "1", 
        sender: "demo@example.com",
        content: "Ea do ea est cupidatat. Velit in excepteur Lorem enim est. Labore cillum nisi eiusmod aliqua deserunt Lorem ipsum excepteur sint elit aute enim nostrud laborum. Et elit quis tempor labore nulla enim dolore sit occaecat sint fugiat qui do excepteur. Adipisicing excepteur fugiat exercitation cupidatat aliquip nostrud quis.",
        isRead: false,
        sentAt: new Date().getTime(),
    },
    { id: "2",
        sender: "demo@example.com",
        content: "Ea do ea est cupidatat. Velit in excepteur Lorem enim est. Labore cillum nisi eiusmod aliqua deserunt Lorem ipsum excepteur sint elit aute enim nostrud laborum. Et elit quis tempor labore nulla enim dolore sit occaecat sint fugiat qui do excepteur. Adipisicing excepteur fugiat exercitation cupidatat aliquip nostrud quis.",
        isRead: false,
        sentAt: new Date().getTime(),
    }
]

const HomeScreen: React.FC = () => {
  return (
    <Layout headerTitle='Home'>
      <IonContent>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={EMAILS.length}
        data={EMAILS}
        itemContent={(index, email) => {
          return (
            <div style={{ height: '56px' }}>
              <IonItem>
                <Email email={email} />
                <IonLabel>{index}</IonLabel>
              </IonItem>
            </div>
          );
        }}
        />
      </IonContent>
    </Layout>
  );
};

export default HomeScreen;
