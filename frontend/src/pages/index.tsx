import { Link } from "react-router-dom";

export const index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SeniorCareMed</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-200">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200">
                  Contacto
                </a>
              </li>
              <li className="rounded bg-red-600 p-2">
                <Link to="/auth/login" className="hover:text-blue-200">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Bienvenido a SeniorCareMed
          </h2>
          <p className="mt-4 text-gray-600">
            Tu solución confiable para reservar citas médicas de manera rápida y
            sencilla.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Ver Servicios
            </a>
            <a
              href="#contact"
              className="ml-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800">
            Acerca de Nosotros
          </h3>
          <p className="mt-4 text-gray-600">
            En SeniorCareMed, nos especializamos en conectar pacientes con los
            mejores profesionales médicos. Nuestro objetivo es hacer que el
            proceso de reserva de citas sea fácil, accesible y confiable.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800">
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-700">
                Reserva de Citas
              </h4>
              <p className="mt-2 text-gray-600">
                Encuentra médicos y agenda tus citas en minutos.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-700">
                Consultas Online
              </h4>
              <p className="mt-2 text-gray-600">
                Habla con especialistas desde la comodidad de tu hogar.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-700">
                Historial Médico
              </h4>
              <p className="mt-2 text-gray-600">
                Accede a tu historial y documentos médicos en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Contáctanos</h3>
          <p className="mt-4 text-gray-600">
            ¿Tienes preguntas? Estamos aquí para ayudarte.
          </p>
          <form className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <textarea
              placeholder="Tu Mensaje"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SeniorCareMed. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
