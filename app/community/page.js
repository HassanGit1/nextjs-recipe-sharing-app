import Image from 'next/image';

import mealIcon from '@/assets/meals.jpg';
import communityIcon from '@/assets/community.jpg';
import eventsIcon from '@/assets/friends.jpg';

export default function CommunityPage() {
  return (
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto max-w-6xl text-gray-800 text-center text-2xl">
        <h1 className='font-bold text-6xl mb-8'>
          One shared passion: <span className='text-red-600'>Food</span>
        </h1>
        <p className="text-gray-800 text-2xl">Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-11/12 max-w-2xl my-0 mx-auto text-center ">
        <h2 className='font-bold text-5xl text-red-600'>Community Perks</h2>
        <ul className="p-0 my-12 mx-0">
          <li className='flex flex-col items-center'>
            <Image className='w-60 mb-8 h-60 object-contain' src={mealIcon} alt="A delicious meal" />
            <p className='font-bold text-2xl m-0 text-gray-800'>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image className='w-60 mb-8 h-60 object-contain' src={communityIcon} alt="A crowd of people, cooking" />
            <p className='font-bold text-2xl m-0 text-gray-800'>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image className='w-60 mb-8 h-60 object-contain'
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className='font-bold text-2xl m-0 text-gray-800'>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}