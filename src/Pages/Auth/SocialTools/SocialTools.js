import React from 'react';
import "./SocialTools.scss"
import { FaFacebookF, FaGoogle } from "react-icons/fa"


const SocialTools = () => {
    return (
        <div className="social-tools">
            <div className="facebook tool">
                <div className="icon">
                    <FaFacebookF />
                </div>
                <span>Facebook ilə</span>
            </div>
            <div className="google tool">
                <div className="icon">
                    <FaGoogle />
                </div>
                <span>Google ilə</span>
            </div>
        </div>
    )
}

export default SocialTools