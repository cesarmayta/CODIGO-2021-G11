import axios from 'axios';

const API_AUTH = "http://localhost:8000/"

class AuthService {
    login(username,password){
        return axios
        .post(API_AUTH + "login",{
            username,
            password
        })
        .then(res =>{
            if(res.data.token){
                localStorage.setItem("user",JSON.stringify(res.data));
            }
            
            return res.data;
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }
}

export default new AuthService();