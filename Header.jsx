import { AiTwotoneHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { BiSolidPhoneCall } from 'react-icons/bi';


function Header(){
    return(
        <div className="title">
            
            <div className="head">👗 SRISINDHU BOUTIQUE</div>
            <div className="contact"><BiSolidPhoneCall/>Contact</div>
            <div className="about"> <HiInformationCircle/> About</div>
            <div className="home"><AiTwotoneHome/> Home</div>
            
        </div>
    )
}
export default Header