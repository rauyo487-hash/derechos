import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Scale, ShieldCheck, BookOpen, Gavel, Quote, ChevronDown, Search,
  Users, AlertTriangle, Sparkles, Landmark, FileText, HeartHandshake,
  ArrowLeft, CheckCircle2, XCircle,
} from "lucide-react";

export const Route = createFileRoute("/derechos")({
  component: DerechosPage,
  head: () => ({
    meta: [
      { title: "Derechos — No Discriminación y No Esclavitud" },
      { name: "description", content: "Página de confianza sobre el Derecho a la No Discriminación y el Derecho a la No Esclavitud en Guatemala. Mantenida por los Seminaristas 2026 de Perito Contador." },
      { property: "og:title", content: "Derechos — No Discriminación y No Esclavitud" },
      { property: "og:description", content: "Guía interactiva sobre derechos humanos fundamentales en Guatemala." },
    ],
  }),
});

type SectionId = "inicio" | "hipotesis" | "legal" | "sanciones" | "marco" | "testimonios";

const SECTIONS: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "inicio", label: "Inicio", icon: Sparkles },
  { id: "hipotesis", label: "Hipótesis", icon: BookOpen },
  { id: "legal", label: "Base Legal", icon: Landmark },
  { id: "sanciones", label: "Sanciones", icon: Gavel },
  { id: "marco", label: "Marco Teórico", icon: FileText },
  { id: "testimonios", label: "Testimonios", icon: Quote },
];

