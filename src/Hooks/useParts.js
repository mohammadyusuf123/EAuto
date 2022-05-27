import React, { useEffect, useState } from 'react';

const useParts = () => {
    const[parts,setParts]=useState([])
    useEffect(()=>{
        fetch('https://immense-plateau-89741.herokuapp.com/parts')
        .then(response=>response.json())
        .then(data=>setParts(data))
    },[])
    return [parts,setParts]
};

export default useParts;