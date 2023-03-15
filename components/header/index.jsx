import Logo from "../../public/images/logo.svg"
import Image from "next/image"

const Header = () => {
    return <div className="container">
        <div className="logotipo">
            <Image src={Logo} />
        </div>

        <div className="menu">
            
        </div>

        <div className="action">
            
        </div>
    </div>
}

export default Header