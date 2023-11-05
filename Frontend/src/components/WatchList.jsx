import React from 'react'
import { Link } from 'react-router-dom'
import { add } from '../Store/cartSlice';
import { useSelector,useDispatch } from 'react-redux'
import { removeWl } from '../Store/watchListSlice';

// === toast POP-UP ===
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const qtyBtnCss = 'border border-black sm:w-[22px] px-[4px]';
const Favourite = () => {

  const favProducts = useSelector((state) => state.fav);

  const dispatch = useDispatch();
  const removeWlFun = (product) =>{
    removenotify('Item removed');
    dispatch(removeWl(product));
  }

  const addToCartFun = (product) =>{
    notify('Item added to 🛒');
    dispatch(add(product));
  }
  // ======== toast ========
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

  const removenotify = (content) => toast.error(content, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  return ( 
    <section>

    {
      favProducts.length === 0 
      ? 
      <h1 className='text-center font-bold text-2xl my-6'>No Item addedd to Watch List.</h1> 
      :
      <div>
        <h1 className='text-center font-bold text-2xl my-6'> Item addedd to Watch List.</h1> 
      {
        favProducts.map((item) => {
          return(
          <main className='sm:p-4 pr-2 pl-1 w-full border-b-2 border-gray-300 flex items-center justify-between sm:text-lg text-xs' key={item.id}>


          <div className='flex items-center justify-center gap-x-1 my-4'>
              
          {/* ---- img div ---- */}
          <div className='flexCenter sm:w-[180px] w-[80px] '>
            <img className='sm:h-[80px] h-[60px]' src={item.image} alt="itemimg" />

          </div>

          {/* --- div content ---  */}
          <div className='flex flex-col justify-center '>
          <h1 className=' font-semibold'>{item.title}</h1>
          <h2 style={{padding:"2px 0px", fontWeight:500}}>Price ₹ <b className='sm:text-xl text-md'> {item.price} </b></h2>            
          <h3 style={{padding:"2px 0px"}}>Rating {item.rating} ★</h3>
          </div>
          </div>

          {/* --- remove and cart icon --- */}
          <div className='text-lg sm:text-3xl flex flex-col items-center ml-2' >
            <button className='hover:cursor-pointer' onClick={()=>removeWlFun(item)}> 
              <i className=" ri-delete-bin-line text-red-500" />
            </button>
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
            <button onClick={()=>addToCartFun(item)}>
              <i className=" text-blue-500 hover:cursor-pointer ri-shopping-cart-2-line" ></i>
            </button>
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
          </div>

        </main>
          )})

      }
      </div>
      
    }


      <Link to='/' >
        <h2  className='w-fit mx-auto my-5 font-bold hover:text-sky-500 hover:underline text-xl'>Continue shopping →</h2>
      </Link>
    </section>
  )
}

export default Favourite