import React from 'react'

const Product = ({link,img}) => {
  return (
    <div style={{display:'flex'}}>
        <a href={link}>
            <img src={img} alt="" />
        </a>

    </div>
  )
}

export default Product