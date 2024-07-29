import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <header className="flex gap-12 mb-28 my-12 mx-auto max-w-5xl">
      <div className="w-4/5 h-96">
      <ImageSlideshow/>
      </div>
      <div>
        <div className="text-red-600 text-2xl">
        <h1 
        className="text-3xl mt-12 mb-4 font-bold tracking-widest uppercase">
          NextLevel Food for NextLevel Foodies</h1>
        <p className="text-gray-800 text-xl">Taste & share food from all over the world.</p>
        </div>
        <div className="text-xl mt-4 flex gap-4">
        <Link className="inline-block py-2 mt-4 my-2 text-red-600 font-normal
         hover:bg-transparent hover:text-gray-800"
        href="/community">
          Join the Community
          </Link>
        <Link className="inline-block py-2 text-2xl px-4 mt-4 my-2 mx-4
        rounded-lg text-white font-bold
         hover:bg-gray-800 bg-red-600" 
        href="/meals"
        >Explore Meals
        </Link>
        </div>
        </div>
    </header>
    <main>
    <section
     className="flex flex-col text-gray-800 text-2xl max-w-3xl w-11/12 my-8 mx-auto text-center">
          <h2 className="text-gray-800 font-bold mb-8">How it works</h2>
          <p  className="text-gray-400">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-gray-400"> 
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section
        className="flex flex-col text-gray-800 text-2xl max-w-3xl w-11/12 my-8 mx-auto text-center">
          <h2 className="text-gray-800 font-bold mb-8">Why NextLevel Food?</h2>
          <p className="text-gray-400">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-gray-400">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
   </>
  );
}
