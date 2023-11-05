import React, { useEffect, useState } from 'react'
import axios from 'axios'

import dataArr from './constant';

import { useDispatch } from 'react-redux';
import { addWl } from '../Store/watchListSlice';
import { add } from '../Store/cartSlice';
import ErrorFetchindAPI from './ErrorFetchindAPI';
import Loader from './Loader';

// === toast POP-UP ===
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { set } from 'mongoose';

// === btn css ===
const btnsCss = ' border-[1.2px] border-black p-[8px] hover:cursor-pointer hover:translate-y-[-1px] active:translate-y-[1px] transition-all buttonshadow font-semibold rounded-xl';

const Home = () => {

  const [loading,setLoading] = useState(false);
  const [arr,setArr] = useState([]);
//======== ⚠️ DB and backend ⚠️ ====
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/store')
      .then((res) => {
        // console.log(res.data.data)
        setArr(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  //====== ⚠️ Getting data without DB ⚠️ ======
  // useEffect(() => {
  //   setArr(dataArr);
  // }, [])
  
  
  const dispatch = useDispatch();
  const additem = (product) =>{
    dispatch(add(product));
    notify('Item added to 🛒');
  }

  const addToWatchList = (item) => {
    dispatch(addWl(item));
    notify('Added item to Watch-list');

  }

  // === toast function ===
  const notify = (content) => toast.success(content, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    });
    

  return  (
    <section>
    {
      loading ? <Loader /> : <></>
    }

    {
      arr.length===0 && !loading ? <ErrorFetchindAPI /> : 
      <>   
        {
          loading ? <></> : <h1 className=' text-center my-6 sm:text-2xl font-bold text-lg'>Welcome to the REDUX store.
          </h1>
        }
           

        <main className='div01main '>
        {
          
          arr.map((item) => {
            return(
              <div className=' mainitemdiv relative' key={item.id}>

                <div className='w-[100px] m-2 h-[174px] flexCenter'>
                <img className='w-full h-auto' src={item.image} alt="itemimg" />
                </div>

                <h1 style={{paddingBottom:"8px", fontWeight:600,textAlign:"center"}}>{item.title}</h1>

                <h2 style={{padding:"2px 0px", fontWeight:500}}>Price ₹ {item.price}</h2>

                <h3 style={{padding:"2px 0px"}}>Rating {item.rating} ★</h3>

              {/* === add to cart / watch list btns */}
              <div className='flex gap-x-2 my-2'>

                <button className={`${btnsCss} bg-purple-400`} 
                onClick={() => additem(item)} >Add to cart</button>

                <ToastContainer
                    position="top-left"
                    transition={Flip}
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <button className={btnsCss} onClick={()=>addToWatchList(item)} >Wish-list </button>
              </div>

              </div>
            )
          })
        }
        </main>
      </>

    }
    </section>
  )
}

export default Home