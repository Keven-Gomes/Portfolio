// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// RESUME FUNCTIONS
// ===========================

// Toggle mostrar/ocultar currículo
function toggleResume() {
    const resumeContent = document.getElementById('resumeContent');
    const toggleBtn = document.getElementById('toggleBtn');
    
    if (resumeContent.style.display === 'none') {
        resumeContent.style.display = 'block';
        toggleBtn.innerHTML = '👁️‍🗨️ Ocultar Currículo';
    } else {
        resumeContent.style.display = 'none';
        toggleBtn.innerHTML = '👁️ Visualizar Currículo';
    }
}

// Função para baixar currículo como TXT
function downloadResume() {
    const resumeText = `KEVEN CRISTIAN GOMES
Desenvolvedor Frontend Júnior | HTML5 | CSS3 | JavaScript

═══════════════════════════════════════════════════════
CONTATO
═══════════════════════════════════════════════════════
📍 Juiz de Fora/MG
📞 (32) 99127-1483
✉️ kevengomesjf@gmail.com
💼 linkedin.com/in/keven-gomes-a2a1b0390
💻 github.com/Keven-Gomes
🌐 keven-gomes.github.io/Portfolio

═══════════════════════════════════════════════════════
🎯 OBJETIVO
═══════════════════════════════════════════════════════
Atuar como Desenvolvedor Frontend Júnior em projetos que envolvam 
desenvolvimento web moderno, aplicando conhecimentos em HTML5, CSS3 e 
JavaScript para criar interfaces responsivas e acessíveis. Busco 
oportunidade para crescer profissionalmente, trabalhar em equipe 
colaborativa e contribuir com código limpo e organizado. 
Disponível para trabalho remoto, presencial ou híbrido.

═══════════════════════════════════════════════════════
💡 RESUMO PROFISSIONAL
═══════════════════════════════════════════════════════
Desenvolvedor Frontend em formação com perfil curioso, motivado e 
comprometido com aprendizado contínuo. Portfólio com 3 projetos 
práticos demonstrando domínio progressivo de HTML5, CSS3, design 
responsivo mobile-first e organização modular de código. Experiência 
em apresentação pública através de palestras e workshops. Forte 
interesse em evoluir para React.js e Next.js.

═══════════════════════════════════════════════════════
🎓 FORMAÇÃO ACADÊMICA
═══════════════════════════════════════════════════════
Ensino Médio Completo
Colégio Municipal de Juiz de Fora/MG | 2021-2023

═══════════════════════════════════════════════════════
📜 CURSOS E CERTIFICAÇÕES
═══════════════════════════════════════════════════════
• DevQuest - Desenvolvimento Web Full Stack
  Curso de Extensão Universitária com monitoria e suporte
  Início: 11/06/2025 | Status: Cursando

• Pacote Office - Prepara Cursos | 2023-2025
  - Segurança na Era Digital
  - Windows 11
  - Microsoft PowerPoint
  - Internet e Outlook
  - Microsoft Excel
  - Microsoft Word

═══════════════════════════════════════════════════════
🌍 IDIOMAS
═══════════════════════════════════════════════════════
• Português - Nativo
• Inglês - Básico (leitura de documentação técnica)
• Espanhol - Básico

═══════════════════════════════════════════════════════
🚀 PROJETOS DE PORTFÓLIO
═══════════════════════════════════════════════════════

1. LANDING PAGE - AGÊNCIA
   Tecnologias: HTML5, CSS3 (Animations, Transitions, Flexbox)
   
   Landing page completa e responsiva para agência digital, com 
   design moderno e layout profissional. Layout totalmente responsivo 
   com abordagem mobile-first, animações CSS personalizadas e 
   estrutura semântica HTML5 otimizada.
   
   Link: github.com/Keven-Gomes

2. THE BANK - MENU RESPONSIVO
   Tecnologias: HTML5, CSS3 (Flexbox, transitions), Google Fonts
   
   Header com menu de navegação responsivo, focado em organização e 
   código limpo. Navegação semântica, organização modular de CSS e 
   efeitos de hover com transitions suaves.
   
   Link: github.com/Keven-Gomes/Menu

3. CARTÃO DE PERFIL
   Tecnologias: HTML5, CSS3 (Flexbox, variáveis CSS), Google Fonts
   
   Componente de perfil responsivo focado em layout Flexbox e boas 
   práticas. Arquitetura de pastas escalável, reset CSS personalizado 
   e documentação completa.
   
   Link: github.com/Keven-Gomes/Cartao-de-Perfil

═══════════════════════════════════════════════════════
🛠️ COMPETÊNCIAS TÉCNICAS
═══════════════════════════════════════════════════════
Frontend: HTML5, CSS3, JavaScript (fundamentos)
Layout: Flexbox, CSS Grid, Design Responsivo (mobile-first), 
        Variáveis CSS
Ferramentas: Git/GitHub, VS Code, Figma
Office: Word, Excel, PowerPoint
Metodologias: Clean Code, Organização modular, Semantic HTML

═══════════════════════════════════════════════════════
💫 COMPETÊNCIAS COMPORTAMENTAIS
═══════════════════════════════════════════════════════
• Trabalho em equipe e colaboração
• Comunicação clara e assertiva
• Apresentação pública (palestras e workshops)
• Curiosidade e aprendizado contínuo
• Proatividade e iniciativa
• Resiliência e adaptabilidade
• Organização e gestão de tempo
• Resolução de problemas

═══════════════════════════════════════════════════════
📊 DISPONIBILIDADE
═══════════════════════════════════════════════════════
Disponibilidade: Imediata
Carga horária: Flexível (integral, meio período, freelance)
Modalidade: Remoto, Presencial ou Híbrido
Localização: Juiz de Fora/MG

═══════════════════════════════════════════════════════
🎯 OBJETIVOS PROFISSIONAIS
═══════════════════════════════════════════════════════
• Consolidar conhecimentos em JavaScript
• Aprender React.js e Next.js
• Contribuir em projetos open source
• Crescer como desenvolvedor frontend completo

═══════════════════════════════════════════════════════

Currículo gerado em: ${new Date().toLocaleDateString('pt-BR')}
Portfólio online: https://keven-gomes.github.io/Portfolio/
`;

    try {
        const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Curriculo_Keven_Gomes.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        alert('✅ Currículo baixado com sucesso!');
    } catch (error) {
        console.error('Erro ao baixar:', error);
        alert('❌ Erro ao baixar o currículo. Tente copiar o texto.');
    }
}

