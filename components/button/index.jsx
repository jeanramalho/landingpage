import Styles from "./button.module.scss"

const Button = ({title, kind}) => {
    const generationClassKing =  () => {
        if(kind === "secondary") {
            return "secondary"
        }
        return "primary"
    }
    return <button className={Styles.button}>{title}</button>
}

export default Button