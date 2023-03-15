import Logo from "../../public/images/logo.svg"
import Link from "next/link"
import Image from "next/image"
import Styles from "./header.module.scss"

const Header = () => {
    return <div className={Styles.container}>
        <div className="logotipo">
            <Image src={Logo} />
        </div>

        <div className="menu">            
                    <Link href="/">Home</Link>              
                    <Link href="/">O que fazemos</Link>
                    <Link href="/">Cases</Link>
        </div>

        <div className="action">
            <button>Fale Conosco</button>
        </div>
    </div>
}

export default Header