// Função para copiar texto do currículo
function copyResumeText() {
    const resumeText = `KEVEN CRISTIAN GOMES
Desenvolvedor Frontend Júnior | HTML5 | CSS3 | JavaScript

CONTATO
📍 Juiz de Fora/MG
📞 (32) 99127-1483
✉️ kevengomesjf@gmail.com
💼 linkedin.com/in/keven-gomes-a2a1b0390
💻 github.com/Keven-Gomes
🌐 keven-gomes.github.io/Portfolio

OBJETIVO
Atuar como Desenvolvedor Frontend Júnior em projetos que envolvam desenvolvimento web moderno, aplicando conhecimentos em HTML5, CSS3 e JavaScript. Busco oportunidade para crescer profissionalmente, trabalhar em equipe colaborativa e contribuir com código limpo e organizado. Disponível para trabalho remoto, presencial ou híbrido.

RESUMO PROFISSIONAL
Desenvolvedor Frontend em formação com perfil curioso, motivado e comprometido com aprendizado contínuo. Portfólio com 3 projetos práticos demonstrando domínio progressivo de HTML5, CSS3, design responsivo mobile-first e organização modular de código. Experiência em apresentação pública através de palestras e workshops.

FORMAÇÃO ACADÊMICA
Ensino Médio Completo | Colégio Municipal de Juiz de Fora/MG | 2021-2023

CURSOS
• DevQuest - Desenvolvimento Web Full Stack (Cursando - Início: 11/06/2025)
• Pacote Office - Prepara Cursos (2023-2025)

IDIOMAS
Português (Nativo) • Inglês (Básico) • Espanhol (Básico)

PROJETOS
1. Landing Page - Agência | HTML5, CSS3, Animations
2. The Bank - Menu | HTML5, CSS3, Flexbox
3. Cartão de Perfil | HTML5, CSS3, Google Fonts

HABILIDADES TÉCNICAS
HTML5 • CSS3 • JavaScript • Flexbox • CSS Grid • Git/GitHub • VS Code • Figma • Design Responsivo

HABILIDADES COMPORTAMENTAIS
Trabalho em equipe • Comunicação • Apresentação pública • Curiosidade • Proatividade • Resiliência

DISPONIBILIDADE
Imediata | Remoto, Presencial ou Híbrido | Juiz de Fora/MG

Portfólio: https://keven-gomes.github.io/Portfolio/
`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(resumeText).then(() => {
            alert('✅ Currículo copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            fallbackCopy(resumeText);
        });
    } else {
        fallbackCopy(resumeText);
    }
}

