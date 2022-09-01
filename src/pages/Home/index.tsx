import { IonContent, IonItem } from "@ionic/react"
import { useContext } from "react";
import { Virtuoso } from 'react-virtuoso';
import { EmailContext } from "../../api/context";

import Layout from '../../components/common/Layout';
import Email from "./components/Email";

const HomeScreen: React.FC = () => {
    const { emails } = useContext(EmailContext)
    return (
        <Layout headerTitle={`Emails (${emails.filter(({isRead}) => isRead === false).length})`}>
            <IonContent>
            <Virtuoso
                style={{ height: '100%', margin: "0 10px" }}
                totalCount={emails.length}
                data={emails}
                itemContent={(index, email) => {
                return (
                    <div style={{
                        margin: "10px 0",
                        borderBottom: "1px dotted #ccc"
                    }}>
                        <Email email={email} />
                    </div>
                );
                }}
                />
            </IonContent>
        </Layout>
    );
};

export default HomeScreen;
