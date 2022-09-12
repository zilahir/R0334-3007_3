import axios from "axios"

const API_ROOT = {
    production: process.env.REACT_APP_PRODUCTION_API,
    dev: "http://localhost:4000"
}

export const apiEndpoints = {
    getAllEmails: "/email/all",
    sendNewEmail: "/email",
    getOneEmailById: "/email",
    generateRandomIncomingEmail: "/email/incoming",
    markEmailAsRead: "/email"
}

const apiClient = axios.create({
    baseURL: API_ROOT["production"],
    withCredentials: false,
})

export default apiClient