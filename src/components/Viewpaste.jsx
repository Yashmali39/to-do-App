import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../features/Paste/PasteSlice';
import toast from 'react-hot-toast';
const Viewpaste = () => {



    const [title, setTitle] = useState("");

    const { id } = useParams();
    const allPastes = useSelector((state) => state.paste.pastes)
    const paste = allPastes.filter((p) => p._id === id)[0];
    console.log(paste)

    return (
        <div className='min-h-screen flex flex-col gap-5  bg-slate-700 '>

            <div className='text-4xl font-bold ml-2 mt-2 text-white'>
                {paste.title}
            </div>
            <div className='ml-2 text-lg text-[silver]'>
                {paste.content}
            </div>


        </div>
    )
}

export default Viewpaste