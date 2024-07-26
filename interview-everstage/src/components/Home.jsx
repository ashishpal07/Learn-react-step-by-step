import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from './Card';

export const Home = () => {

  const [result, setResult] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, [])

  const getData = async (url) => {
    const res = await axios(url);
    setInfo(res.data.info);
    setResult(res.data.results)
  }

  const nextHandler = () => {
    getData(info.next)
  }

  const prevHandler = () => {
    getData(info.prev)
  }

  return (
    <div>
      <div className='flex gap-8 p-4 justify-between'>
       <button className='py-3 px-4 bg-blue-400 rounded-md' onClick={prevHandler}>Prev</button>
        <button className='py-3 px-4 bg-blue-400 rounded-md' onClick={nextHandler}>Next</button>
      </div>
      <div className='flex flex-wrap'>
        {result.map((res, index) => {
          console.log(res.url);
          return (
            <Link to={`/char-details/${res.id}`}>
              <Card res={res} key={index} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}



// https://rickandmortyapi.com/api/character/6
