import React from "react";
import Link from "next/link";

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Найти в магазине
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Вакансии
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Корзина
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Обратная связь
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Акционные предложения
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                FAQ
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Статус заказа
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Доставка
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Способ оплаты
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Контакты
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                О сыре
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Новости из мира сыра
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Карьера
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Популярные производители
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Подборка сыров
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://twitter.com", "_blank")
                        } 
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </div>
                    <div onClick={() =>
                            window.open("https://youtube.com", "_blank")
                        } 
                             className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div onClick={() =>
                            window.open("https://instagram.com", "_blank")
                        } 
                         className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Cheese, Inc. Все права защищены
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Политика обработки персональных данных
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Условия соглашения
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Сделал я
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
