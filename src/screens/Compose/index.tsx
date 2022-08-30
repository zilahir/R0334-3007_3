import { IonContent, IonInput, IonItem, IonTextarea } from "@ionic/react";
import { ReactElement, useState } from "react";
import styled from "styled-components"

import Layout from "../../components/common/Layout";
import Header from "./components/Header";

const Divider = styled.div`
    border-bottom: 1px solid #444;
    margin: 5px 0;
`

const Compose = (): ReactElement => {
    const [to, setTo] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <Layout
            headerTitle="New message"
            customHeader={<Header />}
        >
            <IonContent fullscreen>
                <IonItem>
                    <IonInput 
                        onIonChange={(event => setTo(event.detail.value as string))}
                        placeholder="To"
                    />
                </IonItem>
                <Divider />
                <IonItem>
                    <IonInput 
                        value="demo@example.com"
                        placeholder="From"
                        disabled
                    />
                </IonItem>
                <Divider />
                <IonItem>
                    <IonInput 
                        onIonChange={(event => setSubject(event.detail.value as string))}
                        placeholder="Subject"
                    />
                </IonItem>
                <Divider />
                <IonItem>
                    <IonTextarea 
                        onIonChange={event => setMessage(event.detail.value as string)}
                        placeholder="Message"
                        autoGrow
                    />
                </IonItem>
            </IonContent>
        </Layout>
    )
}

export default Compose