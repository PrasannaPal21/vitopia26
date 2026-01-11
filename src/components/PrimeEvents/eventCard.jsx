'use client'
import { IconExternalLink } from '@tabler/icons-react';

function EventCard({ beach }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 my-4 group">
            <div className="relative overflow-hidden">
                <img className="w-full transform group-hover:scale-105 transition-transform duration-500" src={beach.imageLink} alt={beach.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-60"></div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 font-anton tracking-wide">{beach.name}</div>
                <p className="text-gray-600 text-base font-outfit leading-relaxed">
                    {beach.description ? beach.description : 'No description available'}
                </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2 relative flex flex-col">
                <span className='text-gray-900'>
                    External Price: ₹ {beach.startPrice}
                </span>
                <span className='text-gray-900 float-right'>
                    Internal Price: ₹ {beach.endPrice}
                </span>
            </div> */}
            <div className="px-6 py-4 flex items-center justify-between mt-auto">
                <a className="bg-violet-600 hover:bg-violet-700 text-white text-center font-bold py-2.5 px-4 rounded-lg w-[80%] uppercase tracking-wider font-anton shadow-md shadow-violet-500/20 transition-all active:scale-95" href={beach.link} target='_blank'>
                    Registration
                </a>
                <a href={'https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/Vitopia+(Prime+Event+Rules)_2025+.pdf'}
                    target='_blank'
                    className="transition ease-in duration-300 text-gray-400 hover:text-violet-500 p-2"
                    title="Rules and Regulations">
                    <IconExternalLink className="h-6 w-6" />
                </a>

            </div>
        </div>
    );
}

export default EventCard;
