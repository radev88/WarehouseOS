function InventoryToolbar(){

  return (

    <div className="flex justify-between items-center mb-6">

      <input
        type="text"
        placeholder="Search inventory..."
        className="
          border
          rounded-lg
          px-4
          py-2
          w-80
        "
      />


      <select
        className="
          border
          rounded-lg
          px-4
          py-2
        "
      >

        <option>
          All Warehouses
        </option>

        <option>
          Orlando Distribution Center
        </option>

        <option>
          Miami Storage Facility
        </option>


      </select>


    </div>

  )

}


export default InventoryToolbar