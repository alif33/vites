import Link from "next/link"
import Header from "./Header"

const DHeader =()=>{
    return(
        <Header
            auth={true}
            content={
                <ul className="flex gap-5">
                    <li><Link href="/u/dashboard">Dashboard</Link></li>
                    <li><Link href="/u/profile">Profile</Link></li>
                    <li className="text-red-400 text-base font-semibold cursor-pointer">Logout</li>
                </ul>
            }
        />
    )
} 
export default DHeader