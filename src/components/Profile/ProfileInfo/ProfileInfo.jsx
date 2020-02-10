import React from 'react';
import s from './ProfileInfo.module.sass';
import Preloader from "../../../common/Preloader/Preloader";
import lookingJob from '../../../assets/images/lookingJob.png';
import working from '../../../assets/images/working.png';
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import UserImg from "../../../common/UserImg/UserImg";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileImg}>
                <img src="https://www.panosphotographia.com/wp-content/uploads/2019/01/Syrp-BTS-Greek-Skies-II-134-1024x557-1024x200.jpg"/>
            </div>
            <div className={s.mainInfo}>
                <div className={s.avatar}>
                    <UserImg userImg={profile.photos.large} />
                </div>
                <div className={s.description}>
                    <h2>{profile.fullName}</h2>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                    <div className={s.lookJob}>
                        {profile.lookingForAJob
                            ?
                            <div>
                                <p>Статус поиска: {profile.lookingForAJobDescription}</p>
                                <img src={lookingJob}/>
                            </div>
                            :
                            <div>
                                <p>Статус занятости:</p>
                                <img src={working}/>
                            </div>}
                    </div>
                    <p>Контакты:</p>
                    <ul>
                        <li>facebook: {profile.contacts.facebook}</li>
                        <li>website: {profile.contacts.website}</li>
                        <li>vk: {profile.contacts.vk}</li>
                        <li>twitter: {profile.contacts.twitter}</li>
                        <li>instagram: {profile.contacts.instagram}</li>
                        <li>youtube: {profile.contacts.youtube}</li>
                        <li>github: {profile.contacts.github}</li>
                        <li>mainLink: {profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;