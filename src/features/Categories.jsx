import { client } from "@/sanity/lib/client";
import React from "react";

async function Categories() {
    const data = await client.fetch(`*[_type == "category"] {title, "imageUrl" : image.asset->url}`)
    // console.log(data);
    return (
        <section className="max-w-[90%] md:max-w-[80%] mx-auto mt-24">
            <div>
                <p className="text-[32px] font-bold text-center">Browse The Range</p>
                <p className="text-lg text-customGray text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[30px] md:mt-[62px]">
                {data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img
                                src={item.imageUrl}
                                alt="category image"
                                className="h-[400px] md:h-[480px] rounded-[10px] object-cover"
                            />
                        </div>
                        <p className="text-[22px] text-black/90 font-bold mt-[30px] text-center">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;