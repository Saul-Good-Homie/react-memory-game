import React from 'react'
import StockMountain from "../assets/stock-mountain-photo.jpeg"

const GridBlock = () => {
  return (
    <div className="section flex">
      <div>
				<img src={StockMountain} className="card-image" alt="stock photo of mountain from the sky" />
      </div>
        <h3>
          subtitle here
        </h3>
    </div>
  )
}

export default GridBlock
