import { useEffect, useState } from "react"


type Transaction = {
  id: number
  type: string
  product: string
  quantity: number
  date: string
}



function TransactionList() {


  const [transactions, setTransactions] = useState<Transaction[]>([])



  useEffect(() => {

    fetch("http://127.0.0.1:8000/transactions/")
      .then((response) => response.json())
      .then((data) => {

        setTransactions(data)

      })
      .catch((error) => {

        console.error(
          "Transaction fetch error:",
          error
        )

      })

  }, [])



  return (

    <div className="rounded-xl border bg-white shadow-sm">


      <div className="border-b p-5">

        <h2 className="text-lg font-semibold">
          Recent Transactions
        </h2>

      </div>



      <div>


        {transactions.map((transaction) => (

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