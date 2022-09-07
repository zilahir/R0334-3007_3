import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";
import { useEmail } from "../../hooks/useEmail";
import { NewEmail } from "../../screens/Compose";
import { SingleEmail } from "../../screens/Home/components/Email";

interface EmailContextState {
    emails: SingleEmail[],
    setEmails: Dispatch<SetStateAction<SingleEmail[]>>
    newEmail: NewEmail,
    composeNewEmail: Dispatch<SetStateAction<NewEmail>>
    isLoading: boolean,
}

export const EmailContext = createContext({} as EmailContextState)

interface IEmailContextProvider {
    children: ReactElement | ReactElement[]
}

const RootContextProvider = ({children}: IEmailContextProvider) => {
    const [emails, setEmails] = useState<SingleEmail[]>([])
    const [newEmail, composeNewEmail] = useState<NewEmail>({} as NewEmail)
    const { isLoading } = useEmail()

    return (
        <EmailContext.Provider value={{emails, setEmails, newEmail, composeNewEmail, isLoading}}>
            {children}
        </EmailContext.Provider>
    )
}

export default RootContextProvider