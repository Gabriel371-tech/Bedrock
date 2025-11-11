import agenda from '../../assets/agenda.png';;

export default function Agenda() {
  return (
   <div className="hero bg-zinc-50  min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={agenda}
      className="w-[500px] lg:w-[650px] object-cover "
    />
    <div>
      <h1 className="text-5xl font-bold">Sua agenda acadêmica organizada em um só lugar</h1>
      <p className="py-8 text-2xl">
        Organize suas aulas, tarefas e prazos com praticidade e foco — conquiste sua rotina acadêmica com leveza e produtividade!
      </p>
    </div>
  </div>
</div>
  );
}
