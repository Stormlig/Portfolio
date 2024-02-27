const AlertMessage = ({ onClose }: { onClose: any }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <p className="text-2xl">Esta versão 3D é recomendada apenas para desktop.</p>

        <p className="text-md my-12">Aviso a versão em 3d ainda está em desenvolvimento mas você pode dá uma olhada!</p>

        <p className="text-[18px] text-red-500 mt-6">Existe a chance de não rodar corretamente em dispositivos móveis.</p>

        <button className="mt-4 p-4 py-2 mr-6 bg-blue-500 text-white rounded-md hover:bg-blue-800">
          <a href="/3d">Continuar mesmo assim</a>
        </button>

        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-900">Fechar</button>
      </div>
    </div>
  )
}

export default AlertMessage
