Plano de Implementação - Showcases de Psicologia e Advocacia
Este plano detalha a reestruturação das páginas de demonstração /portfolio/psicologo e /portfolio/advogado para agirem como showcases visuais ("galeria de fotos/mockups de alta fidelidade"), alinhadas com a estética de cada setor e configuradas para captar leads redirecionando os cliques de WhatsApp para o contato do desenvolvedor (5511999999999).

Modificações Propostas
1. Geração de Imagens de Mockup
A. Espaço Camila Soares - Psicologia
Gerar 3 imagens com estética acolhedora, minimalista e feminina:

psico_desktop_hero: Notebook exibindo a tela inicial da psicóloga sobre uma mesa de madeira clara, com uma xícara de chá fumegante, luz solar suave e uma planta verde de fundo.
psico_mobile_quiz: Smartphone exibindo a tela do teste de autoavaliação emocional, ao lado de um diário em tons pastéis e uma caneta fina.
psico_tablet_pillars: Tablet detalhando os pilares de sigilo profissional e chamadas criptografadas, ao lado de uma vela aromática.
B. Souza Advocacia Corporativa
Gerar 3 imagens com estética corporativa, sóbria e premium (tons escuros e dourado):

adv_desktop_hero: Notebook exibindo o portal jurídico sobre uma escrivaninha de mogno escuro, ao lado de uma caneta tinteiro clássica e uma pasta executiva de couro.
adv_mobile_specialties: Smartphone exibindo as áreas de atuação (Direito Societário/Tributário), próximo a uma xícara de café preto e óculos de leitura refinados.
adv_tablet_case: Tablet mostrando o formulário de análise confidencial de caso, ao lado de relatórios contratuais encadernados.
2. Implementação das Páginas de Showcase
[MODIFY] 
page.tsx
Reescrever a rota com:

Tema Visual: Tons de pedra, verde sálvia e linho suave (bg-[#0c0d0c]).
Galeria Interativa: Carrossel das imagens geradas para a landing page de Psicologia.
Widget Interativo: O quiz funcional de autoavaliação emocional da página original, com visual repaginado.
WhatsApp Direct: Redirecionamento de todos os botões de conversão para 5511999999999 com a mensagem: "Olá! Vi seu portfólio e gostaria de um orçamento para um sistema/landing page de Psicologia similar ao do Espaço Camila."
[MODIFY] 
page.tsx
Reescrever a rota com:

Tema Visual: Tons sóbrios de azul-marinho, grafite e ouro bronzeado (bg-[#0a0c10]).
Galeria Interativa: Carrossel das imagens geradas para a landing page de Advocacia.
Widget Interativo: Seletor de especialidades com riscos e soluções legais integrados.
WhatsApp Direct: Redirecionamento de todos os botões de conversão para 5511999999999 com a mensagem: "Olá! Vi seu portfólio e gostaria de um orçamento para um portal/landing page de Advocacia de alto ticket similar ao do Souza Advocacia."
Plano de Verificação
Verificação Manual
Gerar e salvar as 6 novas imagens na pasta public/images/.
Executar npm run build para testar a validação de tipos de todas as páginas estáticas.
Acessar /portfolio/psicologo e /portfolio/advogado para verificar o carrossel, a interatividade dos widgets e o link de lead do WhatsApp.