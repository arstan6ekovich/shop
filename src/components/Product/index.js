import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Data";

const Product = () => {
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();

  const getProduct = (el) => {
    dispatch({ type: "ADD_PRODUCT", payload: el });
  };

  const getBacket = (data) => {
    dispatch({ type: "ADD_BASKET", payload: data });
    console.log(data);
  };

  useEffect(() => {
    getProduct(data);
  }, []);
  return (
    <div id="products">
      {product.map((el) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={el.image} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {el.description}
            </p>
            {/* <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              > */}
            <button
              onClick={() => getBacket(el)}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add Backet
              </span>
            </button>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
            {/* </svg> */}
            {/* </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
