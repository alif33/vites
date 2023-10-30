import Image from "next/image"

const Hero =()=>{
    return(
        <div className="grid grid-cols-2 px-10 py-20">
            <div className="flex flex-col justify-center gap-7">
                <h1 className="text-5xl font-semibold">Write for readers, not for search engines.</h1>
                <p className="text-md font-light">Pellentesque eget velit tempus, porta ante eu, consectetur augue nunc mollis tincidunt felis porta.</p>
            </div>
            <div>
                <Image
                    height={400}
                    width={450}
                    src="/img/hero.png"
                    alt="hero illustration"
                />
            </div>
        </div>
    )
}

export default Hero