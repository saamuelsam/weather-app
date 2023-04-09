import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {

    const {
        location,
        current,
    } = data;

    return (

        <div className='bg-white p-6 mt-12 rounded-lg shadow-lg min-w-[220px]'>

            <div>
                <span className='block text-lg font-bold text-stone-700'>{location.name}</span>
                <span className='text-slate-400 text-sm font-medium'>{`${location.region}, ${location.country}`}</span>
            </div>

            <div className='text-slate-800 font-bold flex justify-center mt-5 mb-2'>
                <span className='text-8xl'>{current.temp_c}</span>
                <span className='text-3xl mt-2'>°C</span>
            </div>

            <div className='flex justify-center flex-col items-center'>
                <img src={current.condition.icon} alt="weather icon" />
                <span className='text-slate-800 font-medium'>{current.condition.text}</span>
            </div>

        </div>
    );
}

export default Card;
Card.propTypes = {
    data: propTypes.object,
}.isRequired;
