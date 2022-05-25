import React, { useEffect, useState } from 'react';

const useParts = () => {
    const[parts,setParts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/parts')
        .then(response=>response.json())
        .then(data=>setParts(data))
    },[])
    return [parts,setParts]
};

export default useParts;