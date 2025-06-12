import styles from "./page.module.css"

interface Child {
    children?:React.ReactNode
}

export default function Reusable1(props:Child){
    return(
        <div className={styles.div1}>{props.children}</div>
    )
}