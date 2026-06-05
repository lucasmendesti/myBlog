import React from 'react'

const Contact = () => {
  return (
  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm max-w-3xl mx-auto text-center py-16">
    <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Entre em Contato</h1>
    <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
      Tem alguma dúvida ou sugestão? Envie um e-mail para a nossa equipe.
    </p>
    <a href="mailto:lucas.0613@gmail.com" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm">
      Enviar E-mail
    </a>
  </div>
);
}

export default Contact