import styles from "./SkillsContainer.module.css"
import data from "./skills.ts"
import Index from "../DefaultContainer";

export default function SkillsContainer(){
    return(
        <Index title={"Навыки"}>
            <div className={styles.gridContainer}>
                {data.map((item,index) => {
                    return (
                        <div key={index}>{item}</div>
                    )
                })}
            </div>
        </Index>
    )
}