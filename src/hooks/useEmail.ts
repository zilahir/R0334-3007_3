import apiClient, { apiEndpoints } from "../api/apiClient";
import { NewEmail } from "../screens/Compose";

export function useEmail() {

    async function getEmail() {
        const apiResult = await apiClient.get(apiEndpoints.getAllEmails)
        return apiResult.data
    }

    async function sendEmail(emailBody: NewEmail) {
        const apiResult = await apiClient.post(apiEndpoints.sendNewEmail, {
            ...emailBody,
            sender: "zilahi@gmail.com",
            sentAt: new Date().getTime()
        })

        return apiResult.data
    }

    return {getEmail, sendEmail}
}