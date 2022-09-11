import { IonContent } from "@ionic/react"
import { ReactElement, useContext } from "react";
import { Virtuoso } from 'react-virtuoso';

import { EmailContext } from "../../api/context";
import Layout from '../../components/common/Layout';
import Email from "./components/Email";

const HomeScreen = (): ReactElement => {
    const { emails } = useContext(EmailContext)

    return (
        <Layout
            headerTitle={`Emails (${emails.filter(({isRead}) => isRead === false).length})`}
            headerHeight={180}
        >
            <IonContent>
            {
                <Virtuoso
                    style={{ height: '100%' }}
                    totalCount={emails.length}
                    data={emails}
                    itemContent={(index, email) => {
                        return (
                            <Email key={email._id} email={email} />
                        );
                    }}
                />
            }
            </IonContent>
        </Layout>
    );
};

export default HomeScreen;
