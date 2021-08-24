import React, {ChangeEvent, useEffect, useState} from "react";
import p from '../Profile.module.css';
import {profileType} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader";


type PropsType = {
    profileInfo: profileType,
    status: string,
    updateStatus: (value: string) => void
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    let noPhotoURL = 'https://st4.depositphotos.com/7323516/23928/i/600/depositphotos_239287058-stock-photo-a-sign-can-not-be.jpg'

    let [edit, setEdit] = useState(false)
    let [status, setStatus] = useState('')


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const changeStatus = () => {
        setEdit(false);
        props.updateStatus(status)
        setStatus(status)
    }

    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status)
        }
    }, [props.status])

    if (!Object.keys(props.profileInfo).length) {
        return <div><Preloader/></div>
    }

    return (
        <div>
            <div className={p.bgImg}>
                {props.profileInfo.photos.large ?
                    <img src={props.profileInfo.photos.large} alt=""/> :
                    <img src={noPhotoURL} alt=""/>}
            </div>

            <div className={p.gridTemplate}>

                <div className={p.ava}>
                    {props.profileInfo.photos.small ?
                        <img src={props.profileInfo.photos.small} alt="" width={174} height={150}/> :
                        <img src={noPhotoURL} alt="" width={174} height={150}/>}
                </div>

                <div className={p.mySelf}>
                    <p className={p.nameFemale}>
                        <b>Имя:</b>{props.profileInfo.fullName ? props.profileInfo.fullName : 'Аноним'}</p>
                    <p><b>Информация обо
                        мне:</b>
                        {
                            !edit
                                ? <span
                                    onClick={() => setEdit(true)}
                                >{props.status ? props.status : ' Нет информации о статусе'}
                            </span>
                                : <input
                                    type="text"
                                    style={{width: '300px', outline: 'none', fontSize: '20px'}}
                                    onBlur={changeStatus}
                                    value={status}
                                    onChange={onChangeHandler}
                                />
                        }
                    </p>
                    <p>
                        <b>Контакты:</b>{props.profileInfo.contacts.vk ? props.profileInfo.contacts.vk : ' Нет контактов'}
                    </p>
                </div>

            </div>
        </div>
    )
}
