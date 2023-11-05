import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyCart from './EmptyCart';
import { add,remove,decreaseProduct } from '../Store/cartSlice';
import { Link } from 'react-router-dom';

// === toast POP-UP ===
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// css tailwind classes
const qtyBtnCss = 'border border-black sm:w-[22px] px-[4px]';
const special = 'sm:flex hidden';

const Cart = () => {

  const [totAmt,setTotAlamt] = useState(0);
  
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removefun = (id) => {
    notify();
    dispatch(remove(id))
  }
  const increaseQnty = (item) => {
    dispatch(add(item));
  }
  const decreaseQnty = (item) => {
    dispatch(decreaseProduct(item));
    console.log(totalamt);
  }

  let totalamt = 0;
  useEffect(() => {
    items.forEach((pro) => {
      totalamt += pro.price*pro.qnty;
    });
    totalamt = Number(totalamt.toFixed(2));
    setTotAlamt(totalamt);
    // console.log("new totla amt = ",totalamt);
  }, [increaseQnty,decreaseQnty])
  
  // === toast function ===
  const notify = () => toast.error('Item removed from 🛒', {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    });
      
  return(
  <section className='max-w-[1380px] mx-auto'>
      
  {
    items.length === 0 ?

    <EmptyCart /> : 


    <main className=''>

      <div className=''>
        <h1 className='border-b-2 border-slate-500  mt-4 pb-2 text-2xl text-purple-500 font-bold max-w-[260px] text-center mx-auto'>All tour 🛒 cart items</h1>

      {  
        items.map((item) => {
          return(
            <>
            <div className='sm:p-4 pr-2 pl-1 w-full border-b-2 border-gray-300 flex items-center justify-between sm:text-lg text-xs' key={item.id}>


              <div className='flex items-center justify-center gap-x-1 my-4'>
              {/* ---- img div ---- */}

              <div className='flexCenter sm:w-[180px] w-[80px] '>
                <img className='sm:h-[80px] h-[60px]' src={item.image} alt="itemimg" />

              </div>

              {/* --- div content ---  */}
              <div className='flex flex-col justify-center '>
              <h1 className=' font-semibold'>{item.title}</h1>
              <h2 style={{padding:"2px 0px", fontWeight:500}}> Price ₹ <b className='sm:text-xl text-md'> {item.price} </b></h2>            
              <h3 style={{padding:"2px 0px"}}>Rating {item.rating.rate} ★</h3>
              <div className='flex sm:gap-x-2 gap-x-1'>
                <h2>Quantity</h2>
                <button className={`${qtyBtnCss}`} onClick={() => {decreaseQnty(item)}}> - </button>
                <h2> {item.qnty} </h2>
                <button className={`${qtyBtnCss}`} onClick={() => {increaseQnty(item)}}> + </button>
              </div>
              </div>
              </div>

              {/* --- remove icon --- */}
              <div className='ml-2' >
                <button onClick={() => removefun(item.id)}>
                
                <i className=" text-lg sm:text-xl text-red-500 hover:cursor-pointer ri-delete-bin-line" ></i>
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

            
            </div>
            </>
          )
      })}
    
      {/* ====== Total amount to pay ====== */}
      <div className='sm:text-2xl text-lg sm:px-6 px-3 flex flex-col gap-y-4 my-5'>

        <h1 className=''>Total amount → ₹ <span className='font-bold'>  {totAmt} </span> </h1>
        <Link to='/' className=' text-blue-500 hover:underline w-fit hover:font-bold font-semibold transition-all'> Continue Shopping →  </Link>
      </div>

      </div>

    </main>    
  }

  </section>
  )
}

export default Cart;