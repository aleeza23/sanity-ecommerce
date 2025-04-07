'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Button } from '../ui/button';
import Link from 'next/link';

const ProductCard = ({ data }) => {
    const icons = [
        {
            iconUrl: "/images/share_icon.png",
            title: "Share",
            action: () => { },
        },
        {
            iconUrl: "/images/like_icon.png",
            title: "Like",
            action: () => { },
        },
    ];

    const cardVariant = {
        initial: { opacity: 0, x: 120, scale: 0.5 },
        animate: { opacity: 1, x: 0, scale: 1 },
    };


    return (
        <motion.div
            initial="initial"
            animate="initial"
            whileHover="animate"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="relative"
        >
            <div className="relative">
                <img
                    src={data.imageUrl}
                    alt="product"
                    className="h-[301px] w-full object-cover"
                />

                {data.typeValue && (
                    <div
                        className={`absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-full text-normal font-medium px-2 text-white flex justify-center items-center ${data.type === "DISCOUNTED"
                            ? "bg-red-400"
                            : data.type === "NEW"
                                ? "bg-green-400"
                                : ""
                            }`}
                    >
                        {data.typeValue}
                    </div>
                )}

            </div>
            <div className="bg-[#F4F5F7] p-4">
                <p className="text-black text-2xl font-bold">{data.title}</p>
                <p className="text-[#666666] font-medium text-md py-[8px]">
                    {data.description?.split(" ").slice(0, 4).join(" ")}...
                </p>

                <div className="flex justify-between items-center">
                    <p className="text-customBlack text-lg font-bold">{data.price}</p>
                    {data.otherPrice && (
                        <p className="line-through text-[#666666]">{data.otherPrice}</p>
                    )}
                </div>
            </div>

            {/* OVERLAY START */}
            <motion.div
                className={
                    "absolute p-4 left-0 right-0 top-0 bottom-0 bg-[#3A3A3A]/80"
                }
                variants={cardVariant}
            >
                <div className="pt-[30%]">
                    <div className="flex justify-center">
                        <Link href={`/shop/product/${data._id}`}>
                            <Button className="bg-white text-primary font-bold cursor-pointer hover:bg-white">
                                View Product
                            </Button>
                        </Link>
                    </div>
                    <div className="flex justify-center gap-5 mt-[24px]">
                        {icons.map((icon, index) => (
                            <div
                                className="flex gap-1 items-center hover:cursor-pointer"
                                key={index}
                                onClick={icon.action}
                            >
                                <div>
                                    <img src={icon.iconUrl} alt="icon" />
                                </div>
                                <p className="text-white">{icon.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProductCard