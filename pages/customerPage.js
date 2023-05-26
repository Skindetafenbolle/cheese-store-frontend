import React from 'react';
import Image from "next/image";


const CustomerPage = ({user, users}) => {
    const p = users?.data?.[0]
    return (
        <div>
            Личная страница
        </div>
    );
}

export default CustomerPage;