// import React from 'react'
// import "../Styling/SupportItems.css"
// import axios from 'axios'
// import {useState, useEffect } from 'react'

// export default function SupportItems() {
// // // state variable for items
// const [item, setItem] = useState([])
// // // need to call fetch data function

// let guide = 'http://127.0.0.1:8000'
// useEffect(()=> {
//   axios.get('http://127.0.0.1:8000/pokemart_list.json')
//   .then(res =>{
//     // console.log(res.data)
//     setItem(res.data)
//   })
// .catch(err => {
//   console.log(err)
// })
// }, [])
// console.log(item)
// // // creating fetchdata
// // const fetchData = async () => {
// //   const {data} = await axios.get('http://127.0.0.1:8000/pokemart_list.json')
// //   setItems(data)
// // }
// //   axios.get('http://127.0.0.1:8000/pokemart_list.json')
// //     .then(res =>{
// //       console.log(res.data)
// //       // setPokemon(res.data)
// //     })
// //   .catch(err => {
// //     console.log(err)
// // })

// console.log('image is', item[1].image)
//   return (
//     <div>
//    <p>{item[1].name}</p>
//    <img src={`127.0.0.1:8000${item[1].image}`} alt = "image"/>
//    <p>{item[1].description}</p>
//    </div>
//   )
// }
