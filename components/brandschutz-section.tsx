import { CheckCircle, Flame } from "lucide-react"

const features = [
  "Regelmäßige Feuerstättenschau nach gesetzlichen Vorgaben",
  "Überprüfung von Kaminen, Öfen und Heizungsanlagen",
  "Abnahme neuer Feuerstätten und Schornsteine",
  "Beratung zur brandschutzgerechten Installation",
  "Ausstellung von Feuerstättenbescheiden",
]

export function BrandschutzSection() {
  return (
    <section
      id="brandschutz"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-innung-red/5 via-background to-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-innung-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-innung-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-innung-red/10 text-innung-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Flame className="h-4 w-4" />
              Brandschutz
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sicherheit für Ihr
              <span className="text-innung-red"> Zuhause</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-pretty">
              Die Sicherheit Ihrer Familie und Ihres Eigentums steht bei uns an erster Stelle. Als bevollmächtigte
              Bezirksschornsteinfeger führen wir alle gesetzlich vorgeschriebenen Prüfungen durch.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-innung-red/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-innung-red" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-innung-red/10">
              <img
                src="/chimney-sweep-inspecting-fireplace-safety-professi.jpg"
                alt="Schornsteinfeger bei der Brandsicherheitsprüfung"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-innung-red text-white p-6 rounded-2xl shadow-xl shadow-innung-red/25 hidden md:block">
              <p className="text-4xl font-bold">soll hier</p>
              <p className="text-sm text-white/80">was stehen?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
