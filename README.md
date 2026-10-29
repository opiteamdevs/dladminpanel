# DL Admin Panel

Painel administrativo Next.js + Supabase.

## Configuração local

1. Instale Node.js compatível com a versão do Next.js do projeto.
2. Copie `.env.example` para `.env.local`.
3. Configure:
   - `NEXT_PUBLIC_SUPABASE_URL`: URL do projeto Supabase (ou URL do proxy compatível).
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: chave pública/anon do Supabase (nunca use a service-role no navegador).
   - `DB_CONNECTION_STRING`: conexão PostgreSQL usada para listar tabelas e colunas.
   - `PANEL_URL`: URL pública do painel, se necessário.
4. Configure `supabase-admin.config.ts`. O exemplo verifica `profiles.isAdmin` para autorizar o painel; confirme que essa tabela e coluna existem e que as políticas do banco estão corretas.
5. Execute `npm install`, depois `npm run dev`.

## Build e validação

- `npm run typecheck`
- `npm run build`

## Observações importantes

- `DB_CONNECTION_STRING` é um segredo de servidor. Configure-o nas variáveis de ambiente do provedor, não no código e nem em `NEXT_PUBLIC_*`.
- A listagem de tabelas usa conexão PostgreSQL direta (`pg`). O ambiente de hospedagem precisa permitir conexões TCP de saída ao banco. Ambientes edge/Workers podem não suportar esse driver; nesse caso, hospede o painel em um runtime Node.js ou substitua essa parte por uma API segura compatível com o provedor.
- O painel é administrativo. Mantenha a verificação de administrador no servidor e proteja o acesso às tabelas com políticas apropriadas.
