import styles from "./ContactsContainer.module.css"

interface Props{
    street: string,
    city: string,
    number: string,
    email: string
}

export default function ContactsContainer({street, city, number, email}: Props){
    return (
        <div>
            <h3 className={styles.text}>{street}</h3>
            <h3 className={styles.text}>{city}</h3>
            <h3 className={styles.text}>{number}</h3>
            <h3 className={styles.text}>{email}</h3>
        </div>
    )
}