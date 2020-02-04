import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'da5781ad-702b-4622-a264-735f8ee37ce3'
    }
});

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users/?page=${page}&count=${count}`)
            .then(response => {
                return response.data;
            })
    },
    deleteFollowUsers(id) {
        return instance.delete(`follow/`+id)
            .then(response => {
                return response.data;
            })
    },
    postFollowUsers(id) {
        return instance.post(`follow/`+id)
            .then(response => {
                return response.data;
            })
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI');
        return profileAPI.getUserProfile(userId)
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/`+userId)
            .then( response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }

};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then( response => {
                return response.data;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
};