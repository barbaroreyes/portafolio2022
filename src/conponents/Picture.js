import React from 'react';

const Picture = () => {
  return (
    <div style ={{
        
        width:"18%" 
        ,height:"80px",
        borderRadius:"50%" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        }}>
      <img  style={{width:"100%",borderRadius:"50%" ,objectFit:"fill",height:"80px"}}src ="https://avatars.githubusercontent.com/u/48423441?v=4" alt=""/>
    </div>
  );
}

export default Picture;
