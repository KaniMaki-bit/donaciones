import Navbar from '../components/Navbar'
import logo from '../assets/logoLetra.jpeg'
import card1 from '../assets/card1.jpeg'

export const Organizacion = () => {

  return (
    <>
      <Navbar>
        <div className='grid gap-16 grid-cols-2 grid-rows-2 pt-14 px-20 w-full'>
          <img src={card1} alt="Card" className='w-[90%]' />
          <div className='flex flex-col text-black pt-14'>
            <span className='font-extrabold'>Descripcion</span>
            <span className='pt-5 leading-loose'>Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum
              Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum
              Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum</span>
          </div>
          <div className='flex flex-col text-black pt-14'>
            <span className='font-extrabold'>Misión</span>
            <span className='pt-5 leading-loose'>Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum
              Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum</span>
          </div>
          <div className='flex flex-col text-black pt-14'>
            <span className='font-extrabold'>Visión</span>
            <span className='pt-5 leading-loose'>Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum
              Organización de las Naciones Unidas busca erradicar la hambruna a nivel
              global a través de acciones filantrópicas.
              Lorem Impsum</span>
          </div>
        </div>
        <div className="h-20 mt-24 translate-y-1" style={{
          clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 60%)',
          backgroundColor: '#071A4A',
        }}></div>
        <div className='flex flex-col bg-[#071A4A] w-full px-24'></div>
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

export default Organizacion