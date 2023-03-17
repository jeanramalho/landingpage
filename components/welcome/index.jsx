import Styles from "./welcome.module.scss"

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do bairro</h1>
            <p></p>
        </div>
        <div className={Styles.image}></div>
    </div>
}

export default Welcome