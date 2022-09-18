import {useEffect, useState}from 'react'
import axios from 'axios'   

const Api =() => {
    const [anime, setAnime] = useState([]);
    const [err, setErr] = useState([]);

    useEffect(() => {
      const getAnimes = () => {
        axios.get("https://kitsu.io/api/edge/anime")
        .then((response) => setAnime(response.data))
        .catch((error) => setErr(error))
      }
      getAnimes()
    }, [])
  return[anime,err]
}

export default Api