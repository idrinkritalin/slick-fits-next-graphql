import Link from 'next/link'

const Nav = () => (
  <nav>
    <Link href="/sell">
      <button>go to sell</button>
    </Link>
    <Link href="/">
      <button>go to home</button>
    </Link>
  </nav>
)

export default Nav
