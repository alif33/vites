import DHeader from "@/components/DHeader"

const Peofile = ()=>{
    return(
        <div>
            <DHeader/>
            <div className="w-1/2 border shadow mx-auto my-20">
                <h1 className="text-3xl font-semibold text-center py-7">Let's update your profile...</h1>
                <form 
                    action=""
                    className="grid grid-cols-2 px-5 gap-3"
                >
                    <input
                        type="text"
                        className="w-full border h-11 rounded mb-3 pl-2 shadow-sm"
                        placeholder="name"
                    />
                    <select className="w-full border h-11 rounded mb-3 pl-2 shadow-sm">
                        <option>BD</option>
                        <option>IN</option>
                        <option>SR</option>
                    </select>
                    <textarea rows={3} className="w-full border rounded mb-3 pl-2 shadow-sm col-span-2">

                    </textarea>
                    <button className="col-span-2 bg-[#0016DF] text-white h-11 shadow-sm rounded mb-5">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Peofile