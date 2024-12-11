"use client";

import { Card } from "@/components/ui/card";
import { Anchor, Globe2, Ship, Waves } from "lucide-react";

const stats = [
  { icon: <Waves className="h-6 w-6 text-blue-600" />, value: "30,725", label: "km de côtes" },
  { icon: <Globe2 className="h-6 w-6 text-blue-600" />, value: "18.72%", label: "des eaux mondiales" },
  { icon: <Anchor className="h-6 w-6 text-blue-600" />, value: "38", label: "États côtiers ou insulaires" },
  { icon: <Ship className="h-6 w-6 text-blue-600" />, value: "90%", label: "importations par mer" },
];

export default function Context() {
  return (
    <section id="context" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Contexte Maritime Africain</h2>
          <p className="text-gray-600 text-lg">
            L'Afrique possède un potentiel maritime exceptionnel, mais fait face à des défis majeurs 
            nécessitant une approche coordonnée et stratégique.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Défis Actuels</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Sous-exploitation du potentiel maritime</li>
              <li>• Domination par les multinationales occidentales et asiatiques</li>
              <li>• Besoin d'une stratégie maritime africaine coordonnée</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Notre Réponse</h3>
            <p className="text-gray-600">
              L'AAA agit comme catalyseur pour transformer ces défis en opportunités, 
              en promouvant une approche collaborative et innovante du développement maritime africain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}