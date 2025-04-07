'use client'
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import ReactStars from "react-stars";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";

export default function ProductDetailShowcaseSection({ productId }) {
    const [product, setProduct] = useState(null); // To store the fetched product data
    const [isLoading, setIsLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchProduct = async () => {
            const query = `*[_type == "product" && _id == $productId][0]{
          title,
          description,
          price,
          otherPrice,
          type,
          typeValue,
          _id,
          "imageUrl" : image.asset->url
        }`;

            try {
                const data = await client.fetch(query, { productId });
                setProduct(data); // Set the fetched product data to state
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching product:", error);
                setIsLoading(false); // Stop loading on error
            }
        };

        fetchProduct(); // Call the fetch function
    }, [productId]); // Re-fetch data when the productId changes


    const mini = [
        product?.imageUrl,
        product?.imageUrl,
        product?.imageUrl,
        product?.imageUrl,

    ];

    const extraDetailsData = [
        { item: "SKU", value: "SS001" },
        { item: "Category", value: "Sofas" },
        { item: "Tags", value: "Sofa, Chair, Home, Shop" },
        {
            item: "Share", value: (
                <div className="flex gap-[23px]">
                    <div><img src="/images/facebook.png" alt="facebook" /></div>
                    <div><img src="/images/linkedin.png" alt="linkedin" /></div>
                    <div><img src="/images/twitter.png" alt="twitter" /></div>
                </div>
            )
        },
    ];

    if (isLoading) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LHS */}
            <div className="flex gap-8">
                <div className="hidden md:inline-flex flex-col gap-14">
                    {mini.map((item, index) => (
                        <div key={index} className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                            <img src={item} alt="product mini glance" className="h-full w-full" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col bg-primary-light rounded-[8px] h-[500px] justify-center items-center">
                    <img src={product?.imageUrl} alt="product" className="w-[425px] h-[500px] object-cover rounded-[10px]" />
                </div>
            </div>

            {/* RHS */}
            <div>
                <p className="text-[42px]">{product?.title}</p>
                <p className="text-customGray text-[24px] font-medium">Rs. {product?.price}</p>

                <div className="flex items-center gap-[22px]">
                    <ReactStars count={5} color1="#FFC700" size={24} color2={"#FFC700"} />
                    <Separator orientation="vertical" className="h-[40px] border border-customGray2" />
                    <p>5 Customer Review</p>
                </div>

                <p className="mt-4">
                    {product?.description}
                </p>

                <div>
                    <p className="text-customGray text-[14px] mb-[12px] mt-[22px]">Size</p>
                    <Pagination className="flex !justify-start">
                        <PaginationContent className="flex gap-[38px]">
                            <PaginationItem>
                                <PaginationLink href="" isActive>L</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="">XL</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="">XS</PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
                <div className="flex gap-[18px] items-center mt-12">
                    <div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
                        <MinusIcon
                            className="cursor-pointer"
                        />
                        <p className="font-semibold text-normal select-none">{1}</p>
                        <PlusIcon
                            className="cursor-pointer"
                        />
                    </div>
                    <div>
                        <Button variant="outline" className={'border-black'}>Add to cart</Button>
                    </div>
                </div>
                <div className="my-[41px]">
                    <Separator className="border border-[#D9D9D9]" />
                </div>

                <div className="flex flex-col gap-4">
                    {extraDetailsData.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <p className="text-customGray">{item.item}</p>
                            <p className="text-customGray">:</p>
                            <div className="text-customGray">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
