import { ReactElement, useContext } from "react";
import { useQuery } from "react-query";
import { EmailContext } from "../../api/context";
import { useEmail } from "../../hooks/useEmail";
import { EmailType } from "../../screens/Compose";

interface IEmailClient {
    children: ReactElement
}

const EmailClient = ({children}: IEmailClient): ReactElement => {
    const { getEmail } = useEmail()
    const { setEmails, setSentEmails } = useContext(EmailContext)

    function getEmailRequest(type: EmailType) {
        return getEmail(type.toLowerCase() as EmailType as string)
    }

    useQuery(["getAllIncoming", EmailType.INCOMING], () => getEmailRequest(EmailType.INCOMING), {
        enabled: true,
        retry: false,
        onSuccess: (data => setEmails(data)),
    })

    useQuery(["getAllOutGoing", EmailType.OUTGOING], () => getEmailRequest(EmailType.OUTGOING), {
        enabled: true,
        retry: false,
        onSuccess: (data => setSentEmails(data)),
    })

    return (
        <>
            {children}
        </>
    )
}

export default EmailClient