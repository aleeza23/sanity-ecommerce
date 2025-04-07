import ProductCard from '@/components/common/ProductCard'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import React from 'react'

const Products = async () => {
    const productData = await client.fetch(`*[_type == "product"] {title, description, price,otherPrice, type , typeValue, _id,  "imageUrl" : image.asset->url}`)
    // console.log(productData);


    return (
        <section className="overflow-x-hidden max-w-[90%] md:max-w-[80%] mx-auto mt-24">
            <div>
                <p className="text-[32px] font-bold text-center">Our Product</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
                {productData.map((data) => <ProductCard data={data} key={data._id} />)}
            </div>
            <div className="flex justify-center mt-[32px]">
                <Button className={'bg-[#B88E2F] rounded-none hover:bg-[#b88f2fc4] '}>Show more</Button>

            </div>
        </section>
    )
}

export default Products