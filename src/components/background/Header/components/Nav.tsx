const Nav = () => {
  return (
    <nav className="w-[100%] sticky z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <ul className="flex items-center justify-between w-[80%] mx-auto h-[100%]" >
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-primary">
          Herrison
          <span className="text-yellow-300">Souza</span>
        </h1>

        <li className="nav-link">
          Home
        </li>

        <li className="nav-link">
          About
        </li>

        <li className="nav-link">
          Skill
        </li>

        <li className="nav-link">
          Jobs
        </li>

        <li className="nav-link">
          Home 3D
        </li>

      </ul>
    </nav>
  )
}

export default Nav
