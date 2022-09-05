import { useState } from "react";
import apiClient, { apiEndpoints } from "../api/apiClient";
import { NewEmail } from "../screens/Compose";

export function useEmail() {

    const [isLoading, toggleLoading] = useState<boolean>(false);
    async function getEmail() {
        toggleLoading(true)
        const apiResult = await apiClient.get(apiEndpoints.getAllEmails)
        toggleLoading(false)
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

    return {getEmail, sendEmail, isLoading}
}