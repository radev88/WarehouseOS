import AdjustmentForm from "../components/adjustments/AdjustmentForm"



function Adjustments(){


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

                    Inventory Adjustments

                </h1>



                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >

                    Correct inventory quantities and record adjustment reasons for accurate stock control.

                </p>


            </div>





            {/* Adjustment Section */}

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

                        Create Inventory Adjustment

                    </h2>



                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >

                        Update stock levels due to cycle counts, damage, corrections, or operational changes.

                    </p>


                </div>




                <AdjustmentForm />


            </div>


        </div>

    )

}


export default Adjustments