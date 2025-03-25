import Index from "../DefaultContainer";
import styles from "./Footer.module.css"

interface Links {
    links: string[]
}

export default function Footer({links}: Links) {
    return (
        <Index title={"Полезные ссылки"}>
            <ul className={styles.List}>
                {links.map((item,index)=>{
                    return <li key={index} className={styles.ListItem}>
                        <a href={`${item}`}>{item}</a>
                    </li>;
                })}
            </ul>
        </Index>
    )
}