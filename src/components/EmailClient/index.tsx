import { ReactElement, useContext, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { EmailContext } from "../../api/context";
import { useEmail } from "../../hooks/useEmail";
import { EmailType } from "../../screens/Compose";

interface IEmailClient {
    children: ReactElement
}

const EmailClient = ({children}: IEmailClient): ReactElement => {
    const { getEmail, randomIncomingEmail } = useEmail()
    const { setEmails } = useContext(EmailContext)

    function getEmailRequest() {
        return getEmail(EmailType.INCOMING.toLowerCase())
    }

    useQuery(["getAllEmail"], getEmailRequest, {
        enabled: true,
        retry: false,
        onSuccess: (data => setEmails(data)),
    })

    const { mutate: incomingEmailRequest } = useMutation(["incoming"], randomIncomingEmail, {
        retry: false,
    })

    useEffect(() => {
        // incomingEmailRequest()
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default EmailClient