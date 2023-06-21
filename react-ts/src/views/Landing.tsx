import Navbar from '../components/Navbar'
import landing from '../assets/landing.jpeg'
//import './App.css'

export const Landing = () => {
  return (
    <>
      <Navbar>
        <div className='flex flex-row w-full'>
          <div className='w-1/2 pl-20 pr-10'>
            <div className='flex flex-col items-start justify-start pt-24'>
              <span className='text-5xl text-[#0040E0] font-bold'>NoMoreHunger</span>
              <span className='text-4xl text-[#071A4A] font-extrabold pt-6'>El cambio comienza contigo un grano a la vez</span>
              <span className='text-[#071A4A] text-lg font-semibold pt-8 pb-2'>NoMoreHunger busca erradicar la hambruna y pobreza<br></br>
                dentro del territorio Mexicano a traves de acciones<br></br>
                filantrópicas</span>
              <span className='text-lg pt-16 font-semibold'>Comienza revisando cada una de las causas por apoyar</span>
              <button className='bg-[#FF6600] text-white font-semibold rounded-3xl py-1 px-4 mt-4'><span>Donar    <svg className="inline text-white h-6" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
              </span>
              </button>
            </div>
          </div>
          <div className='w-1/2'>
            <img className="pt-20" src={landing} alt="React logo" />
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default Landing