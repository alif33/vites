import Link from "next/link"

const Header = ()=>{
    return(
        <div className="h-14 bg-white flex justify-between items-center px-10 border-b">
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <ul className="flex gap-3">
                    <li><Link href="/auth/signin">Signin</Link></li>
                    <li><Link href="/auth/signup">Register</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header