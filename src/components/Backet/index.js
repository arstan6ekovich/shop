import React, { useEffect, useInsertionEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/index";

const Backet = () => {
  const { basket } = useSelector((s) => s);

  // let resultLocal = JSON.parse(localStorage.getItem("product")) || [];
  // resultLocal.push(basket);
  // localStorage.setItem("product", JSON.stringify(resultLocal));

  return (
    <div id="basket">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product IMG
              </th>
              <th scope="col" class="px-6 py-3">
                Product NAME
              </th>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {basket.map((el) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img style={{ width: "50px" }} src={el.image} alt="img" />
                </th>
                <td class="px-6 py-4">{el.title}</td>
                <td class="px-6 py-4">{el.id}</td>
                <td class="px-6 py-4">{el.price}$</td>
                <td class="px-6 py-4 text-right">
                  <button
                    onClick={() => basket()}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Backet;
