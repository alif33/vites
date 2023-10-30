import Link from "next/link"

const Footer = ()=>{
    return(
        <div className="h-14 bg-white flex justify-between py-10 px-20">
            <div>
                <h1>LOGO</h1>
            </div>
            <h5>© 2022 Axilthemes. All Rights Reserved.</h5>
            <div>
                <ul className="flex">
                    <li><Link href="/auth/signup">signup</Link></li>
                    <li><Link href="/auth/signin">signin</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer