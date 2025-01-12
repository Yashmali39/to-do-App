import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeFromPaste } from '../features/Paste/PasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
import { FaCopy, FaEdit, FaEye, FaShareAlt, FaTrash } from 'react-icons/fa';
import { RWebShare } from 'react-web-share';
const Pastes = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    //const formattedDate = format(new Date(pastes.createdAt), 'MM/dd/yyyy');
    console.log(pastes);
    const dispatch = useDispatch();
    const filterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
    function handleDelete(pasteId) {
        dispatch(removeFromPaste(pasteId));
    }
    function handleCopy(content) {
        navigator.clipboard.writeText(content);
        toast.success("Copied To Clipboard")
    }
    function handleShare(pasteId) {

    }


    return (
        <div className='min-h-screen bg-slate-700 '>
            <div className='min-w-full flex justify-center'>
                <input className='min-w-[500px] h-7  rounded-xl mt-5 p-2'
                    type="search"
                    placeholder='  Search here'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='min-w-[100vw] flex flex-col items-center mt-5 gap-5 p-10'>
                {
                    filterData.length > 0 &&
                    filterData.map(
                        (paste) => {
                            return (
                                <div key={paste?._id} className='border border-white text-white flex'>
                                    <div className=' min-w-[700px] flex flex-col  gap-5' >
                                        <div className='ml-2 text-2xl font-bold'>
                                            {paste.title}
                                        </div>
                                        <div className=' ml-2 overflow-clip text-ellipsis whitespace-nowrap h-6 w-[650px]'>
                                            {paste.content}
                                        </div>
                                        <div className='flex gap-7'>
                                            <button className='bg-slate-800 m-1 p-1 rounded-xl hover:text-violet-600'>
                                                <NavLink to={`/?pasteId=${paste?._id}`}><FaEdit />Edit</NavLink>
                                            </button>
                                            <button className='bg-slate-800 m-1 p-1 rounded-xl hover:text-violet-600'>
                                                <NavLink to={`/viewpaste/${paste?._id}`}><FaEye />View</NavLink>
                                            </button>
                                            <button className='bg-slate-800 m-1 p-1 rounded-xl hover:text-violet-600' onClick={() => handleDelete(paste?._id)}>
                                                <FaTrash /> Delete
                                            </button>
                                            <button className='bg-slate-800 m-1 p-1 rounded-xl hover:text-violet-600' onClick={() => handleCopy(paste?.content)} >
                                                <FaCopy />Copy
                                            </button>
                                            <button className='bg-slate-800 m-1 p-1 rounded-xl hover:text-violet-600' onClick={() => handleShare(paste?._id)}>
                                                <RWebShare
                                                    data={{
                                                        text: "ewbPaste",
                                                        url: "http://localhost:5173/pastes/paste?._id",
                                                        title: "paste",
                                                    }}
                                                    onClick={() =>
                                                        console.log("shared successfully!")
                                                    }
                                                >
                                                    <button><FaShareAlt />Share</button>
                                                </RWebShare>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='m-2'>
                                        {format(new Date(paste.createdAt), 'dd/MM/yyyy')}
                                    </div>
                                </div>

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Pastes