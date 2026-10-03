import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './NavbarNFooter/Navbar4.jsx';
import Footer from './NavbarNFooter/Footer.jsx';
import Home from './Home/Home2.jsx';
import Project from './Projects/Project.jsx';
import Team from './Team/Team.jsx';
import Contactus from './Contact/Contactus.jsx';
import Alumni from './Alumni/Alumni.jsx';
import BlogList from './Blogs/BlogList.jsx';
import BlogPost from './Blogs/BlogPost.jsx';
import Achievements from './Achievements/Achievements.jsx';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/teams" element={<Team />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/Alumni" element={<Alumni />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}