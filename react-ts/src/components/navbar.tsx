import { PropsWithChildren } from "react";
import logo from '../assets/pageLogo.png'

type NavbarProps = PropsWithChildren<{}>

function Navbar({ children }: NavbarProps) {
  return (
    <>
      <nav className="font-['Latos'] w-full h-[12%]">
        <div className="p-4 h-full w-full flex">
          <div className="w-1/2 h-full">
            <div className="flex h-full items-center">
              <img className="h-10" src={logo} alt="React logo" />
              <span className="text-xl font-bold">No More Hunger</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex h-full items-center justify-between text-lg text-[#0040E0] font-semibold pr-14 pl-10">
              <span>Conocenos</span>
              <span>Dona</span>
              <span>Causa</span>
              <span>Contacto</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="font-['Latos'] relative w-full h-full overflow-y-auto">
        {children}
      </div>
    </>
  )
};

export default Navbar