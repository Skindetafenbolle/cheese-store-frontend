import React from "react";
import Link from "next/link";

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegram, FaLinkedin, FaGit, FaGithub } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                   
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                FAQ
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href='/errorPage'>
                                Статус заказа
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='/errorPage'>
                                Доставка
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='/errorPage'>
                                
                                Способ оплаты
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='/contact'>
                                Контакты
                                </Link>
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                О сыре
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='https://sputnik.by/product_syr/' target="_blank">
                                
                                Новости из мира сыра
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='https://goo.su/yKefyit' target="_blank">

                                Карьера
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='https://goo.su/zwor2u' target="_blank">
                                
                                Популярные производители
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href='https://goo.su/rKKh' target="_blank">
                                
                                Подборка сыров
                                </Link>
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
                            window.open("https://www.linkedin.com/in/skindetafenbolle/", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaLinkedin size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://telegram.org/d.kulbatsky", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTelegram size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://github.com/Skindetafenbolle", "_blank")
                    }
                         className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaGithub size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://instagram.com/d.kulbatsky", "_blank")
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
                    © 2023 Cheese-store, Inc. Все права защищены
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        <Link href='https://goo.su/2UxT53W' target="_blank">
                        Политика обработки персональных данных
                        </Link>
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        <Link href='https://goo.su/AGdK9L' target="_blank">
                        Условия соглашения
                        </Link>
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Created by D.Kulbatsky
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;