import { ReactElement, useContext } from "react";
import { useQuery } from "react-query";
import { EmailContext } from "../../api/context";
import { useEmail } from "../../hooks/useEmail";

interface IEmailClient {
    children: ReactElement
}

const EmailClient = ({children}: IEmailClient): ReactElement => {
    const { getEmail } = useEmail()
    const { setEmails } = useContext(EmailContext)
    const { data } = useQuery(["getAllEmail"], getEmail, {
        enabled: true,
        retry: false,
        onSuccess: (data => setEmails(data.emails))
    })

    console.log("allEmail", data)
    return (
        <>
        {children}
        </>
    )
}

export default EmailClient