
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Cart({ toggleShowCart }) {
    const { cartItems, removeFromCart } = useCartStore();
    const router = useRouter();

    const subTotal = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    return (
        <div className=" fixed top-0 right-0 h-full w-full lg:w-[417px] bg-white p-[30px] flex justify-between flex-col shadow-lg z-[999]">
            <div>
                <div className="flex justify-between items-center mb-[36px]">
                    <p className="font-semibold text-[24px]">Shopping Cart</p>
                    <div onClick={toggleShowCart} className="hover:cursor-pointer">
                        <img src="/images/cart_alt_icon.png" alt="cart icon" />
                    </div>
                </div>
                <Separator />
                <div className="mt-[24px] flex flex-col gap-[20px]">
                    {cartItems.map((product, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-[32px] w-full justify-between"
                        >
                            <div>
                                <img
                                    src={product.imageUrl}
                                    alt="product image"
                                    className="w-[108px] h-[105px] rounded-[1rem] object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-normal font-semibold">{product.title}</p>
                                <p className="font-semibold">
                                    {product.quantity} X{" "}
                                    <span className="text-[#B88E2F] font-medium text-sm">
                                        Rs. {product.price}
                                    </span>
                                </p>
                            </div>

                            <div
                                className="cursor-pointer"
                                onClick={() => removeFromCart(product._id)}
                            >
                                <img src={"/images/delete_icon.png"} alt="delete icon" />
                            </div>
                        </div>
                    ))}

                    {cartItems.length === 0 && (
                        <div className="flex justify-center mt-8 text-gray-400">
                            No product in cart
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-[23px]">
                    <p>Subtotal</p>
                    <p className="text-primary text-normal font-semibold">
                        Rs. {subTotal}
                    </p>
                </div>
                {subTotal > 0 && (
                    <>
                        <Separator />
                        <div className="mt-8 flex justify-center">

                            <Button onClick={() => router.push("/checkout")}>Checkout</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
