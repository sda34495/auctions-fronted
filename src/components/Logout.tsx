import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }, [])
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow p-4">
                You are Logged Out....
                <button
                    onClick={() => { navigate('/') }}
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Return to Home</button>

            </main>
        </div>
    )
}

export default Logout
