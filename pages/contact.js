import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({ products }) {

    return (
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Контакты
            </div>
            <div className="text-md md:text-xl">
                    <b>Наш адрес</b>
                    <br/>

                    Общество с ограниченной ответственностью «Cheese-store»
<br/>
                    Почтовый адрес: 220019 г. Витебск, ул. Гагарина, 41
<br/>
                    Телефон: +375 44 3 666 660, +375 17 232 20 01
<br/>
                    Факс: +375 17 349 56 10
                    <br/>
                    <h1>
                           <b>
                                   Реквизиты
                           </b>
                    </h1>
                    Юридический адрес:
<br/>
                    220099 г. Минск, ул. Казинца 52А-22
<br/>
                    Р/с BY17IRJS30120227701000000933 в ОАО «СтатусБанк»
<br/>
                    код банка IRJSBY23
<br/>
                    УНП 101168754
<br/>
                    <b>
                            Пресс-служба
                    </b>
<br/>
                    Климович Максим Вячеславович, руководитель пресс-службы
<br/>
                    E-mail: KlimaPress@mail.gg
<br/>
                    Телефон: +375 44 123 45 67
<br/>

<b>
        Уважаемые покупатели!
        <br/>
        Для нас очень важно, чтобы Вы всегда были довольны нашей работой.
        <br/>
        Ваши вопросы, предложения и комментарии Вы можете отправлять по адресу: cheese-store.com
</b>


            </div>


        </div>
    );
}


