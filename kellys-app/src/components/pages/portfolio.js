import React from 'react';
import Navigation from '../shared/navigation';
import Sidebar from '../shared/sidebar.js'

import '../../css/portfolio.css'

import Zoe1 from '../../images/PortfolioImages/Zoe/Zoe1.jpg'
import Zoe2 from '../../images/PortfolioImages/Zoe/Zoe2.jpg'
import Zoe3 from '../../images/PortfolioImages/Zoe/Zoe3.jpg'
import Zoe4 from '../../images/PortfolioImages/Zoe/Zoe4.jpg'
import Zoe5 from '../../images/PortfolioImages/Zoe/Zoe5.jpg'
import Zoe6 from '../../images/PortfolioImages/Zoe/Zoe6.jpg'

import Cottage from '../../images/PortfolioImages/Personal/Cottage.jpg'
import FallenTree from '../../images/PortfolioImages/Personal/FallenTree.jpg'
import FarmMeadow from '../../images/PortfolioImages/Personal/FarmMeadow.jpg'
import OldManRiver from '../../images/PortfolioImages/Personal/OldManRiver.jpg'
import SafetyFirst from '../../images/PortfolioImages/Personal/SafetyFirst.jpg'
import Storm from '../../images/PortfolioImages/Personal/Storm.jpg'

import Paddlenaut from '../../images/PortfolioImages/Projects/Paddlenaut.png'
 
const Portfolio = () => {
    return (
        <div id="outer-container">
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main className="containerColumn" id="page-wrap">
                <h4 id="PortfolioIntro1">I mainly take photos of my dog...</h4>
                <section className="containerRowWrap" id="PortfolioImages1">
                    <figure className='galleryImage' >
                        <img src={Zoe1} alt="Zoe sitting nicely after grooming" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">First groom</p>
                            <p class="overlayText">Zoe sitting nicely after grooming</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Zoe3} alt="Zoe with her cone on after surgery" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Not sure about this...</p>
                            <p class="overlayText">Zoe with her cone on after surgery</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Zoe2} alt="Zoe sleeping on the floor" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Here's good...</p>
                            <p class="overlayText">Zoe sleeping on the floor</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Zoe4} alt="Zoe staring out the window" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Maybe a squirrel!</p>
                            <p class="overlayText">Zoe staring out the window</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Zoe5} alt="Zoe wearing a hat" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Sgt. Pupperson</p>
                            <p class="overlayText">Zoe wearing a hat</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Zoe6} alt="Zoe smiling in her sleep" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Nap time!</p>
                            <p class="overlayText">Zoe smiling in her sleep</p>
                        </figcaption>
                    </figure>
                </section>
                <h4 id="PortfolioIntro2">...but sometimes I just take photos...</h4>   
                <section className="containerRowWrap" id="PortfolioImages2">
                    <figure className='galleryImage' >
                        <img src={SafetyFirst} alt="Buckets buckled in" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Safety first!</p>
                            <p class="overlayText">Buckets buckled in</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Storm} alt="Inclement weather" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Inclement weather</p>
                            <p class="overlayText">Those are some freaky storm clouds</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={Cottage} alt="Cottage views" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Cottage views</p>
                            <p class="overlayText">Ontario is something special</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={FallenTree} alt="Tree fallen in the storm" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Strong winds</p>
                            <p class="overlayText">No-one got hurt!</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={FarmMeadow} alt="A beautiful meadow sunset" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">The great outdoors</p>
                            <p class="overlayText">A beautiful meadow sunset</p>
                        </figcaption>
                    </figure>
                    <figure className='galleryImage' >
                        <img src={OldManRiver} alt="Snapping turtle taking a snooze" />
                        <figcaption class="galleryImageOverlay">
                            <p class="overlayText boldText">Wildlife</p>
                            <p class="overlayText">Snapping turtle taking a snooze</p>
                        </figcaption>
                    </figure>
                </section>
                <h4 id="PortfolioIntro3">...and sometimes I do some projects</h4>
                <section className="containerColumn">
                    <p>My git repository can be found <a href="https://github.com/whitek9/">here</a>, but below are some highlights</p>
                    <div className="containerRowWrap" id="PortfolioProjects">
                        <a href="paddlenautPlaceholder" target='_blank' rel="noopener noreferrer" >
                            <img src={Paddlenaut} alt="Paddlenaut Logo" title="https://paddlenaut.ca" width={300} height={80} />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
 
export default Portfolio;