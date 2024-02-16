import { Bars3Icon } from '@heroicons/react/16/solid'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

const Nav = () => {
  return (
    <nav className="w-[100%] sticky z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]" >
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-primary">
          Herrison
          <span className="text-yellow-300">Souza</span>
        </h1>

        <div className="nav-link">
          Home
        </div>

        <div className="nav-link">
          About
        </div>

        <div className="nav-link">
          Skill
        </div>

        <div className="nav-link">
          Jobs
        </div>

        <div className="nav-link">
          Home 3D
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Bars3Icon className=" flex-col W-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[5rem] top-0 h-auto bg-[#141c27] shadow-md text-yellow-300 text-center rounded-md">

            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Skill</DropdownMenuItem>
            <DropdownMenuItem>Jobs</DropdownMenuItem>
            <DropdownMenuItem>Home 3D</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </nav>
  )
}

export default Nav
