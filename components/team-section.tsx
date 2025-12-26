import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const teamMembers = [
  {
    name: "Thomas Müller",
    role: "Geschäftsführer & Schornsteinfegermeister",
    image: "/professional-german-craftsman-portrait-middle-aged.jpg",
    description: "Über 30 Jahre Erfahrung im Schornsteinfegerhandwerk. Bevollmächtigter Bezirksschornsteinfeger.",
  },
  {
    name: "Anna Schmidt",
    role: "Energieberaterin",
    image: "/professional-woman-energy-consultant-portrait-frie.jpg",
    description: "Zertifizierte Energieberaterin mit Schwerpunkt auf nachhaltige Heizsysteme und Fördermittelberatung.",
  },
  {
    name: "Michael Weber",
    role: "Schornsteinfegergeselle",
    image: "/young-professional-craftsman-portrait-german-frien.jpg",
    description: "Spezialist für Feuerstättenprüfung und moderne Heizsysteme. Seit 8 Jahren im Team.",
  },
  {
    name: "Lisa Braun",
    role: "Büroorganisation",
    image: "/professional-woman-office-administrator-portrait-f.jpg",
    description: "Ihre erste Ansprechpartnerin für Terminvereinbarungen und alle administrativen Fragen.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Unser Team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Das Fegermeister Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Lernen Sie die Menschen kennen, die für Ihre Sicherheit und Ihren Komfort arbeiten.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                <p className="bg-gradient-to-r from-innung-red via-innung-yellow to-innung-green bg-clip-text text-transparent text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
