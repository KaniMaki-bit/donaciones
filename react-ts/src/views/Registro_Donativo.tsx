import { Link } from 'react-router-dom'

export const RegistroD = () => {

  return (
    <>
    <form className="relative h-screen w-screen overflow-hidden">
        <div className="h-1/6 ">
            <div className=" absolute inset-0" style={{
                transform: 'skewX(-92deg)',
                backgroundColor: '#071A4A',
                height: '250px',
                width: '1500px',
            }}></div>
        </div>
        <div className="h-4/6 bg-[#071A4A] z-10 flex">
            <div className="w-1/2 z-10">
                <div className="flex flex-col">
                    <div className="font-['Lato'] text-4xl text-white font-extrabold">Registro de apoyo</div>
                    <div className="font-['Lato'] text-xl text-white font-bold">Registra la información del donante y su donativo</div>
                    <input type="text" placeholder="Nombre (s)" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                    <input type="email" placeholder="Email" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                    <input type="text" placeholder="Telefono" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                    <div>Ingresa Artículos Donados</div>
                </div>
                <div >
                    <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[200px]">
                        <input type="text" placeholder="Articulo" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Cantidad" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Articulo" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Cantidad" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Articulo" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Cantidad" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Articulo" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                        <input type="text" placeholder="Cantidad" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>                       
                    </div>
                </div>
            </div>
            <div className="w-1/2 z-10">
                <input type="text" placeholder="Articulo" className="text-white my-5 border-b-2 border-white bg-[#071A4A]"></input>
                <img src="..\public\undraw_team_work_k-80-m.svg" alt="not_found" />
            </div>
        </div>
        <div>
        </div>
        <div className="h=2/6">            
        <div className=" absolute inset-0 " style={{
                transform: 'skewX(92deg)',
                backgroundColor: '#071A4A',
                height: '1230px',
                width: '1500px',
            }}></div>
        </div>
            <button className="my-5 bg-[#FF0B0B] rounded-lg px-4 pt-8 w-1/2 text-white z-50">
                <Link to="/home">Subir</Link>
            </button>
    </form>
    </>
  )
}
