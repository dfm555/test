import React from 'react'
import {string} from 'prop-types'
import './style.less'

const SocialButtons = () => {
    return <div className='SocialButtons' data-test='SocialButtons'>
        <div className="SocialButtons-container">
            <div className="SocialButtons-button"><i className="fab fa-facebook-f"/></div>
            <div className="SocialButtons-button"><i className="fab fa-twitter"/></div>
            <div className="SocialButtons-button"><i className="fab fa-whatsapp"/></div>
        </div>
    </div>
}

SocialButtons.propTypes = {
    facebookLink: string.isRequired,
    twitterLink: string.isRequired,
    whatsappLink: string.isRequired,
}

export default SocialButtons
