import Image from "next/image"

const Services = ({ name, image, description })=>{
    return(
        <div className="flex flex-col justify-between">
            <div className="h-[150px] w-[100px] mx-auto">
                <Image
                    height={100}
                    width={100}
                    src={image}
                    alt="service sign"
                />
            </div>
            <h1 className="text-2xl font-semibold text-center">{name}</h1>
            <p className="font-light text-md pt-3">{description}</p>        
        </div>
    )
}
export default Services