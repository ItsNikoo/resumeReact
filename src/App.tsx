import MainContainer from "./Components/MainContainer.tsx";
import Header from "./Components/Header";
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
            <ContactsContainer
                street={data.contacts.street}
                city={data.contacts.city}
                number={data.contacts.number}
                email={data.contacts.email}/>
            <SkillsContainer skills={data.skills}/>
            <EducationContainer education={data.educations} />
            <ExperienceContainer experiences={data.experiences} />
            <Footer links={data.links} />
        </MainContainer>
    )
}

export default App
