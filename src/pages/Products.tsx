import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tproducts } from "../types/app";

function Products() {
  const [products, setProducts] = useState<Tproducts>([]);

  const getAllProducts = async () => {
    const res = await fetch('https://crud-project-paou.onrender.com/api/products');
    const data = await res.json();
    setProducts(data.data.products)
  }
  useEffect(() => {
    getAllProducts();
  }, [])

  const deleteProduct = async (productId: string) => {
    const res = await fetch(`https://crud-project-paou.onrender.com/api/products/${productId}`, {
      method: 'DELETE'
    });
    await res.json();
    getAllProducts()
  }
  
  return (
    <div>
      <div className="container">
        <h2 className="text-[35px] text-center font-bold my-5">Products Page</h2>
        <div className="content p-5">
          <Link to='/add/products' className="block w-fit p-2 bg-green-500 text-white rounded-[10px] mb-5">Add Products</Link>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={product.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.id}
                    </th>
                    <td className="px-6 py-4">
                      {product.title}
                    </td>
                    <td className="px-6 py-4">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      {product.description}
                    </td>
                    <td className="px-6 py-4">
                      {product.category}
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/edit/products/${product._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">Edit</Link>
                      <Link to={`/view/products/${product._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">View</Link>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteProduct(product._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;