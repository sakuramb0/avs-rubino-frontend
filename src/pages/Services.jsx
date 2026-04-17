import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Building responsive and modern websites.' },
    { title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions.' },
    { title: 'Cloud Consulting', description: 'Scalable cloud infrastructure management.' },
  ];

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
