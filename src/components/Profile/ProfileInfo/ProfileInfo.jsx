import React, {useState} from 'react';
import s from './ProfileInfo.module.sass';
import Preloader from "../../../common/Preloader/Preloader";
import UserImg from "../../../common/UserImg/UserImg";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {ProfileDescriptionFormRedux} from "./ProfileDescription/ProfileDescriptionForm";
import ProfileStatusWithHook from "./ProfileDescription/ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfileData}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSavePhoto = (e) => {
        if (e.target.files.length != 0) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmitProfileData = (dataForm) => {saveProfileData(dataForm).then(() => {setEditMode(false)});};

    return (
        <div>
            <div className={s.profileImg}>
                <img
                    src="https://www.panosphotographia.com/wp-content/uploads/2019/01/Syrp-BTS-Greek-Skies-II-134-1024x557-1024x200.jpg"/>
            </div>
            <div className={s.mainInfo}>
                <div className={s.avatar}>
                    <UserImg userImg={profile.photos.large}/>
                    {isOwner && <input type={"file"} onChange={onSavePhoto}/>}
                </div>
                <div className={s.description}>
                    <h2>{profile.fullName}</h2>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                    {editMode
                        ? <ProfileDescriptionFormRedux initialValues={profile}
                                                       profile={profile}
                                                       onSubmit={onSubmitProfileData}/>
                        : <ProfileDescription goToEditMode={() => {setEditMode(true)}}
                                              profile={profile}
                                              isOwner={isOwner}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;