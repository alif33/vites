import Link from "next/link"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"

const Footer = ()=>{
    return(
        <div className="h-14 bg-white flex justify-between py-10 px-10">
            <div>
                <h1>LOGO</h1>
            </div>
            <h5>© 2022 Ismail. All Rights Reserved.</h5>
            <div>
                <ul className="flex gap-3">
                    <li><Link href="/auth/signup"><BsFacebook/></Link></li>
                    <li><Link href="/auth/signin"><BsTwitter/></Link></li>
                    <li><Link href="/auth/signin"><BsInstagram/></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer