import React, { useState, useEffect } from 'react';
import Navigation from '../shared/navigation';
import Sidebar from '../shared/sidebar.js'

import '../../css/portfolio.css'

const Portfolio = () => {

    const [submission, setSubmission] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/portfolio/items', {
                method: 'GET',
                headers: {

                }
            })
            const data = await response.json()
            setSubmission(data)
        }
        getData()
    }, [])

    return (
        <div id="outer-container">
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main className="containerColumn" id="page-wrap">
                <h4 id="PortfolioIntro1">I mainly take photos of my dog...</h4>
                {submission.length > 0 && submission.map(entry => 
                    <div>
                        <figure className='galleryImage' >
                            <img src={entry.image} alt={entry.description} />
                            <figcaption class="galleryImageOverlay">
                                <p class="overlayText boldText">{entry.title}</p>
                                <p class="overlayText">{entry.url}</p>
                            </figcaption>
                        </figure>
                    </div>  
                )}
            </main>
        </div>
    );
}
 
export default Portfolio;