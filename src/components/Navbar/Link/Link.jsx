import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10 cursor-pointer hover:text-rose-500'>
                <a href={route.path}> {route.name} </a></li>
        </div>
    );
};

export default Link;