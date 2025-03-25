import styles from "./DefaultContainer.module.css"
import Stroke from "../Stroke";

interface Props {
    children?: React.ReactNode,
    title: string
}

export default function Index(props: Props) {
    return (
        <div className={styles.Container}>
            <Stroke/>
            <div className={styles.text}>{props.title}</div>
            {props.children}
        </div>
    )
}