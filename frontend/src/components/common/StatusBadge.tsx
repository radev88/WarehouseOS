type StatusBadgeProps = {
    status: string
}



function StatusBadge({
    status
}: StatusBadgeProps){


    const getStatusStyle = () => {


        switch(status){


            case "Available":

                return "bg-green-100 text-green-700"



            case "OPEN":

                return "bg-gray-100 text-gray-700"



            case "Released":

                return "bg-blue-100 text-blue-700"



            case "READY TO SHIP":

                return "bg-blue-100 text-blue-700"



            case "FULFILLED":

                return "bg-green-100 text-green-700"



            case "Quality Hold":

                return "bg-yellow-100 text-yellow-700"



            case "Pending Inspection":

                return "bg-purple-100 text-purple-700"



            case "Rejected":

                return "bg-red-100 text-red-700"



            case "Expired":

                return "bg-red-100 text-red-700"



            case "Reserved":

                return "bg-orange-100 text-orange-700"



            case "Low Stock":

                return "bg-orange-100 text-orange-700"



            default:

                return "bg-gray-100 text-gray-700"

        }

    }



    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-sm
                font-medium
                whitespace-nowrap
                ${getStatusStyle()}
            `}
        >

            {status}

        </span>

    )

}



export default StatusBadge