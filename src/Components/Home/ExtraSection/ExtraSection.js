import React from 'react';
import img1 from'../../../assets/img/tracking.png'
import img2 from'../../../assets/img/Shiping.png'
import img3 from'../../../assets/img/Delivary.png'

const ExtraSection = () => {
    return (
        <div className='m-10 pt-15'>
            <h3 className='text-center  text-2xl text-primary'>WHAT WE DO</h3>
            <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="">
                    <div className='text-center'>
                        <img src={img1} className="px-20" alt="" />
                       <div className="pt-4">
                       <h3 className=' text-primary'><strong>Truck Selection</strong></h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
                       </div>
                    </div>
                </div>
                <div className="text-center">
                <img src={img2} className="px-20" alt="" />
                <div className='pt-4'>
                <h3 className=' text-primary'><strong>Truck Order</strong></h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
                </div>
                </div>
                <div className="text-center">
                <img src={img3} className="px-20" alt="" />
             <div className='pt-4'>
             <h3 className=' text-primary'><strong>Express Delivery</strong></h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
             </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;