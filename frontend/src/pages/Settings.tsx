import {
    Building2,
    Warehouse,
    Bell,
    ShieldCheck,
    Database,
    Save
} from "lucide-react"



function Settings(){


    return (

        <div className="space-y-8">



            <div>

                <h1 className="text-3xl font-bold">

                    System Settings

                </h1>


                <p className="text-gray-500">

                    Configure warehouse operations, notifications, and system preferences.

                </p>

            </div>








            {/* Organization Settings */}



            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-6
            ">


                <div className="
                    flex
                    items-center
                    gap-3
                    mb-6
                ">

                    <Building2
                        size={22}
                        className="text-slate-600"
                    />


                    <h2 className="text-lg font-semibold">

                        Organization Profile

                    </h2>


                </div>





                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-5
                ">



                    <div>

                        <label className="text-sm font-medium">

                            Company Name

                        </label>


                        <input

                            className="
                                mt-2
                                w-full
                                rounded-lg
                                border
                                p-3
                            "

                            value="Orlando Pharma Packaging"

                            readOnly

                        />

                    </div>





                    <div>

                        <label className="text-sm font-medium">

                            Industry

                        </label>


                        <input

                            className="
                                mt-2
                                w-full
                                rounded-lg
                                border
                                p-3
                            "

                            value="Pharmaceutical Packaging"

                            readOnly

                        />

                    </div>





                    <div>

                        <label className="text-sm font-medium">

                            Time Zone

                        </label>


                        <input

                            className="
                                mt-2
                                w-full
                                rounded-lg
                                border
                                p-3
                            "

                            value="America/New_York"

                            readOnly

                        />

                    </div>





                    <div>

                        <label className="text-sm font-medium">

                            Currency

                        </label>


                        <input

                            className="
                                mt-2
                                w-full
                                rounded-lg
                                border
                                p-3
                            "

                            value="USD"

                            readOnly

                        />

                    </div>


                </div>


            </div>









            {/* Warehouse Settings */}



            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-6
            ">



                <div className="
                    flex
                    items-center
                    gap-3
                    mb-6
                ">


                    <Warehouse
                        size={22}
                        className="text-slate-600"
                    />


                    <h2 className="text-lg font-semibold">

                        Warehouse Configuration

                    </h2>


                </div>





                <div className="space-y-5">



                    <label className="
                        flex
                        items-center
                        justify-between
                    ">


                        <span>

                            Track inventory by location

                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>





                    <label className="
                        flex
                        items-center
                        justify-between
                    ">


                        <span>

                            Enable lot / batch tracking

                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>





                    <label className="
                        flex
                        items-center
                        justify-between
                    ">


                        <span>

                            Enable expiration tracking

                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>



                </div>



            </div>









            {/* Notifications */}



            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-6
            ">



                <div className="
                    flex
                    items-center
                    gap-3
                    mb-6
                ">


                    <Bell
                        size={22}
                        className="text-slate-600"
                    />


                    <h2 className="text-lg font-semibold">

                        Notifications

                    </h2>


                </div>





                <div className="space-y-5">



                    <label className="
                        flex
                        justify-between
                        items-center
                    ">

                        <span>
                            Low inventory alerts
                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>




                    <label className="
                        flex
                        justify-between
                        items-center
                    ">

                        <span>
                            Expiring products alerts
                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>





                    <label className="
                        flex
                        justify-between
                        items-center
                    ">

                        <span>
                            Purchase order delays
                        </span>


                        <input
                            type="checkbox"
                            defaultChecked
                        />


                    </label>



                </div>


            </div>









            {/* Security */}



            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-6
            ">



                <div className="
                    flex
                    items-center
                    gap-3
                    mb-6
                ">


                    <ShieldCheck
                        size={22}
                        className="text-slate-600"
                    />


                    <h2 className="text-lg font-semibold">

                        Security

                    </h2>


                </div>




                <div className="
                    flex
                    justify-between
                    items-center
                ">


                    <span>

                        Session Timeout

                    </span>


                    <select className="
                        border
                        rounded-lg
                        p-2
                    ">


                        <option>
                            30 minutes
                        </option>


                        <option>
                            60 minutes
                        </option>


                        <option>
                            120 minutes
                        </option>


                    </select>


                </div>



            </div>









            {/* System Information */}



            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                p-6
            ">



                <div className="
                    flex
                    items-center
                    gap-3
                    mb-6
                ">


                    <Database
                        size={22}
                        className="text-slate-600"
                    />


                    <h2 className="text-lg font-semibold">

                        System Information

                    </h2>


                </div>





                <div className="space-y-2 text-sm text-gray-600">


                    <p>
                        WarehouseOS Version: 1.0.0
                    </p>


                    <p>
                        Database: PostgreSQL
                    </p>


                    <p>
                        Environment: Production
                    </p>


                </div>


            </div>







            <button

                className="
                    flex
                    items-center
                    gap-2
                    bg-slate-900
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-slate-700
                "

            >

                <Save size={18}/>

                Save Settings

            </button>




        </div>

    )

}


export default Settings