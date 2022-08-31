import apiClient, { apiEndpoints } from "../api/apiClient";

export function useEmail() {

    async function getEmail() {
        const apiResult = await apiClient.get(apiEndpoints.getAllEmails)
        return apiResult.data
    }

    return {getEmail}
}