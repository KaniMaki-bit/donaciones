
export const Home = () => {
  return (
    <>
        <div className="relative h-screen w-screen flex overflow-hidden">
            <div className="w-3/6 flex flex-col justify-center items-center">
                <div className="font-['Lato'] my-5 text-5xl font-extrabold text-[#071A4A]">Bienvenidx</div>
                <div className="font-['Lato'] my-5 text-6xl font-extrabold text-[#0040E0]">NameTest1</div>
                <div className="flex justify-start">
                    <img style={{width: '400px', height: 'auto'}} src="..\public\undraw_woman_ffrd.svg" alt="not_found" />
                </div>
                <div className=" absolute inset-0 w-6/6 h-full z-0" style={{
                    transform: 'skewY(-80deg)',
                    backgroundColor: '#071A4A',
                }}></div>
            </div> 
            <div className="w-3/6 bg-[#071A4A] flex flex-col justify-center items-center z-10">
                <div className="font-['Lato'] font-extrabold text-4xl text-white my-5">OrganizaciónName</div>
                <div className="font-['Lato'] text-lg text-white font-medium my-5">Organización de las Naciones Unidas busca erradicar la hambruna a nivel 
global a través de acciones filantrópicas.
Lorem Impsum
Organización de las Naciones Unidas busca erradicar la hambruna a nivel 
global a través de acciones filantrópicas.
Lorem Impsum
Organización de las Naciones Unidas busca erradicar la hambruna a nivel 
global a través de acciones filantrópicas.
Lorem Impsum</div>
                <div className="font-['Lato'] font-extrabold text-[#FF6600] text-lg my-3">Meta de Donativos</div>
                <div className="font-['Lato'] font-extrabold text-white text-lg my-3">10,000 Donativos</div>
                <div className="font-['Lato'] font-extrabold text-[#FF6600] text-lg my-3">Progreso Donativos</div>
                <div className="bg-gray-200 h-8 w-10/12 rounded-lg overflow-hidden text-center font-['Lato'] font-extrabold text-3xl text-white">
                    <div
                        className="bg-[#FF6600] h-full transition-all"
                        style={{ width: `70%` }}
                    >70%</div>
                </div>

 
                <div className="font-['Lato'] font-extrabold text-white text-lg my-3">Da click para ver registros</div>
                <button className="my-5 bg-[#FF0B0B] rounded-lg px-4 py-2 w-1/2 text-white">Registra Donativos</button>

            </div>
        </div>
    </>
  )
}
