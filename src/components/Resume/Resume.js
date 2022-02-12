
/**
 * @file the resume of homepage
 * @author jingxiangzheng
 */

import React from 'react';
import logo from '../../assets/logo.jpg';
import './Resume.css';

class _Resume extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div className='resume-container'>
            <img className='m-t-2 logo' src={logo}/>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Education</h4>
            <p className='animate__animated'>
                BEng in Xiamen University (985, 211)<br/>
                MIT in The University of Auckland (QS 82)
            </p>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Work Experience</h4>
                The Software Expert in Baidu.com<br/>
                6 years of front-end experience<br/>
            <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Collections</h4>
        </div>;
    }
}
export default _Resume;

