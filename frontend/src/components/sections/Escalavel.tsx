import universidade from '../../assets/icons/universidade.png';
import usergroup from '../../assets/icons/fa--group.png';
import building from '../../assets/icons/mdi--building.png';
 
export default function Escalavel () {
    return(

        <section className="w-full min-h-screen bg-zinc-50 py-12 px-4 flex flex-col items-center justify-center">
            <h1 className="text-black text-center font-poppins font-semibold text-4xl">Totalmente</h1>
            <h2 className="text-[#5975FF] font-poppins text-center text-6xl mb-6 underline">Escalável!</h2>
            <h3 className="font-bold text-center text-4xl font-poppins mt-4 mb-8">Desenvolvido para suportar qualquer tipo de infraestrutura!</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-8 gap-x-[180px]">
                <div className="flex flex-col items-center">
                    <img src={usergroup} alt="universidade" />
                    <span className='mt-6 text-black text-center text-3xl font-medium break-normal'>Pequenas<br/> Empresas</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={universidade} alt="universidade" />
                    <span className='mt-6 text-black text-center text-3xl font-medium break-normal'>Instituições<br/> Acadêmicas</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={building} alt="universidade" />
                    <span className='mt-6 text-black text-center text-3xl font-medium break-normal'>Empresas de<br/> Grande Porte</span>
                </div>
            </div>
        </section>

    );
};