import { PropsWithChildren } from "react";
import logo from './assets/pageLogo.png'

type NavbarProps = PropsWithChildren<{}>

function Navbar ({ children }: NavbarProps)  {
  return (
    <>
      <nav className="bg-slate-50 fixed w-full z-30 top-0 left-0">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-row">
              <img src={logo} className="logo react" alt="React logo" />
              <span className="text-xl">No More Hunger</span></div>
            <div className="flex flex-row items-center justify-start text-dark_b text-sm">
              <span>Conocenos</span>
              <span>Dona</span>
              <span>Causa</span>
              <span>Contacto</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative w-full h-full overflow-y-auto">
        {children}
      </div>
    </>
  )
};

export default Navbar