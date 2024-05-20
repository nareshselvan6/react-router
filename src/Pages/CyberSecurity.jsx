import React from 'react';
import Card from '../Components/Card';
import "../Components/Card.css";

const CyberSecurity = ({data}) => {
    const filterdata=data.filter((ele)=>ele.head==="cs")
    return (
        <div>
            <h1>CyberSecurity</h1>
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

export default CyberSecurity;