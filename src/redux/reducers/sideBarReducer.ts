import {v1} from "uuid";
export type sideBarType = {
    friends:FriendType[]
}
export type FriendType = {
    id:string,
    name:string,
    image:string
}

let initialState = {
    friends: [
        {
            id: v1(),
            name: "Andrey",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        },
        {
            id: v1(),
            name: "Nikita",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYgNustl20NFNjj7Xq1zGpgiggXi7zJQX97Ie5Tnk_7jN-qWo4djL8b45bsaG6zwEa470dk9w5QPfRw&usqp=CAU"
        },
        {
            id: v1(),
            name: "Valera",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYgNustl20NFNjj7Xq1zGpgiggXi7zJQX97Ie5Tnk_7jN-qWo4djL8b45bsaG6zwEa470dk9w5QPfRw&usqp=CAU"
        },
        {
            id: v1(),
            name: "Iryna",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        },
    ]
}
type initialStateType = typeof initialState

export  const sideBarReducer = (state:initialStateType = initialState, action:any):initialStateType=>{
    return {...state};
}
