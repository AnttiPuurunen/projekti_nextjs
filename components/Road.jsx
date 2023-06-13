"use client";

import React from 'react'
import Link from 'next/link'

const Road = ({ id, name }) => {

    return (
        <div className='road_search_results'>
            <p>{name}</p>
            <Link className='outline_button' href={'/details/' + id}>Katso tiedot</Link>
        </div>
    );
};

export default Road