function DerechosPage() {
  const [active, setActive] = useState<SectionId>("inicio");

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-[#faf7f2]/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-stone-900">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Scale className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold tracking-tight">Derechos</span>
          </Link>
          <Link to="/" className="text-sm text-stone-600 hover:text-stone-900 inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Volver
          </Link>
        </div>

        {/* Section tabs */}
        <nav className="border-t border-stone-200/70">
          <div className="max-w-6xl mx-auto px-2 sm:px-5 flex gap-1 overflow-x-auto no-scrollbar">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "border-amber-500 text-stone-900"
                      : "border-transparent text-stone-500 hover:text-stone-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-10 sm:py-14">
        {active === "inicio" && <Inicio onNavigate={setActive} />}
        {active === "hipotesis" && <Hipotesis />}
        {active === "legal" && <BaseLegal />}
        {active === "sanciones" && <Sanciones />}
        {active === "marco" && <MarcoTeorico />}
        {active === "testimonios" && <Testimonios />}
      </main>

      <footer className="border-t border-stone-200 mt-16">
        <div className="max-w-6xl mx-auto px-5 py-8 text-sm text-stone-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>
            Esta página es mantenida por los <span className="text-stone-800 font-medium">Seminaristas 2026 de Perito Contador</span> con fines educativos.
          </p>
          <p className="text-stone-400">No constituye asesoría legal.</p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Inicio ─── */
function Inicio({ onNavigate }: { onNavigate: (s: SectionId) => void }) {
  return (
    <div className="grid gap-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-400 to-orange-300 p-8 sm:p-14 text-stone-900">
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" aria-hidden />
        <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/40 text-xs font-medium mb-5">
            <ShieldCheck className="w-3.5 h-3.5" /> Página pública de confianza
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Derechos que <em className="not-italic text-white">nos protegen</em> a todos.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-800/85 max-w-xl">
            Una guía interactiva sobre el <strong>Derecho a la No Discriminación</strong> y el
            <strong> Derecho a la No Esclavitud</strong> en Guatemala.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("legal")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Explorar la Base Legal <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
            <button
              onClick={() => onNavigate("testimonios")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 text-stone-900 text-sm font-medium hover:bg-white transition-colors"
            >
              Leer testimonios
            </button>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-5">
        <RightCard
          icon={Users}
          title="No Discriminación"
          desc="Nadie puede ser excluido por su etnia, género, idioma, religión, edad, condición económica o cualquier otra razón."
          badge="Art. 4 Constitución"
        />
        <RightCard
          icon={HeartHandshake}
          title="No Esclavitud"
          desc="Ninguna persona puede ser sometida a servidumbre, trata o condiciones que menoscaben su dignidad humana."
          badge="Art. 202 Ter Código Penal"
        />
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <Stat label="Años de prisión por trata" value="8 – 18" />
        <Stat label="Multa por discriminación" value="Q500 – Q3,000" />
        <Stat label="Pilar constitucional" value="Art. 4" />
      </section>
    </div>
  );
}

function RightCard({ icon: Icon, title, desc, badge }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; badge: string }) {
  return (
    <article className="group rounded-2xl bg-white border border-stone-200 p-6 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
      <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-stone-600 text-sm leading-relaxed">{desc}</p>
      <span className="mt-4 inline-block text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">{badge}</span>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-6">
      <div className="text-3xl font-bold tracking-tight text-stone-900">{value}</div>
      <div className="mt-1 text-sm text-stone-500">{label}</div>
    </div>
  );
}

/* ─── Hipótesis ─── */
function Hipotesis() {
  const pillars = [
    { title: "En lo legal", desc: "La justicia se vuelve imparcial al no estar sesgada por el origen étnico.", icon: Scale },
    { title: "En lo económico", desc: "Se transita de 'mano de obra barata por exclusión' a 'productividad por capacidad'.", icon: TrendUp },
    { title: "En lo ético", desc: "Se establece un rechazo social absoluto a cualquier forma de dominación humana.", icon: HeartHandshake },
  ];
  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Fundamento" title="Hipótesis" desc="La construcción de la nación guatemalteca y el ciclo Deshumanización–Explotación." />

      <blockquote className="relative rounded-3xl bg-stone-900 text-stone-100 p-8 sm:p-10">
        <Quote className="absolute top-6 left-6 w-8 h-8 text-amber-400/70" />
        <p className="pl-10 text-lg sm:text-xl leading-relaxed">
          Si el Estado de Guatemala y su sociedad civil logran desmantelar los prejuicios raciales y los estereotipos étnicos que históricamente han deshumanizado a los pueblos originarios y otros sectores vulnerables, entonces se generará una reducción drástica y progresiva en las formas modernas de esclavitud y explotación laboral.
        </p>
      </blockquote>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-stone-900">Tres barreras naturales contra la explotación</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl bg-white border border-stone-200 p-6">
                <Icon className="w-6 h-6 text-amber-600 mb-3" />
                <h4 className="font-semibold text-stone-900">{p.title}</h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Variable Independiente</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">Nivel de integración de políticas de no discriminación, eliminación de prejuicios en centros educativos y respeto a la pluriculturalidad nacional.</p>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Variable Dependiente</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">Disminución en los índices de trabajo forzoso, servidumbre doméstica no remunerada, trata de personas y otras formas de esclavitud moderna.</p>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Nexo Lógico</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">La <strong>Dignidad Humana</strong> como eje transversal que anula la justificación del abuso de poder y la explotación laboral.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* small local icon fallback since lucide has TrendingUp */
function TrendUp(props: { className?: string }) {
  return <Sparkles {...props} />;
}

/* ─── Base Legal ─── */
type Article = { id: string; number: string; title: string; body: string; meaning: string; source: "constitucion" | "penal" };

const ARTICLES: Article[] = [
  {
    id: "art4",
    number: "Artículo 4",
    title: "Libertad e Igualdad",
    source: "constitucion",
    body: "En Guatemala todos los seres humanos son libres e iguales en dignidad y derechos. El hombre y la mujer, cualquiera que sea su estado civil, tienen iguales oportunidades y responsabilidades. Ninguna persona puede ser sometida a servidumbre ni a otra condición que menoscabe su dignidad. Los seres humanos deben guardar conducta fraternal entre sí.",
    meaning: "Nadie es 'más' que nadie. Si alguien te trata como si fueras su propiedad o te discrimina por tu género o condición, está violando la ley más importante del país.",
  },
  {
    id: "art202bis",
    number: "Artículo 202 Bis",
    title: "Discriminación",
    source: "penal",
    body: "Se entenderá como discriminación toda distinción, exclusión, restricción o preferencia basada en motivos de género, raza, etnia, idioma, edad, religión, situación económica, enfermedad, discapacidad, estado civil, o en cualesquiera otros motivos, que impidiere el ejercicio de un derecho.",
    meaning: "La discriminación no es solo 'caer mal': es un delito tipificado y sancionado penalmente.",
  },
  {
    id: "art202ter",
    number: "Artículo 202 Ter",
    title: "Trata de Personas",
    source: "penal",
    body: "Comete el delito de trata de personas quien capte, transporte, traslade, retenga, acoja o reciba a una o más personas con fines de explotación. (Incluye trabajos forzados: la esclavitud moderna).",
    meaning: "La esclavitud hoy se disfraza de 'ofertas de trabajo' que terminan en explotación. La ley protege contra esos engaños.",
  },
];

function BaseLegal() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"todos" | "constitucion" | "penal">("todos");
  const [open, setOpen] = useState<string | null>("art4");

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      if (filter !== "todos" && a.source !== filter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (a.number + a.title + a.body + a.meaning).toLowerCase().includes(q);
    });
  }, [query, filter]);

  return (
    <div className="grid gap-8">
      <SectionHeader
        eyebrow="Empoderamiento"
        title="Base Legal"
        desc="La ley es un escudo invisible. Si no sabes que lo llevas contigo, no sabrás cómo usarlo."
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en los artículos…"
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-stone-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
          />
        </div>
        <div className="flex gap-1.5 p-1 bg-stone-100 rounded-full">
          {(["todos", "constitucion", "penal"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-colors ${
                filter === k ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {k === "constitucion" ? "Constitución" : k === "penal" ? "Código Penal" : "Todos"}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="grid gap-3">
        {filtered.map((a) => {
          const isOpen = open === a.id;
          return (
            <article key={a.id} className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : a.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-stone-50 transition-colors"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${a.source === "constitucion" ? "bg-amber-50 text-amber-600" : "bg-stone-900 text-white"}`}>
                  {a.source === "constitucion" ? <Landmark className="w-5 h-5" /> : <Gavel className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                    {a.source === "constitucion" ? "Constitución" : "Código Penal"}
                  </div>
                  <div className="font-semibold text-stone-900 truncate">
                    {a.number} — {a.title}
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-6 pt-1 grid gap-4 border-t border-stone-100">
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Texto legal</div>
                    <p className="text-stone-700 leading-relaxed italic border-l-2 border-amber-400 pl-4">"{a.body}"</p>
                  </div>
                  <div className="rounded-xl bg-amber-50/70 border border-amber-100 p-4">
                    <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> ¿Qué significa para nosotros?
                    </div>
                    <p className="text-stone-800 text-sm leading-relaxed">{a.meaning}</p>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-stone-500 border border-dashed border-stone-300 rounded-2xl">
            No se encontraron artículos con ese término.
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Sanciones ─── */
function Sanciones() {
  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Consecuencias" title="Penas y Sanciones" desc="No basta con saber que algo es un delito; hay que conocer la gravedad del castigo." />

      <div className="grid md:grid-cols-2 gap-5">
        <PenaltyCard
          label="Delito de Discriminación"
          article="Art. 202 Bis"
          prison="1 a 3 años"
          fine="Q500 – Q3,000"
          desc="Cuando una persona o institución impide a otra ejercer sus derechos por su origen, religión, género o salud."
          tone="amber"
        />
        <PenaltyCard
          label="Trata de Personas y Esclavitud"
          article="Art. 202 Ter"
          prison="8 a 18 años"
          fine="Q300,000 – Q500,000"
          desc="Uno de los delitos más castigados en Guatemala por la gravedad de la violación a la libertad."
          tone="dark"
        />
      </div>

      <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" /> ¿Cómo reconocer una situación de riesgo?
        </h3>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            "Retención de documentos (pasaporte, identificación)",
            "Salarios mucho menores a lo prometido",
            "Aislamiento del entorno familiar o social",
            "Amenazas verbales, físicas o psicológicas",
            "Condiciones de vivienda hacinadas o inseguras",
            "Deudas 'impagables' con el empleador",
          ].map((s) => (
            <li key={s} className="flex gap-3 text-sm text-stone-700">
              <XCircle className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PenaltyCard({ label, article, prison, fine, desc, tone }: { label: string; article: string; prison: string; fine: string; desc: string; tone: "amber" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <div className={`rounded-2xl p-6 sm:p-7 border ${isDark ? "bg-stone-900 border-stone-900 text-stone-100" : "bg-white border-stone-200 text-stone-900"}`}>
      <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? "text-amber-400" : "text-amber-600"}`}>{article}</div>
      <h3 className="text-xl font-semibold tracking-tight">{label}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>{desc}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className={`rounded-xl p-4 ${isDark ? "bg-stone-800" : "bg-stone-50"}`}>
          <div className={`text-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>Prisión</div>
          <div className="mt-1 text-lg font-bold">{prison}</div>
        </div>
        <div className={`rounded-xl p-4 ${isDark ? "bg-stone-800" : "bg-stone-50"}`}>
          <div className={`text-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>Multa</div>
          <div className="mt-1 text-lg font-bold">{fine}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Marco Teórico ─── */
function MarcoTeorico() {
  const timeline = [
    { year: "Época colonial", text: "Los pueblos indígenas enfrentaron sistemas de explotación y exclusión que los trataban como inferiores." },
    { year: "Post-independencia", text: "Se proclamaba la igualdad, pero en la práctica persistieron profundas desigualdades." },
    { year: "1996", text: "Acuerdos de Paz — Acuerdo sobre Identidad y Derechos de los Pueblos Indígenas: reconoce la discriminación histórica hacia los pueblos maya, garífuna y xinca." },
    { year: "2002", text: "Reforma al Código Penal: se incorpora el Art. 202 Bis, tipificando el delito de discriminación." },
    { year: "Hoy", text: "La PDH promueve educación, campañas y defensa de quienes sufren exclusión en la vida cotidiana." },
  ];
  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Contexto" title="Marco Teórico" desc="El derecho a no ser discriminado ni sometido a servidumbre en Guatemala." />

      <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-10">
        <p className="text-stone-700 leading-relaxed">
          En el centro de la vida en sociedad guatemalteca descansan dos derechos esenciales que protegen la dignidad de cada persona: <strong>el derecho a no ser discriminado</strong> y <strong>el derecho a no ser sometido a esclavitud ni servidumbre</strong>. No son solo principios escritos en papel; son el reflejo de una historia marcada por desigualdades profundas y, al mismo tiempo, por esfuerzos constantes por construir una nación más justa e inclusiva.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-stone-900 mb-6">Una línea de tiempo</h3>
        <ol className="relative border-l-2 border-amber-200 ml-3 space-y-6">
          {timeline.map((t, i) => (
            <li key={i} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-[#faf7f2]" />
              <div className="text-sm font-semibold text-amber-700">{t.year}</div>
              <p className="text-stone-700 text-sm mt-1 leading-relaxed">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl bg-amber-500 text-stone-900 p-6">
          <CheckCircle2 className="w-6 h-6 mb-3" />
          <h4 className="font-semibold">Igualdad formal</h4>
          <p className="text-sm mt-1.5 text-stone-800/85">"Todos somos iguales ante la ley" — punto de partida indispensable.</p>
        </div>
        <div className="rounded-2xl bg-stone-900 text-white p-6">
          <Sparkles className="w-6 h-6 mb-3 text-amber-400" />
          <h4 className="font-semibold">Igualdad real o material</h4>
          <p className="text-sm mt-1.5 text-stone-300">Toma en cuenta las desigualdades históricas y estructurales, especialmente hacia los pueblos indígenas y las mujeres.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Testimonios ─── */
type Testimonio = { title: string; author: string; text: string };
const TESTIMONIOS: Testimonio[] = [
  {
    title: "«El Ministerio de Trabajo busca lavarse las manos»",
    author: "Mujer, 30 años — Ciudad de Guatemala",
    text: "El 26 de junio viajé con un grupo de guatemaltecos hacia Carolina del Sur, para trabajar con Caribbean Cleaning. Desde que llegamos, sentimos el rechazo. En esa casa llegamos a vivir hasta 16 personas; no era un lugar seguro, ni libre de drogas y alcohol. La violencia verbal existió, la falta de voluntad de la empleadora existió. Quienes huimos lo hicimos sin ayuda del Ministerio de Trabajo. Si a nosotros que fuimos por un programa oficial nos humillaron física y psicológicamente, ¿qué podríamos esperar para los migrantes irregulares?",
  },
  {
    title: "«Nunca había recibido discriminación, ni por ser latino ni por mi orientación sexual»",
    author: "Hombre, 22 años — Ciudad de Guatemala",
    text: "Viajé a Carolina del Sur en marzo de 2023. La oferta era para ser recepcionista, pero me ubicaron como botones en el Omni Hilton Head. Ganaba 13 dólares por hora más propina, pero al recibir propinas ya no teníamos pago del empleador. Debieron pagar el salario mínimo y no lo hicieron. Nunca había recibido discriminación por ser latino ni por mi orientación sexual; allá sí la recibí, y ni siquiera en mi país viví eso.",
  },
  {
    title: "«El racismo está instaurado en todas las estructuras»",
    author: "Sara Curruchich — Cantautora maya kaqchikel",
    text: "Muchas de las desigualdades y las injusticias que vivimos en la actualidad están muy relacionadas con un tema colonial que es el racismo. Trae como consecuencia la desnutrición, la pobreza extrema, los desalojos que sufren los pueblos indígenas. Es necesario refundar las instituciones y el Estado mismo para que se puedan eliminar todos los cimientos racistas.",
  },
];

function Testimonios() {
  const [i, setI] = useState(0);
  const t = TESTIMONIOS[i];
  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Voces en la sombra" title="Testimonios" desc="Un análisis crítico sobre la esclavitud moderna y la exclusión social en Guatemala." />

      <div className="rounded-3xl bg-stone-900 text-white p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" aria-hidden />
        <Quote className="w-10 h-10 text-amber-400 mb-6" />
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">{t.title}</h3>
        <p className="mt-6 text-stone-300 leading-relaxed">{t.text}</p>
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm text-amber-300 font-medium">— {t.author}</div>
          <div className="flex items-center gap-2">
            {TESTIMONIOS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonio ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "bg-amber-400 w-8" : "bg-stone-700 hover:bg-stone-600 w-2"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-8">
        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">Extracto — "Pueblos" de Sara Curruchich</div>
        <p className="text-stone-700 italic leading-relaxed">
          "Caminando van tantos pueblos, en pie de lucha están.<br />
          Van por los caminos con su corazón retumbando.<br />
          Sin miedo ellas van, sin miedo ellos van sembrando libertad.<br />
          En comunidad caminando por la justicia y dignidad."
        </p>
      </div>
    </div>
  );
}

/* ─── Shared ─── */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest">{eyebrow}</div>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">{title}</h2>
      <p className="mt-3 text-stone-600 leading-relaxed">{desc}</p>
    </div>
  );
}
