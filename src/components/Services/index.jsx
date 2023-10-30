import Card from "./Card"

const Services = ()=>{
    const services = [
        {  image: "/img/service-icon-1.png", name: "Logo & Branding", description: "Our comprehensive Online Marketing strategy will boost your website and traffic hence monthly sales." },
        {  image: "/img/service-icon-2.png", name: "Website Development", description: "We design professional looking yet simple websites. Our designs are search engine and user friendly." },
        {  image: "/img/service-icon-3.png", name: "Mobile App Development", description: "From simple Content Management System to complex eCommerce developer, we cover it all." },
    ]
    return(
        <div className="bg-[#f9fcff]">
            <div className="w-10/12 mx-auto py-20">
                <h1 className="text-3xl font-semibold text-center py-4">Services We Provide</h1>
                <h5 className="text-base font-light text-center pb-11">Pellentesque eget velit tempus, porta ante eu, consectetur.</h5>
                <div className="grid grid-cols-3 gap-3">
                    {services.map((item, index)=><Card 
                        key={index} 
                        name={item.name} 
                        image={item.image} 
                        description={item.description} 
                    />)}
                </div>
            </div>
        </div>
    )
}
export default Services