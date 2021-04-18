import React from 'react';
import '../../css/home.css';

import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (
        <main className="containerColumn">
            <section className="homeTitle">
                <h1>KELLY S. WHITE</h1>
            </section>
            <section id="about">
                <nav className="homeNavigation sticky">
                    <ul>
                        <li> <a href="#about">ABOUT</a> </li>
                        <li> <NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                        <li> <NavLink to="/resume">RÉSUMÉ</NavLink></li>
                        <li> <NavLink to="/contact">CONTACT</NavLink> </li>
                        <li> <NavLink to="/login">LOGIN</NavLink></li>
                    </ul>
                </nav>
                <h2>About me</h2>
                <p>At heart, I'm a creator. By training, I make my impact at the intersection of people and technology. I'm an ambitious problem solver with a hunger for progress and a passion for learning. With my diverse knowledge set, I work best when I'm making connections between users, stakeholders, and developers. Whether it's Design Thinking, Creative Problem Solving, or "the process", I believe the key to life is to never stop improving.</p>
                <p>I'm really just a guy that loves "doing" - it's why I'm working on becoming a full stack web developer, why I love spending time outdoors and working with my hands, and why I love rolling up my sleeves and getting lost in a task. The world is big and there are a lot of experiences out there that I can't wait to try. I'm always looking for a great way to make something that makes an impact!</p>
            </section>
        </main>
    );
}
 
export default home;