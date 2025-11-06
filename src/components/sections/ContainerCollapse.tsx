// ...existing code...
import Collapse from "../Collapse";

export default function ContainerCollapse() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-content mb-8 text-center">
        Perguntas Frequentes
      </h2>

      <div className="w-full">
        <div className="mx-auto w-full">
          <div className="space-y-6 md:space-y-8">
            <Collapse />
          </div>
        </div>
      </div>
    </section>
  );
}