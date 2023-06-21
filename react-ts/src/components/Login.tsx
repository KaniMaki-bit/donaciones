
export const Login = () => {
  return (
    <>
        <div className="h-screen w-screen flex">
            <div className=" w-1/2 bg-[#EDF2FB] flex flex-col justify-center items-center">
                <div className="my-5">ImagenAI</div>
                <div className="my-5">Bienvenixs!</div>
                <div>NoMoreHunger El cambio comienza contigo un grano a la vez</div>
                <form className="flex flex-col justify-center items-center" >
                    <input type="email" placeholder="Email" className=" my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                    <input type="email" placeholder="Password" className="my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                    <div>
                     <input type="checkbox" className="my-5 border-b-2 border-black bg-[#EDF2FB]"></input>
                     <label >Recuerdame</label>
                    </div>
                    <button className="my-5 bg-orange-500 rounded-lg px-4 py-2 w-full text-white">Ingresa</button>
                </form>
            </div> 
            <div className=" w-1/2 bg-[#CCDBFD]">Aqui en teoria ira la imagen</div> 
        </div>
    </>
  )
}
