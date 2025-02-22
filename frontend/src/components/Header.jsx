import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-white'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <h1 className="text-2xl font-bold">PurePoint</h1>
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/complaints">Complaints</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Sign Up</Link>
      </nav>
    </header>
  )
}

export default Header