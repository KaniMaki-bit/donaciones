import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
        <div className="h-screen w-screen flex">
            <div className=" w-1/2 bg-[#EDF2FB] flex flex-col justify-center items-center">
                <div className="font-['Lato'] my-5 text-5xl font-extrabold text-[#071A4A]">Bienvenidxs!</div>
                <div className="font-['Lato'] my-5 text-xl font-extrabold text-['#071A4A']">NoMoreHunger El cambio comienza contigo un grano a la vez</div>
                <form className="flex flex-col justify-center items-center" >
                    <input type="email" placeholder="Email" className=" my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                    <input type="email" placeholder="Password" className="my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                    <div>
                     <input type="checkbox" className="my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                     <label className="mx-3">Recuerdame</label>
                    </div>
                    <button className="my-5 bg-orange-500 rounded-lg px-4 py-2 w-full text-white">
                        <Link to='/home'>Ingresa</Link>
                    </button>
                </form>
            </div> 
            <div className=" w-1/2 bg-[#CCDBFD]">
                <div className="flex justify-start">
                    <img src="..\public\undraw_walking_outside_re_56xo.svg" alt="not_found" />
                </div>
            </div> 
        </div>
    </>
  )
}
