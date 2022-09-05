import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";
import { SingleEmail } from "../../pages/Home/components/Email";
import { NewEmail } from "../../screens/Compose";

interface EmailContextState {
    emails: SingleEmail[],
    setEmails: Dispatch<SetStateAction<SingleEmail[]>>
    newEmail: NewEmail,
    composeNewEmail: Dispatch<SetStateAction<NewEmail>>
}

export const EmailContext = createContext({} as EmailContextState)

interface IEmailContextProvider {
    children: ReactElement | ReactElement[]
}

const RootContextProvider = ({children}: IEmailContextProvider) => {
    const [emails, setEmails] = useState<SingleEmail[]>([])
    const [newEmail, composeNewEmail] = useState<NewEmail>({} as NewEmail)

    return (
        <EmailContext.Provider value={{emails, setEmails, newEmail, composeNewEmail}}>
            {children}
        </EmailContext.Provider>
    )
}

export default RootContextProvider