import MainContainer from "./Components/MainContainer.tsx";
import Header from "./Components/Header";
import Stroke from "./Components/Stroke";
import ContactsContainer from "./Components/ContactsContainer";
import data from "./data.ts"
import SkillsContainer from "./Components/SkillsContainer";
import EducationContainer from "./Components/EducationContainer";
import ExperienceContainer from "./Components/ExperienceContainer";
import Footer from "./Components/Footer";

function App() {

    return (
        <MainContainer>
            <Header name={"Никита Перминов"}/>
            <Stroke />
            <ContactsContainer street={data.street} city={data.city} number={data.number} email={data.email} />
            <SkillsContainer/>
            <EducationContainer/>
            <ExperienceContainer/>
            <Footer/>
        </MainContainer>
    )
}

export default App
