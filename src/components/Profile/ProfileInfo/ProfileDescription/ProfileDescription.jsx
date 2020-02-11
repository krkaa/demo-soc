import React from 'react';
import s from './../ProfileInfo.module.sass';
import lookingJob from '../../../../assets/images/lookingJob.png';
import working from '../../../../assets/images/working.png';
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileDescription = ({profile, goToEditMode, isOwner}) => {
    return (
                <div>
                    {isOwner && <button onClick={goToEditMode}>Edit Profile</button>}
                    <div className={s.lookJob}>
                        {profile.lookingForAJob
                            ?
                            <div>
                                <p><b>Статус поиска:</b> <img src={lookingJob}/></p>
                                <p><b>Профессиональные навыки:</b> {profile.lookingForAJobDescription}</p>
                            </div>
                            :
                            <div>
                                <p><b>Статус занятости:</b> <img src={working}/></p>

                            </div>}
                    </div>
                    <div>
                        <span><b>Обо мне:</b> {profile.aboutMe}</span>
                    </div>
                    <p><b>Контакты:</b></p>
                    <ul>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                    </ul>
                </div>
    );
};

const Contacts = ({contactTitle, contactValue}) => {
  return <li><b>{contactTitle}:</b> {contactValue}</li>
};



export default ProfileDescription;