import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";


export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community. ",
};


async function Meals() {
  const meals = await getMeals()
  return  <MealsGrid meals={meals}/>
}

export default function MealsPage() {
    return (
     <>
      <header className="gap-12 mt-12 mb-20 mx-auto w-11/12 max-w-6xl text-gray-800 text-2xl">
        <h1 className='font-bold text-6xl mb-6'>
            Delicious Meals, created 
            <span className="text-red-600"> by you</span>
        </h1>
        <p className="text-gray-800 text-2xl">
            Choose your favorite recipe and cook it yourself. It is easy and fun! 
        </p>
        <p>
            <Link href="/meals/share"
              className="inline-block text-center py-2 text-2xl px-4 mt-6 my-2
              rounded-lg text-white font-bold
               hover:bg-gray-800 bg-red-600">
            Share Your Favorite Recipe
            </Link>
        </p>
      </header>
      <main>
        <Suspense
         fallback={<p className="text-2xl font-bold text-green-600 text-center">
          Fetching Meals...
          </p>
          }>
       <Meals/>
       </Suspense>
      </main>
     </>
    )
}