import {getMeal} from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
    const meal = getMeal(params.mealsSlug);

    if(!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    }
}

export default function MealsDetailPage({params}) {
    const meal = getMeal(params.mealsSlug);

    if(!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    return (
        <>
    <header className="flex gap-12 py-8 px-4 m-auto max-w-5xl">
        <div className='relative w-1/2 h-80 '>
            <Image className="object-cover rounded-lg shadow-2xl" src={meal.image} fill/>
        </div>
        <div>
         <h1 className="text-5xl mt-4 mb-2 text-red-600 font-extrabold uppercase">
            {meal.title}
        </h1>
         <p className="text-gray-800 mb-2 italic text-xl">
            by <a className="text-green-600 italic text-xl" href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
         </p>
         <p className="text-gray-600 text-lg">{meal.summary}</p>
        </div>
    </header>
    <main className="text-2xl bg-teal-600 text-white 
    rounded-lg shadow-xl p-8 max-w-4xl my-8 mx-auto ">
        <p dangerouslySetInnerHTML={{
            __html: meal.instructions
        }}></p>
    </main>
    </>
    )
}