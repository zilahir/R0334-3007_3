import { ReactElement } from "react";
import { useQuery } from "react-query";
import { useEmail } from "../../hooks/useEmail";

interface IEmailClient {
    children: ReactElement
}

const EmailClient = ({children}: IEmailClient): ReactElement => {
    const { getEmail } = useEmail()
    const { data } = useQuery(["getAllEmail"], getEmail, {
        enabled: true,
        retry: false,
    })

    console.log("allEmail", data)
    return (
        <>
        {children}
        </>
    )
}

export default EmailClient