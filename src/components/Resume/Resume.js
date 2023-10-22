
/**
 * @file the resume of homepage
 * @author jingxiangzheng
 */

import React from 'react';
import logo from '../../assets/logo.jpg';
import './Resume.css';
import i18next from 'i18next';

class _Resume extends React.Component {
    render() {
        return <div className='resume-container'>
            <img className='m-t-2 logo' src={logo} alt='logo'/>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>
                {i18next.t('Education')} 
            </h4>
            <p className='animate__animated'>
                {i18next.t('BEng in Xiamen University')}
                <br/>
                {i18next.t('PGCInfoTech in The University of Auckland')}
            </p>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>
                {i18next.t('Work Experience')}
            </h4>
            {i18next.t('5+ years experience in software engineering')}<br/>
            {i18next.t('Intermediate Full Stack Developer in Joyous')}<br/>
            {i18next.t('Senior Front End Developer in Baidu.com')}<br/>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>
                {i18next.t('Projects')}
            </h4>
        </div>;
    }
}
export default _Resume;

