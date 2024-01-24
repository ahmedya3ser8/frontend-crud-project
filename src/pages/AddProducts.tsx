import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const submitedForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch('https://crud-project-paou.onrender.com/api/products', {
      method: 'POST',
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify({
        id,
        title,
        price,
        description: desc,
        category
      }),
    })
    await res.json();
    navigate('/products')

  }

  return (
    <div>
      <div className="container">
        <h2>Add Products</h2>
        <form className="max-w-sm mx-auto" onSubmit={submitedForm}>
          <div className="mb-5">
            <label htmlFor="id" className="block mb-2 font-medium text-[18px] text-gray-900">Product Id</label>
            <input type="number" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" name="id" required onChange={(e) => setId(+e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 font-medium text-[18px] text-gray-900">Product title</label>
            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" name="title" required onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block mb-2 font-medium text-[18px] text-gray-900">Product Price</label>
            <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" name="price" required onChange={(e) => setPrice(+e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="desc" className="block mb-2 font-medium text-[18px] text-gray-900">Product Description</label>
            <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" name="description" required onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="category" className="block mb-2 font-medium text-[18px] text-gray-900">Product Category</label>
            <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" name="category" required onChange={(e) => setCategory(e.target.value)} />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddProducts;