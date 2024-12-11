"use client";

import { Card } from "@/components/ui/card";
import { Anchor, Shield, Target, Globe2, Briefcase } from "lucide-react";

const missions = [
  {
    icon: <Anchor className="h-8 w-8 text-blue-600" />,
    title: "Promotion et Coordination",
    description: "Coordination et coopération entre armements africains"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: "Exploitation Commerciale",
    description: "Coordination des activités d'exploitation commerciale"
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: "Politiques Commerciales",
    description: "Harmonisation des politiques commerciales maritimes"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Sécurité Maritime",
    description: "Promotion de la sécurité dans les eaux africaines"
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Économie Bleue",
    description: "Développement durable de l'économie maritime"
  }
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cinq axes stratégiques pour transformer le secteur maritime africain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {mission.icon}
                <h3 className="text-xl font-semibold">{mission.title}</h3>
              </div>
              <p className="text-gray-600">{mission.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}