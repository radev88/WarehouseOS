function ProductToolbar() {

  return (

    <div className="flex justify-between mb-6">


      <input
        type="text"
        placeholder="Search products..."
        className="
          w-80
          rounded-lg
          border
          px-4
          py-2
        "
      />


      <button
        className="
          rounded-lg
          bg-slate-900
          px-4
          py-2
          text-white
        "
      >
        Add Product
      </button>


    </div>

  )

}


export default ProductToolbar