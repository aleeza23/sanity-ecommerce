import React from "react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";

async function HeroSection() {
    const data = await client.fetch(`*[_type == "homepage"] {title, description, "imageUrl" : image.asset->url}[0]`)
    // console.log(data);

    return (
        <section
            className="flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom"
            style={{
                backgroundImage: `url(${data.imageUrl})`,
            }}
        >
            <div className="bg-[#FFF3E3] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px]  md:pt-[62px] pb-[37px]">
                <p className="text-customBlack font-semibold text-normal">
                    New Arrival
                </p>
                <p className="text-[#B88E2F] py-4 md:py-2 text-4xl md:text-5xl leading-tight md:text-large max-w-sm font-bold">
                    {data.title}
                </p>
                <p className="text-customGray text-[18px] mb-8 max-w-md">
                    {data.description}
                </p>
                <Button className={'bg-[#B88E2F] rounded-none hover:bg-[#b88f2fc4]'}>BUY NOW</Button>
            </div>
        </section>
    );
}

export default HeroSection;
