import { sortBy } from "lodash"
import { ReactElement, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { EmailContext } from "../../api/context";
import { useEmail } from "../../hooks/useEmail";

interface IEmailClient {
    children: ReactElement
}

const EmailClient = ({children}: IEmailClient): ReactElement => {
    const { getEmail } = useEmail()
    const { setEmails } = useContext(EmailContext)

    useQuery(["getAllEmail"], getEmail, {
        enabled: true,
        retry: false,
        onSuccess: (data => setEmails(sortBy(data.emails, ["sentAt"], ["asc"])))
    })

    return (
        <>
            {children}
        </>
    )
}

export default EmailClient