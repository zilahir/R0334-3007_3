import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";
import { SingleEmail } from "../../pages/Home/components/Email";

interface EmailContextState {
    emails: SingleEmail[],
    setEmails: Dispatch<SetStateAction<SingleEmail[]>>
}

export const EmailContext = createContext({} as EmailContextState)

interface IEmailContextProvider {
    children: ReactElement | ReactElement[]
}

const ContextProvider = ({children}: IEmailContextProvider) => {
    const [emails, setEmails] = useState<SingleEmail[]>([])
    return (
        <EmailContext.Provider value={{emails, setEmails}}>
            {children}
        </EmailContext.Provider>
    )
}

export default ContextProvider