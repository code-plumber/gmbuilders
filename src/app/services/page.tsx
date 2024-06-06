import Image from 'next/image';

const services = [
  {
    title: 'Plumbing',
    // description: 'Description for service 1',
    image: '/plumbing.jpg'
  },
  {
    title: 'Plastering',
    // description: 'Description for service 2',
    image: '/plastering.jpg'
  },
  {
    title: 'Kitchen Fitting',
    // description: 'Description for service 3',
    image: '/fitting.jpg'
  },
  {
    title: 'Renovations',
    // description: 'Description for service 4',
    image: '/renovation.jpg'
  }
];

const Services = () => {
  return (
      <div className="container mx-auto px-4 py-20" style={{paddingBottom: "50px"}}>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden  shadow-md hover:shadow-2xl transition-shadow duration-300">
              <img src={service.image} alt={service.title} width={100} height={100} className="w-full" />
              <h2 className="text-2xl font-bold m-4 justify-center flex">{service.title}</h2>
              {/* <p className="mt-2 text-gray-600">{service.description}</p> */}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
