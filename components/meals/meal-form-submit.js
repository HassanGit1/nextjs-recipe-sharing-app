'use client'

import { useFormStatus } from 'react-dom'

export default function MealFormSubmit() {
    const { pending } = useFormStatus()

    return <button className="inline-block py-2 text-2xl px-4 my-2 mx-4
    rounded-lg text-white font-bold border-0
    hover:bg-gray-800 bg-red-600"
         disabled = {pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}