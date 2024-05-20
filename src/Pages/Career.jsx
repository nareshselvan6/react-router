import React from 'react';
import Card from '../Components/Card';
import "../Components/Card.css";

const Career = ({data}) => {
    const filtereddata=data.filter((fil)=>fil.head==="career")
    return (
        <div>
            <h1>Career</h1>
            <div className='parent'> 
            {filtereddata.map((element,index)=>{
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

export default Career;