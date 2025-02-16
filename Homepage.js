import React, { useEffect, useRef } from 'react';
import './Homepage.css';

function Home() {
    const descriptionRef = useRef(null);
    const topRef = useRef(null);
    // const dashboardRef = useRef(null);
    // const overlayRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const middleY = window.innerHeight / 2;
            if (event.clientY > middleY) {
                descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
            } else if (event.clientY < middleY) {
                topRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // const openDashboard = (e) => {
    //     e.preventDefault();
    //     dashboardRef.current.style.display = 'flex';
    //     overlayRef.current.style.display = 'block';
    //     document.body.classList.add('no-scroll');  // Add the class to prevent scrolling
    // };

    // const closeDashboard = () => {
    //     dashboardRef.current.style.display = 'none';
    //     overlayRef.current.style.display = 'none';
    //     document.body.classList.remove('no-scroll');  // Remove the class to restore scrolling
    // };

    return (
        <div homepage>
            <header ref={topRef}>
                <nav className="navbar">
                    <ul>
                        {/* <li><a href="#dashboard" onClick={openDashboard}>Dashboard</a></li> */}
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/WasteDonationForm">Waste</a></li>
                        <li><a href="/complaint">Complaint</a></li>
                        <li><a href="EventList">Events</a></li>
                        <li><a href="/UserDashboard">videos</a></li>
                        <li><a href="/Logout">Logout</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className="video-section">
                    <video className="background-video" autoPlay loop muted>
                        <source src="13254551-hd_1920_1080_30fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-content">
                        <h1>Welcome To The Green Mile</h1>
                        <br/>
                        <p>Discover the beauty of the natural world.</p>
                    </div>
                </section>
                <section className="description-section" ref={descriptionRef}>
                    <div className='about'>
                        <h2>The Green Mile</h2>
                        <p>We are dedicated to fostering a sustainable future for our community. 
                            Rooted in the rich traditions and values of our panchayat, 
                            our mission is to enhance the quality of life for current and 
                            future generations through sustainable practices and eco-friendly solutions.</p>
                    </div>
                </section>
                <section className="additional-content">
                    <h2>Our Vision</h2>
                    <p>To create a self-sustaining community where environmental consciousness, 
                        social responsibility, and economic stability flourish in harmony.</p>
                </section>
                <section className="additional-content">
                    <h2>Our Mission</h2>
                    <p>We have years, not decades, to take on the interconnected crises of climate change and biodiversity loss. But by working together, we’re overcoming barriers to the solutions our planet needs.</p>
                </section>
                <section className="additional-content">
                    <h2>Our Approach</h2>
                    <p>Our approach reflects decades of learning and refining, and the special role TNC can play side-by-side with partners, communities and decision-makers across the globe</p>
                </section>
                {/* <div id="dashboard" className="dashboard" ref={dashboardRef}>
                    <div className="dashboard-content">
                        <span className="close" onClick={closeDashboard}>&times;</span>
                        <div className="icon-grid">
                            <div className="icon">
                                <a href="/profile" className="profile-link">Profile</a>
                            </div>
                            <div className="icon">
                                <a href="/events" className="profile-link">Events</a>
                            </div>
                            <div className="icon">
                                <a href="/complaint" className="profile-link">Complaints</a>
                            </div>
                            <div className="icon">
                                <a href="/UserDashboard" className="profile-link">Videos</a>
                            </div>
                            <div className="icon">
                                <a href="/WasteDonationForm" className="profile-link">WasteCollection</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                 {/* <div id="overlay" className="overlay" ref={overlayRef} onClick={closeDashboard}></div> */}
             </main> 
            <footer>
                <div className="footer">
                    <p>"The earth has music for those who listen."<br/>
                    <br/>
                    © 2025 The Green Mile. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
