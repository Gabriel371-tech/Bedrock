import organizacao from '../../assets/icons/companhia.png';
import plano from '../../assets/icons/planejamento.png';
import universidade from '../../assets/icons/universidade.png';

export default function Icones() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-t from-white to-blue-200 py-12 px-4 flex flex-col items-center justify-center">
      
      {/* TÍTULO */}
      <h2 className="text-black text-center 2xl:text-5xl text-2xl font-poppins mb-12">
        Um Sistema feito para os <br /> seguintes segmentos
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* CARD 1 */}
        <div className="card bg-white shadow-md text-center 
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-2 hover:shadow-2xl 
                        hover:scale-[1.03] cursor-pointer group">
          <div className="card-body items-center">

            <img 
              src={organizacao} 
              alt="Colégio" 
              className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            <h2 className="card-title text-lg font-semibold">
              Colégios
            </h2>

            <p className="text-gray-500 text-sm">
              Ideal para gestão completa de colégios e instituições de ensino básico.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card bg-white shadow-md text-center 
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-2 hover:shadow-2xl 
                        hover:scale-[1.03] cursor-pointer group">
          <div className="card-body items-center">

            <img 
              src={plano} 
              alt="Ensino Técnico" 
              className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            <h2 className="card-title text-lg font-semibold">
              Ensino Técnico
            </h2>

            <p className="text-gray-500 text-sm">
              Organização acadêmica e administrativa para cursos técnicos.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card bg-white shadow-md text-center 
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-2 hover:shadow-2xl 
                        hover:scale-[1.03] cursor-pointer group">
          <div className="card-body items-center">

            <img 
              src={universidade} 
              alt="Universidade" 
              className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            <h2 className="card-title text-lg font-semibold">
              Universidades
            </h2>

            <p className="text-gray-500 text-sm">
              Solução completa para universidades e instituições de ensino superior.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}