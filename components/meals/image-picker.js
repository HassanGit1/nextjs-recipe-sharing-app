'use client'

import Image from "next/image";
import { useRef, useState } from "react"

export default function ImagePicker({label, name}) {

    const[pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    function handlePickClick() {
         imageInput.current.click()
    }
    function handleImageChange(event) {
    const file = event.target.files[0]

    if(!file){
        setPickedImage(null)
        return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
        setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
    }
    return(
        <div className="flex items-start mt-4 gap-6">
            <label htmlFor={name}>
                {label}
            </label>
          <div className=" flex w-40 h-40 border-2 border-solid 
           justify-center items-center
          text-center relative text-gray-800">
            {!pickedImage && 
            <p className="p-4 font-bold m-0">No Image Picked Yet</p>}
            {pickedImage && 
            <Image  
            className="object-cover"
            src={pickedImage}
            alt="The image Slected by the user"
            fill/>}
          </div>
         <div>
            <input className="hidden"
              type="file"
              id={name}
              accept="img/png, img/jpg, img/jpeg"
              name={name} 
              ref={imageInput}    
              onChange={handleImageChange}
                />
            <button className="inline-block py-2 text-lg px-4
            rounded-md text-white font-bold border-0 text-center
            border-gray-400 hover:bg-gray-800 bg-blue-400"
            type="button"
            onClick={handlePickClick}>
            Pick an Image    
            </button>    
         </div>
        </div>
    )
}