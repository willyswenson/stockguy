import React, {useState} from 'react'
import { Heading, Search, SearchButton } from './SearchBarElements'


import axios from "axios";
import Cardmaker from './Cardmaker';

const Component = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const key = "64a547ed6604b2132ffdf6b2bdc539ca";
  const baseUrl = `https://financialmodelingprep.com/api/v3/ratios/${query}?apikey=${key}`;

  const getData = async () => {
    // let zipperFunction = [];
    // const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    const { data } = await axios.get(baseUrl);
    setData(data);
    setIsClicked(true);
};


return (
<>
  <Heading> Stock Search </Heading>
  <Search value={query} onChange={(e) => setQuery(e.target.value)} />  
  <SearchButton disabled={!query} onClick={(e) => getData()}>
    Click to fetch
  </SearchButton>
  {/* {JSON.stringify(data)} */}
  {isClicked ? (
    <p> {Cardmaker(data)} </p> //this doesnt work
  ) : (
    <p> Type in stock ticker with all capital letters </p>
  )}

</>
);
};

export default Component;

// {isClicked ? (
//   <p> {Cardmaker(data)} <p/>
// ) : (
//   <p> do nothing </p>
// )}