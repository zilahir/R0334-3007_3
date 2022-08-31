import { IonItem } from "@ionic/react";

interface SingleEmail {
    sender: string;
    sentAt: number;
    content: string;
    isRead: boolean;
    id: string;
}

interface IEmail {
    email: SingleEmail
}

const Email = ({ email }: IEmail) => (
    <IonItem>
        <p>
            {email.sender}
        </p>
    </IonItem>
)

export default Email