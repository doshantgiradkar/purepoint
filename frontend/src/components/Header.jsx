import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-white'>
      <nav className='flex max-w-7xl items-center justify-between p-4 lg:px-8'>
        <div className="flex w-max items-center">
          <h1 className="text-2xl font-bold mx-10">PurePoint</h1>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/leaderboard" className="mx-2">Leaderboard</Link>
          <Link to="/complaints" className="mx-2">Complaints</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/contact" className="mx-2">Contact</Link>
        </div>
        <div className="flex w-max items-center">
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/register" className="mx-2 bg-green-600 text-white px-4 py-2 rounded">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header