import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';


export const Faqs = ({ question, active, answer, onClick }) => {
  
    const toggle = () => {
        onClick(question);
    }

    return (
            <li className='py-3 w-full h-fit'>
                <div className='flex justify-between' onClick={toggle}>
                    <h2 className={`w-70% max-sm:w-72 font-semibold hover:text-[#ff61c8] cursor-pointer ${active ? 'text-[#ff61c8]' : 'text-[#000000]'}`} >{question}</h2>
                    <button className={`${active ? "text-pink-500" : ""} "text-pink-500"`}>
                        {active ? <FaCircleMinus  /> : <FaCirclePlus className='text-pink-500'/>}
                    </button>
                </div>
                <p className={`text-start py-3 mb-3 leading-tight ${active ? 'block' : 'hidden'} text-[#3f3c3e]`}>{answer}</p>
            </li>
    )
}
