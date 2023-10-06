import './App.css'

function App() {
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registro
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            className="rounded-md shadow-sm -space-y-px block w-full p-3 border border-gray-300 placeholder-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Nombre"
          />
          <input
            type="email"
            className="rounded-md shadow-sm -space-y-px block w-full p-3 border border-gray-300 placeholder-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Correo electrónico"
          />
          <input
            type="password"
            className="rounded-md shadow-sm -space-y-px block w-full p-3 border border-gray-300 placeholder-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="rounded-md shadow-sm -space-y-px block w-full p-3 border border-gray-300 placeholder-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            placeholder="Confirmar contraseña"
          />
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            >
              Registrarse
            </button>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            >
              Registrarse con Google
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
