import Styles from "./button.module.scss"

const Button = ({title, kind}) => {
    const generationClassKing =  () => {
        if(kind === "secondary") {
            return Styles.secondary
        }
        return Styles.primary
    }
    return <button className={`${Styles.button} ${generationClassKing()}`}>{title}</button>
}

export default Button