import styles from "./Header.module.css"
import Stroke from "../Stroke";
interface Props {
    name: string
}
export default function Header({name}: Props) {
    return(
        <>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.title}>Junior Frontend developer</h3>
            <Stroke />
        </>

)
}
