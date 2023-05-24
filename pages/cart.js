import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };


    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Корзина
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Покупки
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Итого</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Сумма
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            {subTotal.toFixed(2)}BYN;
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        Это сумма которая включает в себя только оплату товара которой вы покупаете, без процентов, доставки и налогов
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">

                                        <input type="radio" name="input_radio" id="id-1" checked/><b>Доставка</b>

                                        <div id="billing_index_field">
                                            <div className="text-md flex justify-center font-bold text-red-500/[0.9] mb-2">Доставка только по Витебку</div>
                                            <legend className='flex justify-center font-bold'>Адрес доставки</legend><br/>
                                            <label> Адресс &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" required/></label>
                                            <br/><br/>
                                            <label> Номер телефона&nbsp;     <input type="text" required/></label><br/>
                                        </div>
                                        <br/>
                                        <input type="radio" name="input_radio" id="id-2"/><b>Самовывоз</b>

                                        <div className="class-other-div"><label><br/> Номер телефона&nbsp;     <input type="text" required/></label><br/><br/> <iframe
                                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A759df7b70c1e07b664cf1722c5a80c90b77bd09d55e8d39138b4d2862721ec19&amp;source=constructor"
                                            width="200" height="200" frameBorder="0">
                                        </iframe>
                                            <br/>
                                            <b>Адрес пункта выдачи</b>: Беларусь, Витебск, ул Гагарина 85 211305
                                            <br/>
                                            <b>Время работы </b>с 08:00 до 19:00  </div>




                                    </div>
                                </div>

                                {/* BUTTON START */}
                                <button
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                    onClick={handlePayment}
                                >
                                    Оплатить
                                    {loading && <img src="../assets/spinner.svg" />}
                                </button>
                                {/* BUTTON END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        {/* <Image
                            src="public/assets/empty-cart.png"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        /> */}
                        <img className="w-[300px] md:w-[400px]" src="../assets/empty-cart.png"/>
                        <span className="text-xl font-bold">
                            Ваша корзина пуста
                        </span>
                        <span className="text-center mt-4">
                            Присмотрите себе товары в нашем магазине
                            <br />
                            Советуем посмотреть топ категории
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Продолжить покупки
                        </Link>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};





export default Cart;