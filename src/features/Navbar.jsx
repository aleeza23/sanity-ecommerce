'use client'
import React, { useState } from "react";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Cart from "@/components/common/Cart";
import { useCartStore } from "@/store/cart-store";
import { RemoveScroll } from 'react-remove-scroll';

const Navbar = ({

    menu = [
        { title: "Home", url: "#" },
        {
            title: "Shop",
            url: "#",
            items: [
                {
                    title: "Furniture",
                    description: "Explore beds, sofas, chairs & more",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Accessories",
                    description: "Decor, organizers, lamps & more",
                    icon: <Trees className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "New Arrivals",
                    description: "Check out the latest additions",
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Sale",
                    description: "Best deals on top products",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },

        { title: "About", url: "#" },
        { title: "Contact", url: "#" },
    ],
    auth = {
        login: { title: "Login", url: "#" },
        signup: { title: "Sign up", url: "#" },
    },

}) => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useCartStore();


    const icons = [
        {
            iconUrl: "/images/heart_icon.png",
            alt: "heart icon",
            action: () => console.log("You just clicked on the heart icon"),
        },
        {
            iconUrl: "/images/cart_icon.png",
            alt: "cart icon",
            action: () => setShowCart(true),
            badgeValue: cartItems.length
        },
    ];

    return (
        <>
            <section className="py-4">
                <div className=" max-w-[90%] md:max-w-[80%] mx-auto">
                    {/* Desktop Menu */}
                    <nav className="hidden justify-between lg:flex">
                        <div className="flex items-center gap-6">
                            <a href={'/'} className="flex items-center  gap-2">
                                <Image src={'/logo.png'} alt="logo" width={130} height={130} />
                            </a>
                            <div className="flex items-center flex-shrink-0">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        {menu.map((item) => renderMenuItem(item))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                        <div className="flex items-center gap-[40px] select-none">
                            {icons.map((icon, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={icon.iconUrl}
                                        onClick={icon.action}
                                        alt={icon.alt}
                                        className="cursor-pointer"
                                    />
                                    {icon?.badgeValue ? (
                                        <Badge
                                            variant="destructive"
                                            className="absolute -top-3 -right-5"
                                        >
                                            {icon?.badgeValue}
                                        </Badge>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <div className="block lg:hidden">
                        <div className="flex items-center justify-between">
                            <a href={'/'} className="flex items-center gap-2">
                                <Image src={'/logo.png'} alt="logo" width={130} height={130} />

                            </a>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-4 select-none">
                                    {icons.map((icon, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={icon.iconUrl}
                                                onClick={icon.action}
                                                alt={icon.alt}
                                                className="cursor-pointer"
                                            />
                                            {icon?.badgeValue ? (
                                                <Badge
                                                    variant="destructive"
                                                    className="absolute -top-3 -right-5"
                                                >
                                                    {icon?.badgeValue}
                                                </Badge>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Menu className="size-4" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="overflow-y-auto">
                                        <SheetHeader>
                                            <SheetTitle>
                                                <a href={'/'} className="flex items-center gap-2">
                                                    <Image src={'/logo.png'} alt="logo" width={130} height={130} />

                                                </a>
                                            </SheetTitle>
                                        </SheetHeader>
                                        <div className="flex flex-col gap-6 p-4">
                                            <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                                                {menu.map((item) => renderMobileMenuItem(item))}
                                            </Accordion>

                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showCart && (
                <div
                    className="hidden md:block absolute animate-out left-0 right-0 top-0 h-screen bg-black/20 z-[99]"
                    onClick={() => setShowCart(!showCart)}
                ></div>
            )}

            {showCart && <RemoveScroll> <Cart toggleShowCart={() => setShowCart(false)} /> </RemoveScroll>}
        </>
    );
};

const renderMenuItem = (item) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} >
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover  text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title} className="w-80">
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }) => {
    return (
        <a
            className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </a>

    );
};

export { Navbar };
