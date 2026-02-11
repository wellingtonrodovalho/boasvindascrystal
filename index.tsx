
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Sinaliza que o app carregou com sucesso
  console.log("Flat Ipê App Mounted Successfully");
} catch (error) {
  console.error("Failed to mount app:", error);
  // Se falhar, removemos o loader para mostrar o erro ou fallback
  const loader = document.getElementById('app-loader');
  if (loader) loader.remove();
  
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2>Ops! Algo deu errado ao carregar o aplicativo.</h2>
      <p>Por favor, tente recarregar a página.</p>
    </div>
  `;
}
