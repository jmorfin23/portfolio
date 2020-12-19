import React from 'react'; 
import { Button } from '../../component/Ui/button';
import './index.css'; 
import data from '../../resume.json'; 

// Showcasing my resume 
export const Resume = () => {
    const { side_1, side_2 } = data; 
    return(
        <div className="view-content fw-200">
            <div className="padding-xl">
                <div className="text-centered">
                    <h1 className="fs-25">Resume</h1>
                    <div className="resume-btns margin-top-xl">
                        <Button className="mr-05" type="button">Download PDF</Button>
                        <Button type="button">Print</Button>
                    </div>
                </div>
                <div>
                    <div className="resume-container margin-xl">
                        <div className="resume-1 pr-3">
                            
                            <h3 className="margin-bot-md">{side_1.title}</h3>
                            {side_1.job.map((job, index) => (
                                <div key={index} className="margin-bot-md">
                                    <p className="margin-bot-xsm">{job.date}</p>
                                    <h4>{job.company}</h4>
                                    <p className="margin-bot-xsm">{job.title}</p>
                                    <p>{job.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="resume-2 pl-3">
                            {side_2.map((section, index) => (
                                <div key={index} className="margin-bot-md">
                                    <h3 className={section.category === "Education" ? "margin-bot-md" : "margin-bot-xsm"}>{section.category}</h3>
                                    {section.details.map((value, index) => (
                                        <p key={index}>{value}</p>
                                    ))}
                                </div>
                            ))
                            }  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; 