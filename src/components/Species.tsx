
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Species = () => {
  const speciesList = [
    {
      name: "Flamenco Común",
      scientificName: "Phoenicopterus roseus",
      description: "El más extendido y grande, habita en partes de África, el sur de Europa y el sur y suroeste de Asia.",
      image: "https://images.unsplash.com/photo-1611260507837-1b3628940532?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Flamenco Chileno",
      scientificName: "Phoenicopterus chilensis",
      description: "Nativo de América del Sur, se encuentra en Argentina, Bolivia, Chile, Paraguay, Perú y Uruguay.",
      image: "https://images.unsplash.com/photo-1623949444553-972c6ebe7aae?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Flamenco Enano",
      scientificName: "Phoeniconaias minor",
      description: "El más pequeño y numeroso, habita principalmente en el Gran Valle del Rift en África Oriental.",
      image: "https://images.unsplash.com/photo-1567876337288-8db9c0c98c0e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Flamenco Andino",
      scientificName: "Phoenicoparrus andinus",
      description: "Habita en las tierras altas de los Andes en Perú, Chile, Bolivia y Argentina, en altitudes de hasta 4,500 metros.",
      image: "https://images.unsplash.com/photo-1595863006012-a5bca7686c3d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="species" className="py-20 bg-lagoon-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-natural-brown mb-4">Especies de Flamencos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Existen seis especies diferentes de flamencos en el mundo, cada una con características y hábitats únicos.
          </p>
          <div className="w-24 h-1 bg-flamingo-pink mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speciesList.map((species, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={species.image} 
                  alt={species.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="font-bold text-xl text-flamingo-dark mb-1">{species.name}</h3>
                <p className="text-sm italic text-gray-500 mb-3">{species.scientificName}</p>
                <p className="text-gray-700">{species.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Species;
