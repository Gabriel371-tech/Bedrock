
export default function Collapse() {
    return (
        <>

       <div className="collapse collapse-arrow border border-gray-200 rounded-lg bg-white">
          <input type="radio" name="container-collapse" checked />
          <div className="collapse-title px-6 py-4 text-lg md:text-xl font-medium">
            Como funciona a centralização de aulas e tarefas?
          </div>
          <div className="collapse-content px-6 pb-6 text-sm md:text-base text-gray-600">
            Você cadastra turmas, aulas e tarefas — tudo aparece em um painel único com prazos,
            anexos e anotações, facilitando o acompanhamento do seu cronograma.
          </div>
        </div>

        <div className="collapse collapse-arrow border border-gray-200 rounded-lg bg-white">
          <input type="radio" name="container-collapse" />
          <div className="collapse-title px-6 py-4 text-lg md:text-xl font-medium">
            O sistema sincroniza com calendários externos?
          </div>
          <div className="collapse-content px-6 pb-6 text-sm md:text-base text-gray-600">
            Sim — oferecemos integração com calendários padrão (export/subscribe). Em breve teremos
            sincronização automática com Google Calendar e outros serviços.
          </div>
        </div>

        <div className="collapse collapse-arrow border border-gray-200 rounded-lg bg-white">
          <input type="radio" name="container-collapse" />
          <div className="collapse-title px-6 py-4 text-lg md:text-xl font-medium">
            Posso usar em dispositivos móveis?
          </div>
          <div className="collapse-content px-6 pb-6 text-sm md:text-base text-gray-600">
            Sim — o componente é responsivo: as margens e tipografia adaptam em sm/md/lg,
            garantindo boa leitura e toque confortável em telas pequenas.
          </div>
        </div>
        </>
       
    );
}