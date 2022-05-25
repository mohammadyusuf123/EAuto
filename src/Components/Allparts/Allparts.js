import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Singleparts from '../Singleparts/Singleparts';

const Allparts = () => {
    const navigate=useNavigate()
    const[parts,setParts]=useParts()
    return (
        <div >
           
             <h1 className='text-center text-2xl text-primary mt-16'> All Parts</h1>
           <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-5  m-8">
           {
                    window.location.pathname=== '/parts'? parts.map(singleParts=><Singleparts  key={singleParts._id} singleParts={singleParts}></Singleparts>):parts.slice(0,6).map(singleParts=><Singleparts  key={singleParts._id} singleParts={singleParts}></Singleparts>)
                }
              <div className="w-full max-auto">
              {
                     window.location.pathname!== '/parts'&&<div> <button  onClick={()=>{navigate('/parts')}} class="btn  text-white   btn-primary    ">See All Parts</button></div>
                }
              </div>

           </div>
        </div>
    );
};

export default Allparts;