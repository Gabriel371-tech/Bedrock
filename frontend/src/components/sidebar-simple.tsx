import React from "react";
import Home from '../assets/icons/DashBoardIcons/Home.png'
import Projects from '../assets/icons/DashBoardIcons/Projects.png'
import Disciplinas from '../assets/icons/DashBoardIcons/Disciplinas.png'
import Chat from '../assets/icons/DashBoardIcons/Chat.png'
import Biblioteca from '../assets/icons/DashBoardIcons/Biblioteca.png'
import Estatica from '../assets/icons/DashBoardIcons/Estatica.png'

type Props = { children?: React.ReactNode };

export function SidebarSimple({ children }: Props) {
  const [open, setOpen] = React.useState<number | null>(null);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  return (
    <aside className="w-80 min-w-[20rem] z-20 flex h-[calc(100vh-2rem)] flex-col gap-4 rounded-lg bg-{#18396F} text-white p-4">
      {children}

      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <h3 className="text-lg font-semibold">Menu Lateral</h3>
      </div>

      <div className="p-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700">
            {/* Magnifying glass SVG */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="6" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-1">
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={() => handleOpen(1)}
              className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-white hover:text-black"
            >
              <div className="flex items-center gap-3 ">
                <img
                  src={Home}
                  alt="Ícone da Home"
                  className="h-5 w-5 object-contain" // Ajuste as classes de tamanho
                />
                <span>Home</span>
              </div>
              <svg className={`h-4 w-4 text-gray-500 transition-transform ${open === 1 ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <ul className={`${open === 1 ? 'block' : 'hidden'} mt-1 ml-8 flex flex-col gap-1`}>
              <li><a className="block rounded-md px-2 py-1 text-sm hover:bg-white hover:text-black">Analytics</a></li>
              <li><a className="block rounded-md px-2 py-1 text-sm hover:bg-white hover:text-black">Reporting</a></li>
              <li><a className="block rounded-md px-2 py-1 text-sm hover:bg-white hover:text-black">Projects</a></li>
            </ul>
          </li>

          <li>
            <button
              onClick={() => handleOpen(2)}
              className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-white hover:text-black"
            >
              <div className="flex items-center gap-3">
                <img
                  src={Projects}
                  alt="Ícone de Projetos"
                  className="h-5 w-5 object-contain"
                />
                <span>Projetos</span>
              </div>
              <svg className={`h-4 w-4 text-gray-500 transition-transform ${open === 2 ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <ul className={`${open === 2 ? 'block' : 'hidden'} mt-1 ml-8 flex flex-col gap-1`}>
              <li><a className="block rounded-md px-2 py-1 text-sm hover:bg-white hover:text-black">Orders</a></li>
              <li><a className="block rounded-md px-2 py-1 text-sm hover:bg-white hover:text-black">Products</a></li>
            </ul>
          </li>

          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <img
                src={Disciplinas}
                alt="Ícone de Disciplinas"
                className="h-5 w-5 object-contain"
              />
              <span>Disciplinas</span>
              <span className="ml-auto rounded-full bg-gray-200 px-2 py-0.5 text-black text-xs">14</span>
            </a>
          </li><br/>

          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <img
                src={Chat}
                alt="Ícone de Chat"
                className="h-5 w-5 object-contain"
              />
              <span>Chat</span>
            </a>
          </li>

          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <img
                src={Biblioteca}
                alt="Ícone de Biblioteca"
                className="h-5 w-5 object-contain"
              />
              <span>Biblioteca</span>
            </a>
          </li>


          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <img
                src={Estatica}
                alt="Ícone de Estatica"
                className="h-5 w-5 object-contain"
              />
              <span>Estatica</span>
            </a>
          </li>


          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 12.9c.04-.3.06-.6.06-.9s-.02-.6-.06-.9l2.1-1.6c.19-.14.24-.42.12-.63l-2-3.4c-.12-.21-.38-.3-.61-.22l-2.5 1c-.52-.4-1.08-.73-1.69-.98L14.5 2h-5l-.38 2.2c-.61.25-1.17.57-1.69.98l-2.5-1c-.23-.09-.49.01-.61.22l-2 3.4c-.12.21-.07.49.12.63L4.6 11.1c-.04.3-.06.6-.06.9s.02.6.06.9L2.5 14.6c-.19.14-.24.42-.12.63l2 3.4c.12.21.38.3.61.22l2.5-1c.52.4 1.08.73 1.69.98L9.5 22h5l.38-2.2c.61-.25 1.17-.57 1.69-.98l2.5 1c.23.09.49-.01.61-.22l2-3.4c.12-.21.07-.49-.12-.63L19.4 13.9z" /></svg>
              <span>Settings</span>
            </a>
          </li>

          <li>
            <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white hover:text-black">
              <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg>
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </nav>

      {openAlert && (
        <div className="mt-4 rounded-md border-l-4 border-blue-400 bg-blue-50 p-3">
          <div className="flex items-start gap-3">
            <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
            <div>
              <h4 className="font-semibold">Upgrade to PRO</h4>
              <p className="text-sm text-gray-700">Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features and premium.</p>
            </div>
          </div>
          <div className="mt-3 flex gap-3">
            <button className="rounded-md bg-transparent px-3 py-1 text-sm text-blue-600 hover:underline" onClick={() => setOpenAlert(false)}>Dismiss</button>
            <a className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white" href="#">Upgrade Now</a>
          </div>
        </div>
      )}
    </aside>
  );
}