import Image from "next/image"
import Link from "next/link"

const Signin = ()=>{
    return(
        <div className="h-screen bg-white overflow-y-hidden">
            <div className="w-[450px] border shadow-lg mx-auto rounded mt-20">
                <h1 className="text-3xl text-center my-5">Signin</h1>
                <div className="flex justify-center">
                    <form className="w-full grid grid-cols-1 px-7">
                        <input
                            placeholder="Email"
                            className="w-full border h-11 rounded mb-3 pl-2 shadow-sm"
                        />
                        <input
                            placeholder="Password"
                            className="w-full border h-11 rounded pl-2 shadow-sm"
                        />
                        <span className="py-4">
                            <Link className="block underline float-right" href="/auth/forgot-password">Forgot Password?</Link>
                        </span>
                        <button type="submit" className="bg-[#0016DF] text-white h-11 shadow-sm rounded mb-5">Submit</button>
                    </form>
                </div>
                <div className="px-7">
                    <h5 className="text-center">Or Signup with</h5>
                    <span className="w-full h-11 flex justify-center items-center gap-3 border my-5 shadow cursor-pointer">
                        <Image
                            height={20}
                            width={20}
                            src="/img/google.svg"
                        />
                        <h3 className="">Google</h3>
                    </span>
                </div>
                <div className="flex justify-center pb-3">
                    <span>New User? <Link className="font-medium" href="/auth/signup">Register</Link> </span>
                </div>
            </div>
        </div>
    )
}
export default Signin