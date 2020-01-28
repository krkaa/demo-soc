import React from 'react';
import s from './ProfileInfo.module.sass';
import Preloader from "../../../common/Preloader/Preloader";
import lookingJob from '../../../assets/images/lookingJob.png';
import working from '../../../assets/images/working.png';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileImg}>
                <img src="https://www.freewebheaders.com/wp-content/gallery/mountains-snow/snow-mountains-blue-sky-and-lake-panoramic-web-header-.jpg"/>
            </div>
            <div className={s.mainInfo}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={s.description}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div className={s.lookJob}>
                        {props.profile.lookingForAJob
                            ?
                            <div>
                                <p>Статус поиска: {props.profile.lookingForAJobDescription}</p>
                                <img src={lookingJob}/>
                            </div>
                            :
                            <div>
                                <p>Статус:</p>
                                <img src={working}/>
                            </div>}
                    </div>
                    <p>Контакты:</p>
                    <ul>
                        <li>facebook: {props.profile.contacts.facebook}</li>
                        <li>website: {props.profile.contacts.website}</li>
                        <li>vk: {props.profile.contacts.vk}</li>
                        <li>twitter: {props.profile.contacts.twitter}</li>
                        <li>instagram: {props.profile.contacts.instagram}</li>
                        <li>youtube: {props.profile.contacts.youtube}</li>
                        <li>github: {props.profile.contacts.github}</li>
                        <li>mainLink: {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;