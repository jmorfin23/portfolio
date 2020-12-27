import React from 'react'; 
import { Button } from '../../component/Ui/button';
import './index.css'; 
import { Resume } from '../../component/resume'; 
import { HireMe } from '../../component/hire-me'; 
import resume_json from '../../resume.json';

// Showcasing my resume 
export const ResumeView = () => {
    return(
        <>
            <div className="padding-3">
                <section className="text-centered">
                    <h1 className="fs-25">Resume</h1>
                    <div className="resume-btns mt-3">
                        <a href='/jonmorfin-resume.pdf' download><Button type="button"><i className="mr-05 fas fa-file-pdf"></i>Download PDF</Button></a>
                    </div>
                </section>
                <section>
                    <Resume resume={resume_json} /> 
                </section>
                <HireMe className="resume-hire-green"/> 
            </div>
        </>
    )
}; 