import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Temp = () => {

    //   const [loading, setLoading] = useState(false);
    // const [showType, setShowType] = useState('table');
    
  const [store, setStore] = useState([]);
  useEffect(() => {
    // setLoading(true);
    axios
      .get('http://localhost:5555/store')
      .then((res) => {
        // console.log(res.data.data)
        // setStore(res.data.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  }, []);

  return (
    <main>
        new api using database
    </main>
  )
}

export default Temp


