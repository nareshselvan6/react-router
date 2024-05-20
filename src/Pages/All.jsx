import React from 'react';
import Card from '../Components/Card'
import "../Pages/Style.css"
import "../Components/Card.css";

const All = ({data}) => {
    return (
        <>
        <h1>All Courses</h1>
        <div className='parent'> 
            {data.map((element,index)=>{
                return(
                    <Card element={element} index={index}/>
                )
            })}   
            </div>
            
        </>
    );
};

export default All;