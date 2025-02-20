import styles from "./Header.module.css"
interface Props {
    name: string
}
export default function Header({name}: Props) {
    return(
        <>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.title}>Junior FullStack developer</h3>
        </>

)
}
