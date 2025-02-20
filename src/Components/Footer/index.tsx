import Index from "../DefaultContainer";
import data from "./links.ts"
import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <Index title={"Полезные ссылки"}>
            <ul className={styles.list}>
                {data.map((item,index)=>{
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </Index>
    )
}