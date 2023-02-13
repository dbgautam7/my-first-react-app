
import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import '../App.css';

function Products({ chocolate }) {
  const allItems = [
    { name: 'Adidas',cartCount:0, price: 700, img: 'https://cdn.pixabay.com/photo/2012/02/29/15/44/football-19115__340.jpg' },
    { name: 'Nike', cartCount:0, price: 900, img: 'https://cdn.pixabay.com/photo/2016/02/18/14/30/football-1207235__340.jpg' },
    { name: 'Puma', cartCount:0, price: 800, img: 'https://cdn.pixabay.com/photo/2012/02/29/16/12/football-19448__340.jpg' },
    { name: 'Nivia', cartCount:0, price: 400, img: 'https://cdn.pixabay.com/photo/2019/09/03/16/06/sport-4449736__340.jpg' },
    { name: 'Kika', cartCount:0, price: 100, img: 'https://cdn.pixabay.com/photo/2012/02/29/15/53/football-19221__340.jpg' },

  ]

  const [favLists, setFavLists] = useState([]);
  const [productList, setProductList] = useState(allItems);

  const newCount = (value) => {
    const newVal = favLists.filter((item, id) => {
      return item.name === value.name
    })

    if (newVal.length > 0) {
      const tempFavList = [...favLists]
      const newVal = tempFavList.filter((item, id) => {
        return item.name !== value.name
      })
      setFavLists(newVal)
    } else {
      const tempFavList = [...favLists]
      tempFavList.push(value)
      setFavLists(tempFavList)
    }


    // setTotalLikes(totalLikes+value)
  }

  const addCart = (id) => {
    const tempProductList = [...productList]
    tempProductList[id]['cartCount']++
    setProductList(tempProductList)
  }

  const delCart=(id)=>{
    const tempProductList=[...productList]
    tempProductList[id]['cartCount']--
    setProductList(tempProductList)

  }

  const calculateGrandTotal=(item,id)=>{
    const tempProductList=[...productList]
    const grandTotal=tempProductList.reduce((total,curr)=>{
      total= total + (curr.cartCount*curr.price)
      return total
    },0)
    return grandTotal
  }

  

  return (
    <>
      <div style={{ display: 'flex' }}>
        {productList.map((item, id) => {
          return (<Card item={item}
            id={id}
            addCart={addCart}
            newCount={newCount} />)
        }
        )}

      </div>
      <div className="Fav">
        Favorites list: {favLists.length}
        {favLists.map((item, id) => <ul><li>{item.name}</li></ul>)}
      </div>


      <table border='1px'>
        <tr>
          <th>Product's Name</th>
          <th>Quantity</th>
          <th>Price per Item</th>
          <th>Total Price</th>
        </tr>

        {productList.map((item, id) => {
          if(item.cartCount===0){
            return null
          }
          return (
            <tr>
              <td>{item.name }</td>
              
              <td><button onClick={()=>delCart(id)}>-</button>{item.cartCount}<button onClick={()=>addCart(id)}>+</button></td>
              
              <td>{item.price}$</td>
              <td>{item.cartCount*item.price}$</td>
            </tr>
          )
        })}
        <h7 id="center">Grand Total  ={calculateGrandTotal()}$</h7>

      </table>

    </>
  );
}
export default Products;
