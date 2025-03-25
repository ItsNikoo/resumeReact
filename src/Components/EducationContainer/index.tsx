import Index from "../DefaultContainer";
import styles from "./EducationContainer.module.css";

interface Place {
    id: number;
    primary: boolean;
    education: string;
    grade: string;
    year: number;
}

interface Props {
    education: Place[];
}

export default function EducationContainer({education}: Props) {
    return (
        <Index title="Образование">
            <div className={styles.EducationContainer}>
                {education.map((education) => {
                    return (
                        <div className={`${styles.EducationCard} ${education.primary ? styles.Primary : styles.Secondary}`} key={education.id}>
                            <h1 className={styles.Education}>{education.education}</h1>
                            <h3 className={styles.Grade}>{education.grade}</h3>
                            <p className={styles.Year}>{education.year}</p>
                        </div>
                    );
                })}
            </div>
        </Index>
    );
}