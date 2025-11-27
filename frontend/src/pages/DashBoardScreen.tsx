import { SidebarSimple } from "../components/sidebar-simple";

export default function DashBoardScreen() {
  return (
    <div className="flex h-screen">
      
      <SidebarSimple>
      </SidebarSimple>

      <div className="flex-grow p-8 overflow-y-auto bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h1>
        <p className="mt-4 text-gray-700">This content area should now appear next to the sidebar.</p>
      </div>

    </div>
  );
}