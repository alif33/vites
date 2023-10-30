import Package from "./Package"
const Packages = ()=>{
    const packages = [
        {
            name: "Basic", 
            price: 5, 
            features: [
                { name: "Unlimited Projects", icon: "" },
                { name: "Everyday Support", icon: "" },
            ]
        },
        {
            name: "Middle", 
            price: 29, 
            features: [
                { name: "Unlimited Projects", icon: "" },
                { name: "Everyday Support", icon: "" },
                { name: "Monthly Updates", icon: "" }
            ]
        },
        {
            name: "Pro", 
            price: 49, 
            features: [
                { name: "Unlimited Projects", icon: "" },
                { name: "Everyday Support", icon: "" },
                { name: "Monthly Updates", icon: "" },
                { name: "Free Domain", icon: "" },
            ]
        },
    ]
    return(
        <div className="bg-[#f9fcff]">
            <div className="w-10/12 mx-auto py-20">
                <h1 className="text-3xl font-semibold text-center py-4">Pricing Plans for Businesses of All Sizes</h1>
                <h5 className="text-base font-light text-center pb-11">Nulla venenatis enim vel eros blandit, sed dignissim risus porta. Nullam eget erat pulvinar.</h5>
                <div className="grid grid-cols-3 gap-3">
                    {
                        packages.map((item, index)=><Package 
                            key={index}
                            name={item.name}
                            price={item.price}
                            features={item.features}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Packages