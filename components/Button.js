import Link from "next/link";
import {BiLogInCircle} from 'react-icons/bi';

const Button = ({type ,url}) => {
    return (
        <Link href={url}>

         <p className={`btn ${type ==='Sign In' ? BiLogInCircle : BiLogInCircle }`}>{type}</p> 
        </Link>
    )
}

export default Button