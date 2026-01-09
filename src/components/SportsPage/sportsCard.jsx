'use client'
import { IconExternalLink, IconHeart } from '@tabler/icons-react';
import { useState } from 'react';

function SportsCard({ beach }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 my-4">
            <img className="w-full" src={beach.imageLink} alt={beach.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{beach.name}</div>
                <p className="text-gray-300 text-base">
                    {beach.description ? beach.description : 'No description available'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {beach.endPrice === beach.startPrice ? (
                    <span className='text-white'>
                        ₹ {beach.startPrice} per player
                    </span>
                ) : (
                    <span className='text-white'>
                        ₹ {beach.startPrice} - ₹ {beach.endPrice}
                    </span>
                )}
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="bg-gray-400 text-white text-center font-bold py-2 px-4 rounded w-[80%]">
                    Registrations Closed
                </div>
                <a href={'https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/Final+Rules+%26+Regulations.pdf'}
                    target='_blank'
                    className="transition ease-in duration-300 text-gray-500"
                    title="Rules and Regulations">
                    <IconExternalLink className="h-6 w-6" />
                </a>

            </div>
        </div>
    );
}

export default SportsCard;
