"use client"
import { signUp, signInWithGoogle } from "@/lib/auth"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"

const SignUp = ()=>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const { email, password } = data
        const user = await signUp(email, password)
        if (user) {
            console.log(user);
        }
        
    };


    return(
        <div className="h-screen bg-white overflow-y-hidden">
            <div className="w-[450px] border shadow-lg mx-auto rounded mt-20">
                <h1 className="text-3xl font-medium text-center my-7">Signup</h1>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 px-7">
                        <input
                            placeholder="Email"
                            className="w-full border h-11 rounded mb-4 pl-2 shadow"
                            {...register("email", { required: true })}
                        />
                        <input
                            placeholder="Password"
                            className="w-full border h-11 rounded mb-7 pl-2 shadow"
                            {...register("password", { required: true })}
                        />
                        <button className="bg-[#0016DF] text-white h-11 shadow rounded mb-5">Submit</button>
                    </form>
                </div>
                <div className="px-7">
                    <h5 className="text-center">Or Signup with</h5>
                    <span onClick={signInWithGoogle} className="w-full h-11 flex justify-center items-center gap-3 border my-5 shadow cursor-pointer">
                        <Image
                            height={20}
                            width={20}
                            src="/img/google.svg"
                        />
                        <h3 className="">Google</h3>
                    </span>
                </div>
                <div className="flex justify-center pb-3">
                    <span>Already have an account? <Link className="font-medium" href="/auth/signin">Signin</Link> </span>
                </div>
            </div>
        </div>
    )
}
export default SignUp