import React from "react";
import p from '../Profile.module.css';
import {profileType} from "../../../redux/reducers/profileReducer";
import Preloader from "../../common/Preloader";

type PropsType = {
    profileInfo: profileType
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    let noPhotoURL = 'https://st4.depositphotos.com/7323516/23928/i/600/depositphotos_239287058-stock-photo-a-sign-can-not-be.jpg'
    if(!Object.keys(props.profileInfo).length){
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
                            мне:</b>{props.profileInfo.aboutMe ? props.profileInfo.aboutMe : ' Нет информации'}</p>
                        <p>
                            <b>Контакты:</b>{props.profileInfo.contacts.vk ? props.profileInfo.contacts.vk : ' Нет контактов'}
                        </p>
                    </div>

                </div>
        </div>
    )
}