// Função fallback para navegadores antigos
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('✅ Currículo copiado para a área de transferência!');
        } else {
            alert('❌ Erro ao copiar. Por favor, selecione e copie manualmente.');
        }
    } catch (err) {
        console.error('Fallback: Erro ao copiar', err);
        alert('❌ Erro ao copiar. Por favor, selecione e copie manualmente.');
    }
    
    document.body.removeChild(textarea);
}

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// RESUME FUNCTIONS
// ===========================

// Função para baixar currículo como TXT
function downloadResume() {
    const resumeText = `KEVEN CRISTIAN GOMES
Desenvolvedor Frontend Júnior | HTML5 | CSS3 | JavaScript

CONTATO
📍 Juiz de Fora/MG
📞 (32) 99127-1483
✉️ kevengomesjf@gmail.com
💼 linkedin.com/in/keven-gomes-a2a1b0390
💻 github.com/Keven-Gomes
🌐 keven-gomes.github.io/Portfolio

OBJETIVO
Atuar como Desenvolvedor Frontend Júnior em projetos que envolvam desenvolvimento web moderno, aplicando conhecimentos em HTML5, CSS3 e JavaScript. Busco oportunidade para crescer profissionalmente, trabalhar em equipe colaborativa e contribuir com código limpo e organizado. Disponível para trabalho remoto, presencial ou híbrido.

RESUMO PROFISSIONAL
Desenvolvedor Frontend em formação com perfil curioso, motivado e comprometido com aprendizado contínuo. Portfólio com 3 projetos práticos demonstrando domínio progressivo de HTML5, CSS3, design responsivo mobile-first e organização modular de código. Experiência em apresentação pública através de palestras e workshops. Forte interesse em evoluir para React.js e Next.js.

FORMAÇÃO ACADÊMICA
Ensino Médio Completo
Colégio Municipal de Juiz de Fora/MG | 2021-2023

CURSOS E CERTIFICAÇÕES
• DevQuest - Desenvolvimento Web Full Stack
  Curso de Extensão Universitária com monitoria e suporte
  Início: 11/06/2025 | Status: Cursando

• Pacote Office - Prepara Cursos | 2023-2025
  - Segurança na Era Digital
  - Windows 11
  - Microsoft PowerPoint
  - Internet e Outlook
  - Microsoft Excel
  - Microsoft Word

IDIOMAS
• Português - Nativo
• Inglês - Básico (leitura de documentação técnica)
• Espanhol - Básico

PROJETOS DE PORTFÓLIO
1. Landing Page - Agência
   HTML5, CSS3, Animations
   Landing page completa e responsiva com design moderno
   github.com/Keven-Gomes

2. The Bank - Menu
   HTML5, CSS3, Flexbox
   Header responsivo com navegação organizada
   github.com/Keven-Gomes/Menu

3. Cartão de Perfil
   HTML5, CSS3, Flexbox, Google Fonts
   Componente responsivo seguindo boas práticas
   github.com/Keven-Gomes/Cartao-de-Perfil

COMPETÊNCIAS TÉCNICAS
Frontend: HTML5, CSS3, JavaScript (fundamentos)
Layout: Flexbox, CSS Grid, Design Responsivo (mobile-first), Variáveis CSS
Ferramentas: Git/GitHub, VS Code, Figma
Metodologias: Clean Code, Organização modular, Semantic HTML
Office: Word, Excel, PowerPoint

COMPETÊNCIAS COMPORTAMENTAIS
• Trabalho em equipe e colaboração
• Comunicação clara e assertiva
• Apresentação pública (palestras e workshops)
• Curiosidade e aprendizado contínuo
• Proatividade e iniciativa
• Resiliência e adaptabilidade
• Organização e gestão de tempo
• Resolução de problemas

DISPONIBILIDADE
Disponibilidade: Imediata
Carga horária: Flexível (integral, meio período, freelance)
Modalidade: Remoto, Presencial ou Híbrido
Localização: Juiz de Fora/MG

OBJETIVOS FUTUROS
• Consolidar conhecimentos em JavaScript
• Aprender React.js e Next.js
• Contribuir em projetos open source
• Crescer como desenvolvedor frontend
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Curriculo_Keven_Gomes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('✅ Currículo baixado com sucesso!');
}

// Função para copiar texto do currículo
function copyResumeText() {
    const resumeText = `KEVEN CRISTIAN GOMES
Desenvolvedor Frontend Júnior | HTML5 | CSS3 | JavaScript

CONTATO
📍 Juiz de Fora/MG
📞 (32) 99127-1483
✉️ kevengomesjf@gmail.com
💼 linkedin.com/in/keven-gomes-a2a1b0390
💻 github.com/Keven-Gomes
🌐 keven-gomes.github.io/Portfolio

OBJETIVO
Atuar como Desenvolvedor Frontend Júnior em projetos que envolvam desenvolvimento web moderno, aplicando conhecimentos em HTML5, CSS3 e JavaScript. Busco oportunidade para crescer profissionalmente, trabalhar em equipe colaborativa e contribuir com código limpo e organizado. Disponível para trabalho remoto, presencial ou híbrido.

RESUMO PROFISSIONAL
Desenvolvedor Frontend em formação com perfil curioso, motivado e comprometido com aprendizado contínuo. Portfólio com 3 projetos práticos demonstrando domínio progressivo de HTML5, CSS3, design responsivo mobile-first e organização modular de código. Experiência em apresentação pública através de palestras e workshops. Forte interesse em evoluir para React.js e Next.js.

FORMAÇÃO ACADÊMICA
Ensino Médio Completo
Colégio Municipal de Juiz de Fora/MG | 2021-2023

CURSOS E CERTIFICAÇÕES
• DevQuest - Desenvolvimento Web Full Stack (Cursando - Início: 11/06/2025)
• Pacote Office - Prepara Cursos (2023-2025)
  - Word, Excel, PowerPoint, Internet e Outlook, Windows 11, Segurança na Era Digital

IDIOMAS
• Português - Nativo • Inglês - Básico • Espanhol - Básico

PROJETOS
1. Landing Page - Agência | HTML5, CSS3, Animations
2. The Bank - Menu | HTML5, CSS3, Flexbox
3. Cartão de Perfil | HTML5, CSS3, Google Fonts

HABILIDADES TÉCNICAS
HTML5 • CSS3 • JavaScript • Flexbox • CSS Grid • Git/GitHub • VS Code • Figma • Design Responsivo

HABILIDADES COMPORTAMENTAIS
Trabalho em equipe • Comunicação • Apresentação pública • Curiosidade • Proatividade • Resiliência

DISPONIBILIDADE: Imediata | Remoto, Presencial ou Híbrido | Juiz de Fora/MG
`;

    navigator.clipboard.writeText(resumeText).then(() => {
        alert('✅ Currículo copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        // Fallback para navegadores que não suportam clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = resumeText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('✅ Currículo copiado para a área de transferência!');
        } catch (err) {
            alert('❌ Erro ao copiar. Por favor, copie manualmente.');
        }
        document.body.removeChild(textarea);
    });
}

// ===========================
// MOBILE MENU TOGGLE (Futuro)
// ===========================
// Código preparado para futura implementação de menu hambúrguer

// ===========================
// SCROLL REVEAL ANIMATIONS (Opcional)
// ===========================
// Código preparado para adicionar animações ao rolar a página