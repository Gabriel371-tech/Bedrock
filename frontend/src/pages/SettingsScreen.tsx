import { SidebarSimple } from "../components/sidebar-simple";

export default function SettingsScreen() {
  return (
    <div className="flex h-screen">
      
      <SidebarSimple>
      </SidebarSimple>

      <div className="flex-grow p-8 overflow-y-auto bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
        <p className="mt-4 text-gray-700">Conteúdo da página de configurações.</p>
      </div>

    </div>
  );
}
