import { IonCard, IonContent, IonInput, IonItem, IonTextarea } from "@ionic/react";
import { ReactElement, useContext } from "react";
import { EmailContext } from "../../api/context";

import Layout from "../../components/common/Layout";
import Header from "./components/Header";

export enum EmailType {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING",
}

export interface NewEmail {
    to: string,
    subject?: string,
    content: string,
    emailType: EmailType
}

const Compose = (): ReactElement => {
    const { composeNewEmail, newEmail } = useContext(EmailContext)

    function handleNewEmailInput(field: string, inputValue: string): void {
        composeNewEmail((value) => ({
            ...value,
            [field]: inputValue
        }))
    }

    return (
        <Layout
            headerTitle="New message"
            customHeader={<Header />}
        >
                <IonContent>
                    <IonCard>
                        <IonItem>
                            <IonInput
                                onIonChange={(event => handleNewEmailInput("to", event.detail.value as string))}
                                placeholder="To"
                                value={newEmail.to}
                            />
                        </IonItem>
                    </IonCard>
                    <IonCard>
                        <IonItem>
                            <IonInput 
                                onIonChange={(event => handleNewEmailInput("subject", event.detail.value as string))}
                                placeholder="Subject"
                                value={newEmail.subject}
                            />
                        </IonItem>
                    </IonCard>
                    <IonCard>
                        <IonItem>
                            <IonTextarea 
                                onIonChange={event => handleNewEmailInput("content", event.detail.value as string)}
                                placeholder="Message"
                                value={newEmail.content}
                                autoGrow
                            />
                        </IonItem>
                    </IonCard>
                </IonContent>
        </Layout>
    )
}

export default Compose