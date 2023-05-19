import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Спасибо за покупку!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Ваш заказ принят, в течении 5 минут вам позвонит наш менеджер по поводу доставки
                    </div>
                    <div className="text-base mt-5">
                        Предложения и замечания отправлять на почту
                    </div>
                    <div className="underline">cheesestore@gmail.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Продолжить покупки
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
