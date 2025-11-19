# Exercício 6 — Análise de Padrões Arquiteturais e seu Impacto na Qualidade do Software

## Objetivo

Este exercício tem como objetivo desenvolver a capacidade de **análise e avaliação crítica de padrões arquiteturais** em soluções de software existentes.
Os estudantes irão identificar, analisar e avaliar o padrão arquitetural adotado numa solução, compreendendo o seu impacto nos atributos de qualidade do sistema e comparando-o com padrões alternativos.

---

## Contexto

Nos exercícios anteriores foram identificados requisitos não funcionais bem como as categorias a que estes pertencem,. e.g, Performance, Disponibilidade, etc.
Agora, o foco passa para a **análise arquitetural de alto nível**, explorando como o padrão arquitetural escolhido influencia as características de qualidade do sistema e considerando alternativas arquiteturais.

---

## Descrição da Tarefa

1. **Identificar o Padrão Arquitetural**
   - Analisa a solução de software fornecida.
   - Identifica o padrão arquitetural principal (e.g., Layered, MVC, Microservices).
   - Documenta as evidências que suportam a identificação do padrão.

2. **Analisar Benefícios e Compromissos**
   - Para o padrão identificado, analisa:
     - Benefícios principais para o sistema
     - Impacto nos requisitos não funcionais / atributos de qualidade
     - Possíveis limitações ou desafios
   - Documenta como o padrão suporta os requisitos não funcionais identificados no contexto da fase 1.

3. **Comparar com Padrões Alternativos**
   - Identifica 2-3 padrões arquiteturais alternativos relevantes.
   - Consulta os slides da aula 11 Arch. Styles
   - Para cada alternativa, analisa:
     - Como afetaria os atributos de qualidade
     - Vantagens potenciais
     - Desvantagens ou riscos
   - Justifica por que o padrão atual pode ser mais (ou menos) adequado considerando os requisitos não funcionais identificados.

4. **Análise de Trade-offs**
   - Cria uma matriz comparativa dos padrões considerando:
     - Desempenho
     - Disponibilidade
     - Escalabilidade
     - Manutenibilidade
     - Segurança
     - Modificabilidade

---

## Resultado Esperado

O resultado da análise deve incluir (a introduczir no relatório da fase 3):

1. **Identificação e Análise do Padrão Atual**
   - Nome e descrição do padrão
   - Evidências na solução
   - Benefícios principais
   - Desafios identificados

2. **Matriz de Comparação de Padrões**

   | Atributo de Qualidade | Padrão Atual | Alternativa 1 | Alternativa 2 |
   |----------------------|---------------|---------------|---------------|
   | Desempenho          | Alto          | Médio         | Baixo        |
   | Disponibilidade     | Médio         | Alto          | Alto         |
   | Escalabilidade      | Alto          | Médio         | Alto         |
   | Manutenibilidade    | Médio         | Alto          | Médio        |

3. **Análise de Trade-offs no contexto da solução a desenvolver**
   - Apresenta uma justificação detalhada das avaliações da tabela anterior
   - Identifica quais os cenários de qualidade relevantes para o sistema com base nos requsitos não funcionais da solução a desenvolver. (e.g., utilizador obtem respostas do sistema em tempo infeiror a 1 segundo - Performance)
   - Define a lista dos atributos de qualidade mais importantes (por prioridade 1..N) tendo por base os cenários de qualidade mais importantes (e.g., 1. Performance, 2. Disponibilidade, 3. Usabilidade, ...)
   - Recomendações para melhorias à solução actual

4. **Conclusões e Recomendações**
   - Adequação do padrão atual
   - Sugestões de otimização
   - Considerações para evolução futura

---

## Orientações

- Foca na análise objetiva baseada em evidências.
- Considera o contexto específico do sistema.
- Usa exemplos concretos para ilustrar impactos.
- Referencia literatura ou casos de estudo relevantes.

---

## Resultados de Aprendizagem

Após este exercício, deverás ser capaz de:
- Identificar e analisar padrões arquiteturais em sistemas existentes.
- Avaliar o impacto de diferentes padrões nos atributos de qualidade.
- Comparar objetivamente alternativas arquiteturais.
- Justificar decisões arquiteturais com base em evidências.
- Compreender trade-offs entre diferentes padrões arquiteturais.

---

## 📚 Padrões Arquiteturais Comuns para Análise

### 1. Padrões em Camadas (Layered)
- **Características:**
  - Organização hierárquica
  - Separação clara de responsabilidades
  - Dependências unidirecionais
- **Variantes:**
  - Strict Layered (comunicação apenas entre camadas adjacentes)
  - Relaxed Layered (permite bypass de camadas)
  - N-Tier Architecture

### 2. Padrão Monolítico
- **Características:**
  - Aplicação como única unidade
  - Simplicidade de desenvolvimento
  - Deploy único
- **Variantes:**
  - Modular Monolith
  - Pipeline Monolith
  - Microkernel

### 3. Microserviços
- **Características:**
  - Serviços independentes
  - Deploy independente
  - Bases de dados dedicadas
- **Variantes:**
  - API Gateway
  - Sidecar Pattern
  - Service Mesh

### 4. Event-Driven
- **Características:**
  - Comunicação assíncrona
  - Desacoplamento
  - Escalabilidade
- **Variantes:**
  - Publish-Subscribe
  - Event Sourcing
  - CQRS

### 5. Service-Oriented Architecture (SOA)
- **Características:**
  - Serviços reutilizáveis
  - Contratos bem definidos
  - Enterprise Service Bus
- **Variantes:**
  - Enterprise SOA
  - Domain-Driven SOA
  - RESTful SOA

### Considerações para Análise
- Contexto do sistema
- Requisitos não funcionais críticos
- Necessidades de evolução
- Restrições tecnológicas
- Custos operacionais