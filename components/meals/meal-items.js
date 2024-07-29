import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full
     rounded-md shadow-2xl overflow-hidden text-gray-900 ">
      <header>
        <div className='relative h-60'>
          <Image className='object-cover' src={image} alt={title} fill />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4">
          <h2 className='text-sm text-green-500 italic '>{title}</h2>
          <p className='font-bold'>by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 pr-4 pb-0 pl-4">{summary}</p>
        <div className="p-4 text-right">
          <Link className='inline-block mt-4 py-2 px-4 
          rounded-lg bg-red-600 text-white font-bold hover:bg-gray-800 '
          href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}