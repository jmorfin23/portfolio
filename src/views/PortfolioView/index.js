import React from 'react'; 
import './index.css';
import { Card } from '../../component/card'; 
import projects_json from '../../portfolio.json'; 
import { HireMe } from '../../component/hire-me';

export const PortfolioView = () => {
    return(
        <div className="view-content">
                <section className="portfolio-heading text-centered padding-3">
                    <div className="padding-3">
                        <h1 className="fs-25">Portfolio</h1>
                        <p className="mt-1 fw-200">
                            Thank you for checking out my online portfolio. Here are some of the projects I&apos;ve worked on 
                            so feel free to browse and check them out online or on github!
                        </p>
                        <HireMe className="hire-green" /> 
                    </div>
                </section>
                <section className="portfolio-container padding-3">
                    <div className="card-container">
                        {projects_json && 
                            projects_json.projects.map((project, index) => (
                                <Card key={index} json={project}/> 
                            ))
                        }
                    </div>
                </section>
        </div>
    )
};