import colegio from '../../assets/icons/colegio.png';
import ensino from '../../assets/icons/ensino.png';
import universidade from '../../assets/icons/universidade.png';
export default function Icones() {
    return (

        <section className='w-full min-h-screen bg-gradient-to-t from-white to-blue-200 py-12 px-4 flex flex-col items-center justify-center'>
            {/* TITULO */}
            <h2 className="text-black text-center 2xl:text-5xl text-2xl font-semibold">Um Sistema feito para os <br />seguintes segmentos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-8 gap-x-[180px]">
                {/* ICONE 1*/}
                <div className="flex flex-col items-center">
                    <img src={universidade} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>

                {/* ICONE 2*/}
                <div className="flex flex-col items-center">
                    <img src={colegio} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>

                {/* ICONE 3*/}
                <div className="flex flex-col items-center">
                    <img src={ensino} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>

                {/* ICONE 4*/}
                <div className="flex flex-col items-center">
                    <img src={universidade} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>

                {/* ICONE 5*/}
                <div className="flex flex-col items-center">
                    <img src={universidade} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>

                {/* ICONE 6*/}
                <div className="flex flex-col items-center">
                    <img src={universidade} alt="" className="w-61 h-61 " />
                    <span className="mt-2 text-center text-black font-semibold">Universidades</span>
                </div>
            </div>
        </section>
    );
};

