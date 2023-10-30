const Package = ({name, price, onPurchase, features})=>{
    return(
        <div className="bg-white flex flex-col justify-between border shadow p-3">
            <h1 className="text-2xl font-medium text-center py-3">{name}</h1>
            <div className="flex justify-center">
                <div className="">
                    <span>$</span>
                    <span className="text-7xl">{price}</span>
                    <span>/mo</span>
                </div>
            </div>
            <ul className="py-5">
                {
                    features.map((item, index)=><li key={index} className="my-1">{item.name}</li>)
                }
            </ul>
            <div>
                <button className="w-full h-10 bg-[#6384ff] text-white rounded shadow">PURCHASE NOW</button>
            </div>
        </div>
    )
}

export default Package