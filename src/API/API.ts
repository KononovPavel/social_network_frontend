import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instanse = axios.create({
    withCredentials:true,
    headers:{
        'API-KEY':'7f064d6f-0e95-4a00-bf15-758745807f1a'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers_API : (currentPage:number, pageSize:number)=> {
        return axios.get(baseURL +`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            }).then(response => response.data) //аналогия к response=>{ return response.data}
    },
    follow:(userId:number)=>{
      return  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': '7f064d6f-0e95-4a00-bf15-758745807f1a'}
        })
    },
    unfollow:(userId:number)=>{
        return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {'API-KEY': '7f064d6f-0e95-4a00-bf15-758745807f1a'}
        })
    }
}
