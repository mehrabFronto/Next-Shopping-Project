"use client";

import ThreeDotsLoading from "@/common/ThreeDotsLoading";
import { useGetProducts } from "@/hooks/useProducts";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProductsTable from "./productsTable";

const ProductsPage = () => {
   const { data, isLoading } = useGetProducts();

   const { products } = data || [];

   // if (products) console.log(products);

   if (isLoading) return <ThreeDotsLoading />;

   return (
      <div className="container">
         <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 justify-between px-4 mb-6">
            <h1 className="text-2xl font-bold">اطلاعات محصولات</h1>
            <Link
               href="/admin/products/add"
               className="flex items-center gap-x-1 text-primary-600 font-medium">
               <PlusCircleIcon className="w-6 h-6 stroke-2" />
               <span>افزودن محصول جدید</span>
            </Link>
         </div>
         <ProductsTable products={products} />
      </div>
   );
};

export default ProductsPage;
