import {v1} from "uuid";
import {addPostActionCreator, profileReducer, profileType, setUserStatus} from "../redux/reducers/profileReducer";

test('add post test', ()=>{
    let initialState = {
        posts: [
            {
                name: "Pavel",
                fam: "Kononov",
                avaLink: "https://sun9-88.userapi.com/impf/c855420/v855420426/49c7a/Wv5Up076q58.jpg?size=1080x1620&quality=96&sign=9d3c1952ef7c34a24f0e84d6887d4c28&type=album",
                id: v1(),
                likesCount: 20,
                message: "This is first message"
            },
            {
                name: "Pavel",
                fam: "Kononov",
                avaLink: "https://sun9-88.userapi.com/impf/c855420/v855420426/49c7a/Wv5Up076q58.jpg?size=1080x1620&quality=96&sign=9d3c1952ef7c34a24f0e84d6887d4c28&type=album",
                id: v1(),
                likesCount: 10,
                message: "This is second message"
            }
        ],
        profile: {} as profileType,
        status: ''
    }

    let actionPost = addPostActionCreator('new post Text')
    let newStatePosts= profileReducer(initialState, actionPost)

    expect(newStatePosts.posts.length).toBe(3)
    expect(initialState.posts.length).toBe(2)



    let actionStatus = setUserStatus('newStatus')
    let newStateStatus = profileReducer(initialState,actionStatus )

    expect(newStateStatus.status).toBe('newStatus')
    expect(initialState.status.length).toBe(0)
})
