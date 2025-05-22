
import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1572503618307-c481c9383f20?q=80&w=1000&auto=format&fit=crop",
      caption: "Flamencos rosados descansando en el agua"
    },
    {
      url: "https://images.unsplash.com/photo-1595863006012-a5bca7686c3d?q=80&w=1000&auto=format&fit=crop",
      caption: "Grupo de flamencos alimentándose"
    },
    {
      url: "https://images.unsplash.com/photo-1591608971362-f08b2a75a29a?q=80&w=1000&auto=format&fit=crop",
      caption: "Flamenco con su característico cuello curvado"
    },
    {
      url: "https://images.unsplash.com/photo-1567876337288-8db9c0c98c0e?q=80&w=1000&auto=format&fit=crop",
      caption: "Flamencos enanos en su hábitat natural"
    },
    {
      url: "https://images.unsplash.com/photo-1623949444553-972c6ebe7aae?q=80&w=1000&auto=format&fit=crop",
      caption: "Flamenco chileno mostrando su plumaje"
    },
    {
      url: "https://images.unsplash.com/photo-1611260507837-1b3628940532?q=80&w=1000&auto=format&fit=crop",
      caption: "Flamenco común en primer plano"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-natural-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-natural-brown mb-4">Galería de Flamencos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Disfruta de estas hermosas imágenes de flamencos en distintos hábitats naturales.
          </p>
          <div className="w-24 h-1 bg-flamingo-pink mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg h-72"
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <p className="text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
