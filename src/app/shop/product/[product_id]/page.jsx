import React from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/features/Navbar";
import FooterSection from "@/features/Footer";
import ProductDetailShowcaseSection from "@/components/common/ProductDetailShowcaseSection";


export default function ProductDetailPage({ params }) {
    const { product_id } = React.use(params);

    return (
        <>
            <Navbar />
            <div className="mt-24 lg:mt-8">
                <section className="bg-red-100/60 px-4 md:px-[70px] flex h-[100px] gap-3 items-center">
                    <div className="text-[#666666] font-semibold">Home</div>
                    <ChevronRight />
                    <div className="text-[#666666] font-semibold">Shop</div>
                    <ChevronRight />
                    <Separator
                        orientation="vertical"
                        className="h-[40px] border border-[#666666]"
                    />
                    <div className="font-semibold">{product_id}</div>
                </section>
                <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
                    <ProductDetailShowcaseSection productId={product_id} />
                </div>
                <div className="my-[40px]">
                    <Separator />
                </div>
                <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
                    <section className="flex flex-col items-center justify-center">
                        <div className="flex gap-[53px]">
                            <p className="text-customGray text-normal md:text-[24px] font-semibold">
                                Description
                            </p>
                            <p className="text-customGray text-normal md:text-[24px]">
                                Additional Information
                            </p>
                            <p className="text-customGray text-normal md:text-[24px]">
                                Reviews [5]
                            </p>
                        </div>
                        <div className="mt-[37px] ">
                            <p className="text-customGray text-normal">
                                Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
                                Kilburn portable active stereo speaker takes the unmistakable look and
                                sound of Marshall, unplugs the chords, and takes the show on the road.
                            </p>
                            <p className="text-customGray text-normal mt-[30px]">
                                Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                                vintage styled engineering. Setting the bar as one of the loudest
                                speakers in its class, the Kilburn is a compact, stout-hearted hero
                                with a well-balanced audio which boasts a clear midrange and extended
                                highs for a sound that is both articulate and pronounced. The analogue
                                knobs allow you to fine tune the controls to your personal preferences
                                while the guitar-influenced leather strap enables easy and stylish
                                travel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-[37px]">
                            <div className=" flex flex-col bg-primary-light  rounded-[8px] justify-center items-center">
                                <img
                                    src={"/images/sofa.png"}
                                    alt="product"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className=" flex flex-col bg-primary-light  rounded-[8px] justify-center items-center">
                                <img
                                    src={"/images/sofa.png"}
                                    alt="product"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="my-[40px]">
                    <Separator />
                </div>
                <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
                    {/* <ProductDetailRelatedSection /> */}
                </div>
            </div>
            <FooterSection />
        </>
    );
}
