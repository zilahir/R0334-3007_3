import { IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react";

import { closeCircle, returnDownForward } from 'ionicons/icons';
import Icon from "../../../../components/common/Icon";

export interface SingleEmail {
    sender: string;
    sentAt: number;
    content: string;
    isRead: boolean;
    id: string;
}

interface IEmail {
    email: SingleEmail
}

function createSenderInitials(email: string):string {
    return email.substring(0, 2)
}

function createSenderName(email: string):string {
    return email.split("@")[0]
}

function createEmailContentExceprt(email: string) {
    return `${email.substring(0, 40)}...`
}

const Email = ({ email }: IEmail) => (
    <IonItemSliding>
        <IonItemOptions side="start">
            <IonItemOption color="danger" onClick={() => console.log('favorite clicked')}>
                <Icon fontSize={30} icon={closeCircle} />
            </IonItemOption>
            <IonItemOption onClick={() => console.log('share clicked')}>
                <Icon fontSize={30} icon={returnDownForward} />
            </IonItemOption>
        </IonItemOptions>
        <IonItem lines="none" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: 60,
                height: 60,
                borderRadius: "100%",
                backgroundColor: "#ccc",
                boxSizing: "border-box",
            }}>
                <IonText style={{
                    textTransform: "uppercase",
                }}>
                    {
                        createSenderInitials(email.sender)
                    }
                </IonText>
            </div>
            <div style={{
                padding: 10,
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <IonText>
                    {
                        createSenderName(email.sender)
                    }
                </IonText>
                <IonText>
                    {createEmailContentExceprt(email.content)}
                </IonText>
            </div>
        </IonItem>
    </IonItemSliding>
)

export default Email