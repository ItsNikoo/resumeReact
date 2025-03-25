import Index from "../DefaultContainer";
import styles from "./ExperienceContainer.module.css";

interface Experience {
    id: number;
    place: string;
    achievements: string[];
    yearBegin: number;
    yearEnd: number;
}

interface Experiences{
    experiences: Experience[];
}

export default function EducationContainer({experiences}: Experiences) {
    return (
        <Index title={"Опыт работы"}>
            {experiences.map((experience) => {
                return (
                    <div key={experience.id} className={styles.ExperienceCard}>
                        <h1 className={styles.Title}>{experience.place}</h1>
                        <h3 className={styles.Years}>{experience.yearBegin}-{experience.yearEnd}</h3>
                        {experience.achievements && (
                            <ul className={styles.List}>
                                {experience.achievements.map((achievement, index) => (
                                    <li key={index} className={styles.ListItem}>{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </Index>
    )
}