import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../features/Paste/PasteSlice';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes)
    function handleCreatePaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
            
        }

        if (pasteId) {
            //Update
            dispatch(updateToPaste(paste));
        }
        else {
            //Create
            dispatch(addToPaste(paste));  
        }
        //Afer creation or updation 
        setTitle('');
        setValue('');
        setSearchParams({});

    }
useEffect(() => {
    if(pasteId){
        const paste = allPastes.find((p) => p._id === pasteId)
        setTitle(paste.title)
        setValue(paste.content)
    }
}, [pasteId])


    return (
        <div className='min-h-screen flex flex-col gap-5  bg-slate-700'>
            <div className='flex justify-center mt-5'>
                <input className='border border-gray-800 rounded-xl place-content-evenly mt-1 w-[350px] h-8 p-2'
                    type="text"
                    placeholder='Enter Title Here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='bg-slate-600 text-white m-1 p-1 rounded-xl hover:text-violet-600 hover:bg-zinc-400' onClick={handleCreatePaste}>
                    {pasteId ? "Update My Paste" : "Create My Paste"}
                </button>
            </div>
            <div className='min-w-full flex justify-center '>
                <textarea className='border border-slate-600 ml-2 rounded-2xl
                min-w-[500px] p-2'
                    value={value}
                    placeholder='Enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20} />
            </div>
        </div>
    )
}

export default Home