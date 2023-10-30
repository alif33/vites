import Link from "next/link"

const Contact = ()=>{
    return(
        <div className="bg-[#6384ff] flex justify-between">
            <div className="w-5/12 mx-auto bg-white my-20 py-5 rounded shadow">
                <h1 className="text-3xl font-medium text-center py-3">Get in touch</h1>
                <h5 className="text-md text-center pb-2">How we can help you? Please write down your query.</h5>
                <div className="flex justify-center">
                    <form className="w-full px-7">
                        <input
                            placeholder="Email"
                            className="w-full h-11 border shadow rounded pl-3 mb-3"
                        />
                        <input
                            placeholder="phone"
                            className="w-full h-11 border shadow rounded pl-3 mb-3"
                        />
                        <textarea 
                            rows="3"
                            className="w-full border shadow rounded pl-3 pt-2 mb-3"
                            placeholder="Write your message"
                        >

                        </textarea>
                        <button className="w-full bg-[#0016DF] text-white h-11 shadow rounded">Submit</button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default Contact