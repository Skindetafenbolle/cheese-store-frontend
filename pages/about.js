export default function About() {

    return (
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                О нас
            </div>
            <div className="text-md md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat laudantium molestias quasi quisquam quo sed sunt ullam! Aliquid amet aperiam architecto asperiores commodi consequatur, consequuntur debitis dignissimos dolore doloremque eius, est ex illum ipsum iste labore libero perspiciatis, quam quas quis reprehenderit repudiandae sunt tenetur ullam vel! Adipisci, amet.
            </div>
            <br/>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A759df7b70c1e07b664cf1722c5a80c90b77bd09d55e8d39138b4d2862721ec19&amp;source=constructor"
                width="800" height="400" frameBorder="0">
            </iframe>
            <b>Адрес пункта выдачи</b>: Беларусь, Витебск, ул Гагарина 85 211305
            <br/>
            <b>Время работы </b>с 08:00 до 19:00
        </div>
    );
}


