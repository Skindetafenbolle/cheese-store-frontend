import Link from "next/link";

export default function Reg({customer, customers}) {

    return (
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <h2 className='font-bold mb-10 text-[30px]'>Регистрация</h2>
            <form className='text-[20px] md:text-[34px] mb-5 font-semibold leading-tight'>
                <p>Имя: <input className='bg-gray-50'
                               type="name"
                               id="name"
                               name="name"

                    // onChange={changeInputRegister}
                /></p>
                <br/>
                <p>Фамилия: <input className='bg-gray-50'
                                   type="lastname"
                                   id="lastname"
                                   name="lastname"
                    // value={register.email}
                    // onChange={changeInputRegister}

                /></p> <br/>
                <p>Email: <input className='bg-gray-50'
                                 type="email"
                                 id="email"
                                 name="email"
                    // value={register.email}
                    // onChange={changeInputRegister}
                /></p> <br/>
                <p>Пароль: <input className='bg-gray-50'
                                  type="password"
                                  id="password"
                                  name="password"
                                  autoComplete="off"
                    // value={register.password1}
                    // onChange={changeInputRegister}
                /></p> <br/>
                <input className='mb-20' type="submit"/>

            </form>
            <Link href='/customerPage'> Есть аккаунт? Войти </Link>
        </div>
    );
}


