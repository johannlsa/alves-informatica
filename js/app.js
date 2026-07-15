// 1. Array com objetos contendo o arquivo e a descrição da foto
const listaImagens = [
  { arquivo: '20230713_112823.jpg', nome: 'Inicio' },
  { arquivo: '20230713_162107.jpg', nome: 'Finalizando' },
  { arquivo: '20230801_172629.jpg', nome: 'Finalizando' },
  { arquivo: '20240206_090823.jpg', nome: 'Inserindo identificação' },
  { arquivo: '20240223_165022.jpg', nome: 'Instalando NVR hikvision' },
  { arquivo: '20240823_201324.jpg', nome: 'Instalando rack 12U' },
  { arquivo: '20250125_084830.jpg', nome: 'Instalando AP unifi enterprise' },
  { arquivo: '20250131_150856.jpg', nome: 'Instalando Câmera IP hikvision' },
  { arquivo: '20250306_173700.jpg', nome: 'Instalando Pontos de redes' },
  { arquivo: '20250410_101640.jpg', nome: 'Finalizando Pontos de redes' },
  { arquivo: '20251030_170633.jpg', nome: 'Lançamentos cabos de rede' },
  { arquivo: '20260629_103047.jpg', nome: 'Finalizando Instalação CFTV' },
  { arquivo: '20260714_205714835.jpg', nome: 'Sistema CFTV hibrido' },
  { arquivo: '20260602_154353.jpg', nome: 'Instalação câmera zona rural'},
  { arquivo: '20260424_162034.jpg', nome: 'Suporte informatica para escritório'},
  { arquivo: '20260714_211012807.jpg', nome: 'Montagem PC game'},
  { arquivo: '20251221_202529.jpg', nome: 'Manutenção preventiva notebook'},
  { arquivo: '20250423_103800.jpg', nome: 'Instalação AP unifi'},
  { arquivo: '1754407329629.jpg', nome: 'Instalação CFTV residêncial'},
  { arquivo: '20260714_213036181.jpg', nome: 'Restruturação CFTV/Redes supermercado'}
];
// Caminho da sua pasta de imagens (pode ser o mesmo para miniatura e real)
const caminhoPasta = 'img_work/';

// 2. Mapeia o container do HTML onde as fotos serão injetadas
const container = document.getElementById('galeria-container');

// 3. Função que monta a galeria
function carregarGaleria() {
  container.innerHTML = ''; // Limpa o container

  listaImagens.forEach((imagem, index) => {
    // Cria a coluna do grid
    const coluna = document.createElement('div');
    coluna.className = 'col-6 col-md-4';

    // Cria o caminho completo da imagem real
    const urlImagemReal = `${caminhoPasta}${imagem.arquivo}`;

    // Cria a estrutura HTML com um link (<a>) em volta da imagem para o Lightbox
    coluna.innerHTML = `
      <div class="ratio ratio-1x1 overflow-hidden rounded border position-relative">
        <a href="${urlImagemReal}" class="glightbox-galeria-item galeria-item" data-gallery="galeria-trabalhos" data-glightbox="title: ${imagem.nome}; description: Trabalho em destaque">
          <!-- Miniatura da imagem -->
          <img 
            src="${urlImagemReal}" 
            class="img-fit img-hover" 
            alt="${imagem.nome}"
            onerror="this.src='https://placehold.co/300?text=Sem+Imagem'" 
          />
          <!-- Legenda na cor branca no rodapé -->
          <div class="legenda-overlay text-truncate">
            ${imagem.nome}
          </div>
        </a>
      </div>
    `;

    // Adiciona o elemento ao modal
    container.appendChild(coluna);
  });

  // 4. Inicializa o GLightbox (Novo)
  // 'selector' deve coincidir com a classe que demos ao link (<a>)
  GLightbox({
    selector: '.glightbox-galeria-item',
    touchNavigation: true, // Habilita deslizar no celular
    loop: true, // Volta para a primeira foto após a última
  });
}

// 5. Executa a função assim que o documento estiver pronto
document.addEventListener('DOMContentLoaded', carregarGaleria);