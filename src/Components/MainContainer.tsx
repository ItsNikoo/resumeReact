import styles from './MainContainer.module.css'
interface Props {
    children: React.ReactNode
}

export default function MainContainer({children}: Props){
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                {children}
            </div>
        </div>

    )
}