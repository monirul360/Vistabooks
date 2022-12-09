import React from 'react';
import img from './../../../Image/images/2.png';
const User = () => {
    return (
        <>
            <div className="news-details-user py-3">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>by Jonib Smith</h3>
                    <p className='mb-0 mt-0'>25 October 2022 - <span>3 min Read</span></p>
                </div>
            </div>
        </>
    );
};

export default User;