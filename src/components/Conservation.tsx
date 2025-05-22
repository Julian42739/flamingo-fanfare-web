
import React from 'react';
import { Button } from "@/components/ui/button";

const Conservation = () => {
  const challenges = [
    {
      title: "Pérdida de Hábitat",
      description: "La urbanización y el desarrollo agrícola reducen los humedales donde viven los flamencos."
    },
    {
      title: "Contaminación",
      description: "Productos químicos y plásticos amenazan la calidad del agua y la salud de estas aves."
    },
    {
      title: "Cambio Climático",
      description: "Altera los ciclos hídricos y la disponibilidad de alimento para los flamencos."
    },
    {
      title: "Perturbación Humana",
      description: "El turismo no regulado puede alterar los ciclos reproductivos de estas aves."
    }
  ];

  return (
    <section id="conservation" className="py-20 bg-lagoon-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-natural-brown mb-4">Conservación</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Algunas especies de flamencos enfrentan amenazas significativas. Conoce los desafíos y cómo podemos ayudar.
          </p>
          <div className="w-24 h-1 bg-flamingo-pink mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-flamingo-dark mb-6">Desafíos para su Supervivencia</h3>
            
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-flamingo-light rounded-full flex items-center justify-center text-flamingo-dark font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-natural-brown">{challenge.title}</h4>
                    <p className="text-gray-700">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-flamingo-pink hover:bg-flamingo-dark text-white">
                Apoya la Conservación
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-flamingo-pink/10 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1595863006012-a5bca7686c3d?q=80&w=1000&auto=format&fit=crop" 
              alt="Flamencos en su hábitat natural" 
              className="relative rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conservation;
