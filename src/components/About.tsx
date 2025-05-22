
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const facts = [
    {
      title: "Dieta Especial",
      description: "Su dieta, rica en carotenoides, les da su característico color rosa."
    },
    {
      title: "Posición Única",
      description: "Descansan sobre una pata para conservar calor corporal."
    },
    {
      title: "Socialización",
      description: "Viven en grandes colonias que pueden tener miles de individuos."
    },
    {
      title: "Longevidad",
      description: "Pueden vivir más de 40 años en su hábitat natural."
    }
  ];

  return (
    <section id="about" className="py-20 bg-natural-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-natural-brown mb-4">Acerca de los Flamencos</h2>
          <div className="w-24 h-1 bg-flamingo-pink mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1591608971362-f08b2a75a29a?q=80&w=1000&auto=format&fit=crop" 
              alt="Flamenco rosa" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Los flamencos son aves zancudas reconocibles por su plumaje rosado, sus largos cuellos flexibles, sus picos curvados y sus características posturas. Existen seis especies diferentes distribuidas en América, Asia, África, Europa y Oceanía.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Estos fascinantes animales habitan en lagunas poco profundas donde filtran pequeños organismos mediante sus singulares picos. Su color rosa proviene de los carotenoides presentes en su alimentación.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-lagoon-light">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-flamingo-dark mb-2">{fact.title}</h3>
                    <p className="text-gray-700">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
