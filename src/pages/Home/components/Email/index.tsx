import { IonCard, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react";
import { format } from "date-fns"

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
        <IonCard style={{
            display: "flex",
            padding: 10,
            margin: "3px 15px",
        }}>
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
            }}>
                <div style={{
                    width: 60,
                    height: 60,
                    borderRadius: "100%",
                    backgroundColor: "#ccc",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                }}>
                    <IonText style={{
                    textTransform: "uppercase",
                }}>
                    {
                        createSenderInitials(email.sender)
                    }
                </IonText>
                </div>
            </div>
            <div style={{
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 1,
                gap: 8,
            }}>
                <IonText>
                    {
                        createSenderName(email.sender)
                    }
                </IonText>
                <IonText style={{
                    fontSize: 20,
                }}>
                    {createEmailContentExceprt(email.content)}
                </IonText>
                <div>
                    <IonText>
                        {format(new Date(email.sentAt), "dd.MM.yyyy")}
                    </IonText>
                </div>
            </div>
        </IonCard>
    </IonItemSliding>
)

export default Email