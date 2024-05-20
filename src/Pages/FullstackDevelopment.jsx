import React from 'react';
import Card from '../Components/Card';
import "../Components/Card.css";

const FullstackDevelopment = ({data}) => {
    const filterdata=data.filter((ele)=>ele.head==="fsd")
    return (
        <div>
            
            <h1>FullstackDevelopment</h1>
            <div className='parent'> 
            {filterdata.map((element,index)=>{
                return(
                    <div key={index}>
                        <Card element={element} index={index}/>
                    </div>
                )
            })}
            </div>

        </div>
    );
};

export default FullstackDevelopment;