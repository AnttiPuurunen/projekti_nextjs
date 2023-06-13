"use client";

import React, { useState, useEffect } from 'react'
import Road from "./Road";

const RoadList = ({ search }) => {
    return (
        <div className='roads_layout'>
            {search.map((item) => (
                <Road
                    key={item.id}
                    id={item.id}
                    name={item.properties.name.replace(/_/g, " ")}
                />
            ))
            }
        </div>
    );
};

const RoadData = () => {

    const [allRoads, setAllRoads] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchRoadData = async () => {
        try {
            const response = await fetch("https://tie.digitraffic.fi/api/weathercam/v1/stations");
            
            if (!response.ok) {
                console.log("Tapahtui virhe: " + response.status);
            }

            const data = await response.json();
            setAllRoads(data.features);
        } catch (error) {
            console.log("Tapahtui virhe: " + error);
        }   
    };

    useEffect(() => {
        fetchRoadData();
    }, []);

    const filterSearchData = (search) => {
        return allRoads.filter(
            (item) =>
                item.properties.name.toLowerCase().includes(search.toLowerCase())
        )
    };

    const handleSearchData = (e) => {
        setSearchText(e.target.value);

        const results = filterSearchData(e.target.value);
        setSearchResults(results);
    };

    return (
        <div>
            <h2 className='secondary_header_text flex-center'>Hae tiekameroiden ja niiden lähimpien sääasemien tietoja</h2>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Etsi paikan/tien nimellä'
                    value={searchText}
                    onChange={handleSearchData}
                    className='search_input'
                />
            </form>
            {searchText ? (
                <RoadList
                    search={searchResults} />
            ) : (
                <div className='flex-center pt-4'>
                    <p>Löydettiin {allRoads.length} kpl kohteita. Rajaa hakua.</p>
                </div>
            )}
        </div>
    );
};

export default RoadData