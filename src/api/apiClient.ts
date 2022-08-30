import axios from "axios"

const API_ROOT = {
    production: undefined,
    dev: "http://localhost:4000"
}

export const apiEndpoints = {
    getAllEmails: "/email/all",
    sendNewEmail: "/email",
    getOneEmailById: "/email"
}

const apiClient = axios.create({
    baseURL: API_ROOT["dev"],
    withCredentials: false,
})

export default apiClient