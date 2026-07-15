import { useEffect, useState } from "react"

import {
    getTransactions
} from "../../api/transactions"

import type {
    Transaction
} from "../../api/transactions"



function TransactionList(){


    const [
        transactions,
        setTransactions
    ] = useState<Transaction[]>([])



    const [
        loading,
        setLoading
    ] = useState(true)



    useEffect(()=>{


        async function loadTransactions(){

            try{

                const data =
                    await getTransactions()

                setTransactions(data)

            }

            catch(error){

                console.error(
                    "Transaction fetch error:",
                    error
                )

            }

            finally{

                setLoading(false)

            }

        }


        loadTransactions()


    },[])




    if(loading){

        return (

            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-5
            ">

                Loading transactions...

            </div>

        )

    }




    return (

        <div className="
            rounded-xl
            border
            bg-white
            shadow-sm
            overflow-hidden
        ">


            <div className="
                border-b
                p-5
            ">

                <h2 className="text-lg font-semibold">

                    Recent Transactions

                </h2>

            </div>




            <div>


            {
                transactions.map((transaction,index)=>(


                    <div

                        key={transaction.id}

                        className={`
                            flex
                            justify-between
                            p-4
                            ${
                                index !== transactions.length - 1
                                ? "border-b"
                                : ""
                            }
                        `}

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

                                ?

                                "text-green-600 font-semibold"

                                :

                                "text-red-600 font-semibold"

                            }

                        >


                            {
                                transaction.quantity > 0
                                ?
                                "+"
                                :
                                ""
                            }


                            {transaction.quantity}


                        </div>



                    </div>


                ))

            }


            </div>


        </div>

    )

}


export default TransactionList