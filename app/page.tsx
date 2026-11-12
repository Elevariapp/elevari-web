const readySteps = [
  "Inventario real del código legado",
  "Contratos y permisos de la API",
  "Flujo de reserva y checkout",
  "MVP Web y móvil",
  "QA, release y observabilidad",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <span className="eyebrow">Elevari</span>
        <h1>Preparación del desarrollo Web</h1>
        <p>
          Esta base inicial deja listo el proyecto web para continuar con inventario,
          API, reserva, flujo de pago y eje de experiencia del huésped.
        </p>

        <div className="status-row">
          <div className="status-box">
            <strong>Arquitectura</strong>
            <span>Next.js + React + TypeScript</span>
          </div>
          <div className="status-box">
            <strong>Backend</strong>
            <span>Fastify + Prisma + PostgreSQL</span>
          </div>
        </div>

        <ul className="step-list">
          {readySteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
