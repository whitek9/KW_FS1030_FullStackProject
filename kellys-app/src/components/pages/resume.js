import React, { useState } from 'react'
import Navigation from '../shared/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from '../shared/sidebar.js'

import '../../css/resume.css';
import SIMPLIILogo from '../../images/icons/simplii-financial.png'
import TDLogo from '../../images/icons/TD-icon.png'
import PEPSICOLogo from '../../images/icons/pepsico-symbol.png'
import YORKLogo from '../../images/icons/york-logo.jpg'
import MCMASTERLogo from '../../images/icons/mcmaster-logo.png'
import WATERLOOLogo from '../../images/icons/waterloo-logo.png'
import CIBCLogo from '../../images/icons/cibc-logo.jpg'
 
const Resume = () => {

    // Arrows for hiding job description content
    const [simpliiArrow, setSimpliiArrow] = useState(true)
    const [tdArrow, setTDArrow] = useState(true)
    const [pepsiArrow, setPepsiArrow] = useState(true)
    const [yorkArrow, setYorkArrow] = useState(true)
    const [macArrow, setMacArrow] = useState(true)
    const [waterlooArrow, setWaterlooArrow] = useState(true)
    const [macVolArrow, setMacVolArrow] = useState(true)
    const [CIBCArrow, setCIBCArrow] = useState(true)


    // Collapsible job description content
    const [simplii, setSimplii] = useState(true)
    const [tdInfo, setTDInfo] = useState(true)
    const [pepsiInfo, setPepsiInfo] = useState(true)
    const [yorkInfo, setYorkInfo] = useState(true)
    const [macInfo, setMacInfo] = useState(true)
    const [waterlooInfo, setWaterlooInfo] = useState(true)
    const [macVolInfo, setMacVolInfo] = useState(true)
    const [CIBCInfo, setCIBCInfo] = useState(true)

       
    
    return (
        <div id='outer-container'>
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main className="containerColumn" id='page-wrap'>
                <section className='containerColumnLeft' id='WorkExperience'>
                    <h4>WORK EXPERIENCE</h4>
                    <div className='containerRow'>
                        <img src={SIMPLIILogo} alt ='Simplii Logo' height='auto' width='65px' />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Consultant - Simplii Financial</h5>
                            <p className="subtitle">Canadian Imperial Bank of Commerce, Toronto ON, January 2018-Present</p>
                        </div>
                        <span 
                            className={simpliiArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setSimplii(!simplii)
                                setSimpliiArrow(!simpliiArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={simplii ? "experienceListHidden" : 'experienceList'} id="simpliiExperience">
                        <li>Leading project teams to deliver products end to end such as online Mutual Fund Applications, online sales ad spots, in-app messaging personalization, and account nicknaming</li>
                        <li>Launched two-factor authentication capability as product consultant and business SME working collaboratively as part of a digital agile delivery pod with stakeholders across business groups</li>
                        <li>Working closely with Simplii and Digital analytics teams to aggregate Voice of the Customer and market data to drive recommendations and monitor success of initiatives and products</li>
                        <li>Setting the strategic roadmap and developing operational, communication, product, and client strategies for Simplii Financial in collaboration with internal Simplii division leaders</li>
                        <li>Contracting and facilitating vendor assessments for future strategic partnerships</li>
                    </ul>
                    <div className="containerRow">
                        <img src={TDLogo} alt='TD Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Product Manager - Mobile Utility Capabilities</h5>
                            <p className="subtitle">TD Bank Financial Group, Toronto ON, September 2016-December 2017</p>
                        </div>
                        <span 
                            className={tdArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setTDInfo(!tdInfo)
                                setTDArrow(!tdArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={tdInfo ? "experienceListHidden" : 'experienceList'} id="TDExperience">
                        <li>Led SDK discovery testing with vendor and internal development teams for integration feasibility</li> 
                        <li>Managed business casing cost modelling to secure project funding in collaboration with other direct channels teams, finance, and technology partners</li>
                        <li>Collaborated with Legal, Vendor Management, and Product teams to draft work orders, statements of work, service level agreements, and master service agreements for external vendor solution engagements</li>
                        <li>Created a dashboard to track app download, registration, usage, and engagement statistics for day 2 delivery roadmap prioritization</li>
                        <li>Facilitated brainstorming sessions, market research proposals, and development of business cases for monetization of key digital assets with multiple internal stakeholders</li>
                    </ul>
                    <div className="containerRow">
                        <img src={PEPSICOLogo} alt='PepsiCo Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Supply Chain Analyst - Demand Planning</h5>
                            <p className="subtitle">PepsiCo Beverages Canada, Mississauga ON, January 2016-April 2016</p>
                        </div>
                        <span 
                            className={pepsiArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setPepsiInfo(!pepsiInfo)
                                setPepsiArrow(!pepsiArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={pepsiInfo ? "experienceListHidden" : 'experienceList'} id="pepsiExperience">
                        <li>Presented results of post-game analysis to see an across the board increase in KPI’s and influence purchase order and warehousing decision making</li>
                        <li>Led meetings with key stakeholders including operations and department heads for franchise owned bottling operations to communicate outcomes of internal analyses</li>
                        <li>Used advanced Excel skills including macros and VBA to make improvements to reporting tools for the department in addition to creating a custom post-game analytic tool for selling partners</li>
                    </ul>
                </section>    
                <section className="containerColumnLeft" id="Education">
                    <h4>Education</h4>
                    <div className="containerRow">
                        <img src={YORKLogo} alt='York Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Certificate in Full Stack Web Development, 2021</h5>
                            <p className="subtitle">York University, Toronto, ON</p>
                        </div>
                        <span 
                            className={yorkArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setYorkInfo(!yorkInfo)
                                setYorkArrow(!yorkArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={yorkInfo ? "experienceListHidden" : 'experienceList'}>
                        <li><a href='https://continue.yorku.ca/programs/certificate-in-full-stack-web-development/'>Check out the program here</a></li>
                    </ul>
                    <div className="containerRow">
                        <img src={MCMASTERLogo} alt='McMaster Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Valedictorian, Master of Business Administration, Co-op, 2017</h5>
                            <p className="subtitle">DeGroote School of Business, McMaster University, Burlington ON</p>
                        </div>
                        <span 
                            className={macArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setMacInfo(!macInfo)
                                setMacArrow(!macArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={macInfo ? "experienceListHidden" : 'experienceList'}>
                        <li>Minor in Management of Innovation and New Technology (MINT)</li>
                        <li>President &amp; Director of Academics, MBA Association</li>
                        <li>GMAT Entrance Scholarship for achieving a score of 700, 2015</li>
                    </ul>
                    <div className="containerRow">
                        <img src={WATERLOOLogo} alt='Waterloo Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Honours Bachelor of Knowledge Integration, 2014</h5>
                            <p className="subtitle">University of Waterloo, Waterloo, ON</p>
                        </div>
                        <span 
                            className={waterlooArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setWaterlooInfo(!waterlooInfo)
                                setWaterlooArrow(!waterlooArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={waterlooInfo ? "experienceListHidden" : 'experienceList'}>
                        <li>Specialization in Collaborative Design</li>
                        <li>Director of Innovation, Knowledge Integration Student Society, 2013</li>
                    </ul>
                </section>
                <section className="containerColumnLeft" id="VolunteerExperience">
                    <h4>Volunteer Experience</h4>
                    <div className="containerRow">
                        <img src={CIBCLogo} alt='CIBC Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">Digital Community Network</h5>
                            <p className="subtitle">CIBC Digital, CIBC Capital Markets &amp; Simplii Direct Banking, Toronto, ON</p>
                        </div>
                        <span 
                            className={CIBCArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setCIBCInfo(!CIBCInfo)
                                setCIBCArrow(!CIBCArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={CIBCInfo ? "experienceListHidden" : 'experienceList'}>
                        <li>Organizing events for CIBC Digital and Direct employees to give back to the community including: Meals on Wheels deliveries, Habitat for Humanity initiatives, and visiting with the Toronto Humane Society as pet volunteers</li>
                    </ul>
                    <div className="containerRow">
                        <img src={MCMASTERLogo} alt='McMaster Logo' height="auto" width="65px" />
                        <div className="containerColumnLeftTitle">
                            <h5 className="h5Left">DeGroote Leader and Mentor</h5>
                            <p className="subtitle">DeGroote Leadership Development Program, McMaster University, Burlington ON</p>
                        </div>
                        <span 
                            className={macVolArrow ? 'clickableTitleClicked' : 'clickableTitle'}
                            onClick = {() => {
                                setMacVolInfo(!macVolInfo)
                                setMacVolArrow(!macVolArrow)
                            }}>
                            <FontAwesomeIcon icon='arrow-right'/>    
                        </span>
                    </div>
                    <ul className={macVolInfo ? "experienceListHidden" : 'experienceList'}>
                        <li>Provided ongoing personal and professional mentorship to students after the onboarding program to set them up for success in their academics and entry into the job market</li>
                        <li>As an alumnus, organized Gold Sponsorship from CIBC, wrote the finals case, and led the executive judging panel for the 4th annual DeGroote Case Competition in November of 2018</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
 
export default Resume;