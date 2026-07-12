type Transaction = {
  id: number
  type: string
  product: string
  quantity: number
  date: string
}


const Transactions: Transaction[] = [

{
 id:1,
 type:"Receiving",
 product:"30mL Amber Glass Bottle",
 quantity:25000,
 date:"07/10/2026"
},

{
 id:2,
 type:"Production Issue",
 product:"Child Resistant Cap",
 quantity:-5000,
 date:"07/09/2026"
},

{
 id:3,
 type:"QA Release",
 product:"Vitamin Supplement Bottle 30ct",
 quantity:1200,
 date:"07/08/2026"
}

]


function TransactionList() {

  return (

    <div className="rounded-xl border bg-white shadow-sm">


      <div className="border-b p-5">

        <h2 className="text-lg font-semibold">
          Recent Transactions
        </h2>

      </div>


      <div>

        {Transactions.map((transaction)=>(

          <div
            key={transaction.id}
            className="flex justify-between border-b p-4"
          >

            <div>

              <p className="font-medium">
                {transaction.product}
              </p>

              <p className="text-sm text-gray-500">
                {transaction.type} • {transaction.date}
              </p>

            </div>


            <div
              className={
                transaction.quantity > 0
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
              }
            >

              {transaction.quantity > 0 ? "+" : ""}
              {transaction.quantity}

            </div>


          </div>


        ))}


      </div>


    </div>

  )

}


export default TransactionList