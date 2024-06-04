import Image from 'next/image';

const services = [
  {
    title: 'Plumbing',
    // description: 'Description for service 1',
    image: '/service1.jpg'
  },
  {
    title: 'Plastering',
    // description: 'Description for service 2',
    image: '/service2.jpg'
  },
  {
    title: 'Kitchen Fitting',
    // description: 'Description for service 3',
    image: '/service3.jpg'
  },
  {
    title: 'Renovations',
    // description: 'Description for service 4',
    image: '/service4.jpg'
  }
];

const Services = () => {
  return (
      <div className="container mx-auto px-4 py-20" style={{paddingBottom: "50px"}}>
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image src={service.image} alt={service.title} width={400} height={300} className="rounded-t" />
              <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
              {/* <p className="mt-2 text-gray-600">{service.description}</p> */}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
