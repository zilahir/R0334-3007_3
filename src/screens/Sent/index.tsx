import { IonContent } from "@ionic/react";
import { ReactElement, useContext } from "react";
import { Virtuoso } from 'react-virtuoso';
import { EmailContext } from "../../api/context";

import Layout from "../../components/common/Layout";
import Email from "../Home/components/Email";

const Sent = (): ReactElement => {
    const { sentEmails } = useContext(EmailContext)
    return (
        <Layout
            headerTitle="Sent"
            headerHeight={180}
        >
            <IonContent>
                <Virtuoso
                    style={{ height: '100%' }}
                    totalCount={sentEmails.length}
                    data={sentEmails}
                    itemContent={(index, email) => {
                        return (
                            <Email key={email._id} email={email} />
                        );
                    }}

                />
            </IonContent>
        </Layout>
    )
}

export default Sent;