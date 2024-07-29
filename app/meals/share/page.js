'use client'

import { useFormState } from 'react-dom'
import ImagePicker from "@/components/meals/image-picker";
import MealFormSubmit from "@/components/meals/meal-form-submit";
import { ShareMeal } from "@/lib/action";

export default function ShareMealPage() {
  const[state, formAction] = useFormState(ShareMeal, { message: null })
    return (
      <>
        <header className="gap-12 mt-12 mb-20 mx-auto
         w-11/12 max-w-5xl text-gray-800 text-2xl">
          <h1 className='font-bold text-6xl mb-6'>
            Share your <span className="text-red-600 ">favorite meal</span>
          </h1>
          <p className="text-gray-800 text-2xl">
            Or any other meal you feel needs sharing!
          </p>
        </header>
        <main className="w-11/12 max-w-5xl text-white my-12 mx-auto">
          <form className="max-w-2xl" action={formAction}>
            <div className="flex gap-4">
              <p className="w-full">
                <label className="block mb-2 text-base 
                uppercase font-bold text-gray-800" 
                htmlFor="name">
                    Your name
                </label>
                <input className="block w-full py-2 px-4 
                rounded-md text-lg border border-solid focus:outline-blue-100 focus:bg-blue-200
                 border-blue-100 bg-blue-100 text-sky-950"
                 type="text"
                  id="name" 
                  name="name" required />
              </p>
              <p className="w-full">
                <label className="block mb-2 text-base 
                uppercase font-bold text-gray-800" 
                 htmlFor="email">
                    Your email
                </label>
                <input className="block w-full py-2 px-4 
                rounded-md text-lg border border-solid focus:outline-blue-100 focus:bg-blue-200
                 border-blue-100 bg-blue-100 text-sky-950"
                type="email"
                 id="email" 
                name="email" required />
              </p>
            </div>
            <p className="w-full">
              <label className="block mb-2 text-base mt-2
                uppercase font-bold text-gray-800" 
              htmlFor="title">
                Title
              </label>
              <input className="block w-full py-2 px-4 
                rounded-md text-lg border border-solid focus:outline-blue-100 focus:bg-blue-200
                 border-blue-100 bg-blue-100 text-sky-950"
               type="text"
                id="title" 
                name="title" required />
            </p>
            <p className="w-full">
              <label className="block mb-2 text-base mt-2
                uppercase font-bold text-gray-800" 
               htmlFor="summary">
                Short Summary
                </label>
              <input className="block w-full py-2 px-4 
                rounded-md text-lg border border-solid focus:outline-blue-100 focus:bg-blue-200
                 border-blue-100 bg-blue-100 text-sky-950"
               type="text"
               id="summary" 
               name="summary" required />
            </p>
            <p className="w-full">
              <label className="block mb-2 text-base mt-2
                uppercase font-bold text-gray-800" 
               htmlFor="instructions">
                Instructions
                </label>
              <textarea className="block w-full py-2 px-4 
                rounded-md text-lg border border-solid focus:outline-blue-100 focus:bg-blue-200
                 border-blue-100 bg-blue-100 text-sky-950"
                id="instructions"
                name="instructions"
                rows="10"
                required
              ></textarea>
            </p>
            <ImagePicker
            name="image"
            label="label"/>
            {state.message && <p className='text-2xl font-bold mr-6 mb-2 text-right text-green-600'>{state.message}</p>}
            <p className="text-right" >
            <MealFormSubmit/>
            </p>
          </form>
        </main>
      </>
    );
  }