import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({ products }) {

    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Выберите себе сыр по вкусу!
                    </div>
                    <div className="text-md md:text-xl">
                        Большое количество сыров на ваш выбор,
                        по приятной цене и с доставкой
                        (Поддержка Яндекс Еда)
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    {/* {products?.data[0]} */}
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}
            </Wrapper>
        </main>
    );
}
export async function getServerSideProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}