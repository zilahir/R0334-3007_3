import { IonCard, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react";
import { format } from "date-fns"

import { closeCircle, returnDownForward } from 'ionicons/icons';
import { useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { EmailContext } from "../../../../api/context";
// import { EmailContext } from "../../../../api/context";
import Icon from "../../../../components/common/Icon";
import { useEmail } from "../../../../hooks/useEmail";
import { EmailType } from "../../../../screens/Compose";

export interface SingleEmail {
    sender: string;
    sentAt: number;
    content: string;
    isRead: boolean;
    id: string;
    _id?: string;
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

const Email = ({ email }: IEmail) => {
    // const { setEmails, emails } = useContext(EmailContext)
    const { markEmailAsReadById, getEmail } = useEmail()
    const { setEmails } = useContext(EmailContext)

    function getEmailRequest() {
        return getEmail(EmailType.INCOMING.toLowerCase())
    }

    const { refetch } = useQuery(["getAllEmail"], getEmailRequest, {
        enabled: true,
        retry: false,
        onSuccess: (data => setEmails(data)),
    })

    const { mutate: handleMarkEmailAsReadFn } = useMutation(["markAsRead"], markEmailAsReadById, {
        retry: false,
        onSuccess: () => refetch()
    });

    function handleEmailAsRead(idToMark: string) {
        return handleMarkEmailAsReadFn(idToMark);
    }
    return (
        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption color="danger" onClick={() => console.log('favorite clicked')}>
                    <Icon fontSize={30} icon={closeCircle} />
                </IonItemOption>
                <IonItemOption onClick={() => console.log('share clicked')}>
                    <Icon fontSize={30} icon={returnDownForward} />
                </IonItemOption>
            </IonItemOptions>
            <IonCard
                onClick={():void => handleEmailAsRead(email._id as string)}
                style={{
                    display: "flex",
                    padding: 10,
                    margin: "3px 15px",
                    backgroundColor: email.isRead ? "#060930" : "#595B83",
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
                            {format(new Date(email.sentAt), "dd.MM.yyyy H:mm")}
                        </IonText>
                    </div>
                </div>
            </IonCard>
        </IonItemSliding>
    )
}

export default Email