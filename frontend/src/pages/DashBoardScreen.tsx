import DrawerSidebar from "../components/DrawerSidebar";

export default function DashBoardScreen() {
  console.log("Renderizando DashBoardScreen"); // debug

  return (
    <DrawerSidebar>
      <div className="min-h-screen flex items-center justify-center bg-white p-8">
        <h1 className="text-2xl font-bold">Dashboard — teste de renderização</h1>
        <p className="text-sm text-gray-600 mt-2">Se isso aparecer, a rota /dashboard está funcionando.</p>
      </div>
    </DrawerSidebar>
  );
}
// ...existing code...