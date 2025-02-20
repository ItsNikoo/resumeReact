import Index from "../DefaultContainer";
import data from "./education.ts";
import styles from "./EducationContainer.module.css";

export default function EducationContainer() {
    return (
        <Index title="Образование">
            {data.map((education) => {
                const educationInfo = [
                    education.education,
                    education.grade,
                    education.year,
                ]
                    .filter(Boolean)
                    .join(", ");

                return (
                    <div key={education.id}>
                        <h1 className={education.primary ? styles.primary : styles.secondary}>
                            {educationInfo}
                        </h1>
                    </div>
                );
            })}
        </Index>
    );
}