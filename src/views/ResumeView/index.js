import React from 'react'; 
import { Button } from '../../component/Ui/button';
import './index.css'; 
import { Resume } from '../../component/resume';
import resume from '../../resume.json'; 

// Showcasing my resume 
export const ResumeView = () => {
    return(
        <div className="view-content fw-200">
            <div className="padding-xl">
                <div className="text-centered">
                    <h1 className="fs-25">Resume</h1>
                    <div className="resume-btns margin-top-xl">
                        <a href='/jonmorfin-resume.pdf' download><Button type="button"><i className="mr-05 fas fa-file-pdf"></i>Download PDF</Button></a>
                    </div>
                </div>
                <div>
                    <Resume resume={resume} /> 
                </div>
            </div>
        </div>
    )
}; 