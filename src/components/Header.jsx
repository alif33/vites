import Link from "next/link"

const Header = ()=>{
    return(
        <div className="h-14 bg-white flex justify-between">
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <ul className="flex gap-3">
                    <li><Link href="/auth/signup">signup</Link></li>
                    <li><Link href="/auth/signin">signin</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header