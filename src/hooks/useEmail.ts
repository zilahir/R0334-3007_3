import { useState } from "react";
import apiClient, { apiEndpoints } from "../api/apiClient";
import { EmailType, NewEmail } from "../screens/Compose";

export function useEmail() {

    const [isLoading, toggleLoading] = useState<boolean>(false);
    async function getEmail(type: string) {
        toggleLoading(true)
        const apiResult = await apiClient.get(`${apiEndpoints.getAllEmails}/${type}`)
        toggleLoading(false)
        return apiResult.data
    }

    async function sendEmail(emailBody: NewEmail) {
        const apiResult = await apiClient.post(apiEndpoints.sendNewEmail, {
            ...emailBody,
            sender: "zilahi@gmail.com",
            sentAt: new Date().getTime(),
            emailType: EmailType.OUTGOING
        })

        return apiResult.data
    }

    async function randomIncomingEmail() {
        const apiResult = await apiClient.post(apiEndpoints.generateRandomIncomingEmail);
        return apiResult.data;
    }

    async function markEmailAsReadById(id: string) {
        const apiResult = await apiClient.post(`${apiEndpoints.markEmailAsRead}/${id}`)
        return apiResult.data;
    }

    return {getEmail, sendEmail, isLoading, randomIncomingEmail, markEmailAsReadById}
}