import styles from "./SkillsContainer.module.css"
import Index from "../DefaultContainer";

interface Props{
    skills: string[]
}

export default function SkillsContainer({skills}: Props){
    return(
        <Index title={"Навыки"}>
            <div className={styles.gridContainer}>
                {skills.map((item,index) => {
                    return (
                        <div className={styles.SkillCard} key={index}>{item}</div>
                    )
                })}
            </div>
        </Index>
    )
}