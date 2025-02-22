import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Error = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <p className="text-lg mb-6 px-4 text-center">Oops! The page you are looking for is cleaning garbage.</p>
      <img
        src="https://i.imgur.com/Oqnene0.png"
        alt="Error 404"
        className="px-2 min-w-1/4 max-h-1/2 mb-6 animate-pulse"
      />
      <Link
        to="/"
        className="px-6 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-lg shadow-lg"
      >
        Go Home
      </Link>
    </div>
    </>
    )
}

export default Error