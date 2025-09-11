
export default function SobreSistema() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="mx-auto max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Conectando toda a comunidade acadêmica
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nosso sistema conecta alunos, professores e administração em uma única plataforma.
              Uma solução pensada para colaboração, organização e acompanhamento de atividades —
              tudo com segurança e facilidade de uso.
            </p>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <a
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                href="#demo"
                aria-label="Solicitar demonstração"
              >
                Solicitar demonstração
              </a>

              <a
                className="inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md focus:outline-none"
                href="#features"
              >
                Ver funcionalidades
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                Comunicação em tempo real
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-400" />
                Agenda e notificações
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />
                Relatórios e métricas
              </li>
            </ul>
          </div>

          {/* Mockup / Dashboard animada (GIF ou Vídeo) */}
          <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:mr-0 lg:max-w-none">
            <video
              src="/dashboard.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
