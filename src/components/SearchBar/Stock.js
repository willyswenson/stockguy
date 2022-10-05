// import React, {useState, useEffect} from 'react';
// import DataList from '../../DataList';
import { useState } from "react";
import axios from "axios";

const Component = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const key = "3d939508fa26fc34f08c93b0ecb497d2";
  const baseUrl = `https://financialmodelingprep.com/api/v3/ratios-ttm/${query}?apikey=${key}`;

  const getData = async () => {
    // let zipperFunction = [];
    // const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    const { data } = await axios.get(baseUrl);
    setData(data);
    console.log(data);
};


return (
<>
  <input value={query} onChange={(e) => setQuery(e.target.value)} />  
  <button disabled={!query} onClick={(e) => getData()}>
    Click to fetch
  </button>
  {JSON.stringify(data)}
</>
);
};

export default Component;

// class Stock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             stockVal: [],
//             stockName: [],
//             zipper: [],
//             input:'AAPL'

//         }
//     }

//     componentDidMount() {
//         this.fetchStock();
//     }

//     fetchStock() {
//         const pointerToThis = this;
//         const API_KEY = '3d939508fa26fc34f08c93b0ecb497d2';
//         let API_CALL = `https://financialmodelingprep.com/api/v3/ratios-ttm/${this.state.input}?apikey=${API_KEY}`;
        // let stockValFunction = [];
        // let stockNameFunction = [];
        // let zipperFunction = [];
        // const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);




//         fetch(API_CALL)
//             .then((res) => res.json())
//             .then((data) => {
                // var json = data[0]
                // Object.keys(json).forEach(function(key) {
                //     stockValFunction.push(json[key]);
                // });
                // for (var key in data[0]) {
                //     stockNameFunction.push(key);
                // }
                // zipperFunction = (zip(stockNameFunction, stockValFunction));

//             pointerToThis.setState({
//                 stockVal: stockValFunction,
//                 stockName: stockNameFunction,
//                 zipper: zipperFunction
//                 });
//             });
//     }

//     render() {
//         return (
//             <div>
                // <h2 className = "dataGuy">  
                //     {this.state.zipper.map((response) => (
                //         <DataList response={ response } />
                //     ))}
//                 </h2>
//                 <input>
//                 </input>
                    
//             </div>
//         )
//     }
// }

// export default Stock;

// const Stock = () => {

//     const [zipper, setZipper] = useState([]);

//     useEffect(() => {

//         const API_KEY = '3d939508fa26fc34f08c93b0ecb497d2';
//         let stockValFunction = [];
//         let stockNameFunction = [];
//         let zipperFunction = [];
//         const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);


//         fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/AAPL?apikey=${API_KEY}`)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error(
//                 `This is an HTTP error: The status is ${response.status}`
//               );
//             }
//             return response.json();
//           })


//           .then((data) => {
//             var json = data[0]
//             Object.keys(json).forEach(function(key) {
//                 stockValFunction.push(json[key]);
//             });
//             for (var key in data[0]) {
//                 stockNameFunction.push(key);
//             }

//             zipperFunction = (zip(stockNameFunction, stockValFunction));
//             setZipper(zipperFunction);
//           })
//       }, []);



//     return (
//         <div>
          
//             <h2 className = "dataGuy">  
//                 {zipper.map((response) => (
//                     <DataList response={ response } />
//                 ))}
//             </h2>
                
//         </div>
//     )

// }

// export default Stock



