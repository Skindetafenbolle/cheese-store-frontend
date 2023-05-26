import { useState } from "react";

import Link from "next/link";

const initialFormData = {email:"", password:""}

export default function Auth({customer, customers}) {



    const [formData,setFormData] = useState(initialFormData)
    const handleSubmitForm = () =>{

    }

    const handleUpdateFieldValue = (e) =>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    return (
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <h2 className='font-bold mb-10 text-[30px]'>Войти</h2>
            <form className='text-[20px] md:text-[34px] mb-5 font-semibold leading-tight'>
                <p>Email: <input className='bg-gray-50'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleUpdateFieldValue}
                /></p> <br/>
                <p>Пароль: <input className='bg-gray-50'
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleUpdateFieldValue}
                /></p> <br/>
                <button type='button' onClick={handleSubmitForm}>Войти</button>

            </form>
            <Link href='/reg'> Нет аккаунта? Зарегистрируйся  </Link>
            <br/>
        </div>
    );
}

