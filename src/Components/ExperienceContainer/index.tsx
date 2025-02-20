import Index from "../DefaultContainer";
import data from "./experiences.ts";
import styles from "./ExperienceContainer.module.css";

export default function EducationContainer() {
    return (
        <Index title={"Опыт работы"}>
            {data.map((experience) => {
                return (
                    <div key={experience.id}>
                        <h1 className={styles.experiencePlace}>{experience.place}</h1>
                        <h3 className={styles.years}>{experience.yearBegin} - {experience.yearEnd}</h3>
                        {experience.achievements && (
                            <ul className={styles.list}>
                                {experience.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </Index>
    )
}