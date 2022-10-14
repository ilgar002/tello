import React from 'react'
import "./UserProfile.scss"
import { useParams } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import UserInfo from './Dashboard/UserInfo/UserInfo'


const UserProfile = () => {
    const { tab } = useParams()

    return (
        <div className='userProfile'>
            <div className="container">
                <div className="s-container">
                    <Dashboard tab={tab} />
                    {tab === 'user-info' && <UserInfo />}
                </div>
            </div>
        </div>
    )
}

export default UserProfile