import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  <div className='ml-20 size'>
  <img src={user.picture} alt={user.name} /><b>Аватар</b> <br /><br />
  <h2>Никнейм {user.name}</h2>
  <p>Почта {user.email}</p>
</div>
  return (
      user && (
        <div className="w-full md:py-20">
 <div className="text-[34px] font-semibold text-center mb-2 leading-tight">
                        Личный кабинет
                        </div>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">

                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                
                <img src={user.picture} alt={user.name} />   
               

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-lg font-semibold mb-5">
                        Имя: {user.name}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold">
                         Почта:   {user.email}
                        </p>
                       
                    </div>
                    <br />
                    <div className="flex items-center">
                        
                        {user.locale ? (
                            <p className="mr-2 text-lg font-semibold">
                            Регион:   {user.locale}
                           </p>
                        ) : (
                          <p className="mr-2 text-lg font-semibold">
                          Регион:   неизвестно
                         </p>
                            
                        )}
                    </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                </div>
               
                
                 </div>
                          
                     
    </div>
      )
  );
}