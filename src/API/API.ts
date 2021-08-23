import axios from "axios";


const instanse = axios.create({
    withCredentials:true,
    headers:{
        'API-KEY':'7f064d6f-0e95-4a00-bf15-758745807f1a'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers_API : (currentPage:number, pageSize:number)=> {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //аналогия к response=>{ return response.data}
    },
    follow:(userId:number)=>{
      return  instanse.post(`follow/${userId}`, {})
    },
    unfollow:(userId:number)=>{
        return  instanse.delete(`follow/${userId}`)
    },
    getProfile:(userId:string) => {
        return instanse.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me:()=>{
        return instanse.get('auth/me')
    }
}
