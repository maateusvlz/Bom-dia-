# Plano de Testes para o Site "Você é Especial"

## 1. Compatibilidade entre Navegadores
- Testar o site nos navegadores:
  - Google Chrome (última versão)
  - Mozilla Firefox (última versão)
  - Microsoft Edge (última versão)
  - Safari (última versão, especialmente em macOS e iOS)
- Verificar se o layout, animações e funcionalidades (botão compartilhar, animações de corações) funcionam corretamente.

## 2. Responsividade em Dispositivos Móveis
- Testar em diferentes tamanhos de tela:
  - Smartphones (Android e iOS)
  - Tablets
- Verificar se o layout se adapta corretamente, sem quebras ou elementos sobrepostos.
- Testar interações por toque, incluindo o botão de compartilhar e animações.

## 3. Acessibilidade
- Verificar navegação por teclado (tab, shift+tab, enter, espaço).
- Testar compatibilidade com leitores de tela (NVDA, VoiceOver).
- Verificar contraste de cores e legibilidade.
- Usar ferramentas como axe-core para análise automática de acessibilidade.

## 4. Desempenho
- Testar tempo de carregamento em conexões lentas (3G).
- Verificar uso de recursos e fluidez das animações.
- Usar ferramentas como Lighthouse para análise de performance.

## 5. Testes Funcionais
- Verificar funcionamento do botão "Compartilhar esta mensagem" em diferentes dispositivos.
- Testar efeitos interativos (clique no card, animações de corações).

---

## Sugestão de Ferramentas para Testes Automatizados
- [axe-core](https://github.com/dequelabs/axe-core) para acessibilidade.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) para performance e SEO.
- [Puppeteer](https://pptr.dev/) para testes de interface e responsividade.
- Ferramentas de emulação de dispositivos nos navegadores.

---

Se desejar, posso ajudar a criar scripts básicos para automatizar alguns desses testes. Por favor, me informe se deseja que eu faça isso.
