import React from 'react';
import DatePicker from 'sassy-datepicker';

const Calender = () => {
    const onChange = (date) => {
        console.log(date.toString());
    };
    return (
        <div className='flex  justify-center items-center my-10'>
            <div className='w-48'>
                <DatePicker onChange={onChange} />
            </div>
        </div>
    );
};

export default Calender;