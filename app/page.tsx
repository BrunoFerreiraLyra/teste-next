export default function Home() {
  return (
    // Esta div funciona como o "corpo" da página
    // Usamos style={{ ... }} para escrever CSS direto no JavaScript
    <div style={{
      display: "flex",            // Ativa o modo flexível
      justifyContent: "center",   // Centraliza horizontalmente (esquerda/direita)
      alignItems: "center",       // Centraliza verticalmente (cima/baixo)
      height: "100vh",            // Define a altura como 100% da tela (View Height)
      width: "100vw"              // Define a largura como 100% da tela (View Width)
    }}>
      
      {/* Aqui é a sua frase */}
      <h1>Boa noite, tio</h1>

    </div>
  );
}