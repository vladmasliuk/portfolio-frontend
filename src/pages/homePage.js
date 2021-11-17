import React from "react";

// components
import Container from '../components/Basic/Container';
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import SkillsSection from '../components/Sections/SkillsSection/SkillsSection';

const homePage = () =>{
    return(
        <>
            <MainSection/>
            <Container>
                <AboutSection/>
                <SkillsSection/>
            </Container>
        </>
    )
}

export default homePage;