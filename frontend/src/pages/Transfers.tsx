import TransferForm from "../components/transfers/TransferForm"



function Transfers(){


    return (

        <div
            className="
                space-y-8
            "
        >


            {/* Page Header */}

            <div>


                <h1
                    className="
                        text-3xl
                        font-bold
                        text-slate-800
                    "
                >

                    Inventory Transfers

                </h1>


                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >

                    Move inventory between warehouse locations and maintain accurate stock visibility.

                </p>


            </div>





            {/* Transfer Section */}

            <div
                className="
                    rounded-xl
                    border
                    bg-white
                    p-6
                    shadow-sm
                "
            >


                <div
                    className="
                        mb-6
                    "
                >

                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-slate-800
                        "
                    >

                        Create Inventory Transfer

                    </h2>


                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >

                        Transfer available inventory between warehouse locations.

                    </p>


                </div>




                <TransferForm />


            </div>


        </div>

    )

}


export default Transfers