import Navbar from '../components/Navbar'
import landing from '../assets/landing.jpeg'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.png'
import logo from '../assets/logoLetra.jpeg'

export const Landing = () => {

  const selImg = [card1, card2, card3]
  const JSONSample = [{
    titulo: "ONU",
    info: "Organización de las Naciones Unidas busca erradicar la hambruna a nivel global a través de acciones filantrópicas.",
    img: 0
  },
  {
    titulo: "SinHambre",
    info: "SInHambre busca erradicar la hambruna sufrida en el estado de Puebla a través de acciones filantrópicas.",
    img: 1
  },
  {
    titulo: "PorJuventud",
    info: "PorJuventud busca erradicar la hambruna a nivel global a través de acciones filantrópicas.",
    img: 2
  },
  {
    titulo: "ONU",
    info: "Organización de las Naciones Unidas busca erradicar la hambruna a nivel global a través de acciones filantrópicas.",
    img: 0
  },
  {
    titulo: "SinHambre",
    info: "SInHambre busca erradicar la hambruna sufrida en el estado de Puebla a través de acciones filantrópicas.",
    img: 1
  },
  {
    titulo: "PorJuventud",
    info: "PorJuventud busca erradicar la hambruna a nivel global a través de acciones filantrópicas.",
    img: 2
  }]

  return (
    <>
      <Navbar>
        <div className='flex flex-row w-full'>
          <div className='w-1/2 pl-24 pr-14'>
            <div className='flex flex-col items-start justify-start pt-24'>
              <span className='text-6xl text-[#0040E0] font-bold'>NoMoreHunger</span>
              <span className='text-5xl text-[#071A4A] font-bold pt-6 leading-[3rem] tracking-tight'>El cambio comienza contigo, <br /> un grano a la vez</span>
              <span className='text-[#071A4A] text-lg font-semibold tracking-wider leading-relaxed pt-8 pb-2'>NoMoreHunger busca erradicar la hambruna y pobreza<br></br>
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
        <div className="h-20 mt-24 translate-y-1" style={{
          clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 60%)',
          backgroundColor: '#071A4A',
        }}></div>
        <div className='flex flex-col bg-[#071A4A] w-full px-24'>
          <span className='text-[#CCDBFD] text-5xl font-semibold'>Causas por Apoyar</span>
          <span className='text-white pt-16'>Selecciona las categorías de productos que te interesa donar y te daremos causas que coinciden:</span>
          <div className='border-y-2 my-2'>
            <div className='flex flex-row py-3 text-black font-semibold'>
              <button className='bg-[#B9EEBF] rounded-3xl py-3 pl-14 pr-10 z-50'>&#128085; Ropa</button>
              <button className='bg-[#FFFFFF] rounded-3xl py-3 pl-20 pr-8 -translate-x-12 z-40'>&#127831; Comida</button>
              <button className='bg-[#DCB0FF] rounded-3xl py-3 pl-20 pr-8 -translate-x-24 z-30'>&#127955; Juguetes</button>
              <button className='bg-[#CCDBFD] rounded-3xl py-3 pl-20 pr-8 -translate-x-[8.75rem] z-20'>&#128703; Higiene</button>
              <button className='bg-[#FF989E] rounded-3xl py-3 pl-20 pr-8 -translate-x-[11.5rem]'>&#127860; Utensilios</button>
            </div>
          </div>
          <div className="grid gap-16 grid-cols-3 grid-rows-2 w-full pt-10">
            {JSONSample.map((d: any, i: any) => (
              <div key={i} className='w-full rounded-2xl flex flex-col items-center justify-end bg-white pt-4 px-8 pb-6'>
                <img src={selImg[d.img]} alt="Card" className='w-[90%]' />
                <span className='text-black font-semibold pt-2'>{d.titulo}</span>
                <span className='text-black'>{d.info}</span>
              </div>
            ))}
          </div>
          <div className='flex flex-col pt-14 text-white'>
            <span className=' font-semibold'>Organizaciones</span>
            <span className='pt-5'>Cada una de las organizaciones descritas anteriormente, cuenta con una serie de características y requerimientos específicos, por lo que podrás consultar en
              cada una de ellas el tipo de insumos que se admiten y los diversos puntos de acopio disponibles.</span>
          </div>
        </div>
        <div className="h-28 mb-4 -translate-y-1" style={{
          clipPath: 'polygon(100% 40%, 0 100%, 0 0, 100% 0)',
          backgroundColor: '#071A4A',
        }}></div>
        <nav className="w-full h-[12%]">
          <div className="flex h-full items-center justify-between text-black text-lg font-bold px-24 py-12">
              <span>Organizaciones</span>
              <span>Historial</span>
              <span>Sobre Nosotros</span>
              <img className="h-10" src={logo} alt="React logo" />
              <span>@ Derechos reservados Max^2FR 2023</span>
          </div>
        </nav>
      </Navbar>
    </>
  )
}

export default Landing