# Exercício 7 — Alocação de Requisitos Funcionais a Componentes de Software

## Objetivo

Este exercício marca a transição da engenharia de requisitos para o desenho do sistema.  
Os estudantes irão analisar uma **solução de software existente** e determinar como os **requisitos funcionais do sistema**, desenvolvidos nos exercícios anteriores, podem ser alocados a componentes já existentes ou se será necessário criar novos componentes.

---

## Contexto

Nos exercícios anteriores sobre engenharia de requisitos:
- Foram definidos e refinidos requisitos funcionais e não funcionais.  
- Foram modelados os comportamentos e criadas matrizes de rastreabilidade.  
- Foram estudadas técnicas de elicitação e modelação UML.  

Agora, o foco passa para o **espaço da solução**, explorando **como o sistema pode satisfazer os requisitos**, analisando a arquitetura existente e identificando quais os componentes que implementam (ou deverão implementar) cada funcionalidade.

---

## Descrição da Tarefa

1. **Analisar a arquitetura existente**
   - Revê a lista ou diagrama dos componentes atuais fornecidos pelo docente ou existentes no contexto do projeto.  
   - Identifica o papel, fronteiras e interações de cada componente.

2. **Alocar os requisitos funcionais**
   - Para cada **requisito funcional do sistema**, determina se:
     - Pode ser implementado por um **componente existente**; ou  
     - Requer a criação de um **novo componente** na arquitetura.  
   - Aplica princípios de design como **modularidade, coesão, baixo acoplamento** e **separação de responsabilidades**.

3. **Garantir cobertura total (100%)**
   - Todos os **requisitos funcionais** devem estar mapeados a pelo menos um componente.  
   - Nenhum requisito deve ficar sem alocação.

4. **Documentar a alocação**
   - Cria uma **Tabela de Alocação de Requisitos Funcionais**, por exemplo:

   | ID do Requisito | Descrição | Componente Alocado | Novo Componente Necessário? | Justificação |
   |------------------|------------|--------------------|-----------------------------|---------------|
   | FR-001 | Autenticar utilizador | AuthService | Não | Componente existente trata autenticação. |
   | FR-004 | Guardar imagem automaticamente | ImageEditor | Não | Função pode ser adicionada ao módulo atual. |
   | FR-010 | Partilhar imagem nas redes sociais | SocialShareManager | Sim | Novo módulo necessário para integração de APIs. |

5. **Refletir sobre a qualidade do design**
   - Avalia se a alocação respeita os princípios de modularidade e se há componentes sobrecarregados ou com fronteiras pouco claras.

---

## Resultado Esperado

O relatório deve incluir:

1. **Descrição breve da arquitetura existente** (lista ou diagrama de componentes).  
2. **Tabela de Alocação** com 100% de mapeamento dos requisitos funcionais.  
3. **Justificação** para a criação ou modificação de componentes.  
4. **Diagramas estruturais UML actualizados** refletindo as alterações consideradas. 
4. **Reflexão** sobre a aplicação dos princípios de design.

---

## Orientações

- Mantém o foco na **alocação lógica**, não nos detalhes de implementação.  
- Considera modularidade, escalabilidade, manutenibilidade e reutilização.  
- Se um requisito impactar vários componentes, indica todos os relevantes.  
- Usa diagramas UML de Componentes ou de Contexto, se possível.

---

## Resultados de Aprendizagem

Após este exercício, deverás ser capaz de:
- Transitar da **engenharia de requisitos** para o **desenho arquitetural**.  
- Alocar **requisitos funcionais** a componentes.  
- Aplicar **princípios de design modular**.  
- Identificar necessidades de extensão ou refatorização da arquitetura existente.

---

## 📘 Exemplo de Resultados Esperados

| ID | Descrição | Componente | Novo Componente? | Justificação |
|----|------------|-------------|------------------|---------------|
| FR-001 | Login de utilizador | AuthService | Não | Componente já existente. |
| FR-005 | Pré-visualização em tempo real | ImageProcessor | Não | Melhoria no módulo atual. |
| FR-008 | Guardar na cloud | CloudSyncManager | Sim | Novo módulo necessário. |

**Reflexão:**  
A alocação garantiu cobertura total dos requisitos.  
A modularidade foi preservada, evitando sobrecarga em componentes existentes.  
Foram propostos dois novos componentes (`CloudSyncManager`, `SocialShareManager`) para assegurar escalabilidade e responsabilidades bem definidas.
