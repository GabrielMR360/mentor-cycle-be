import { v4 as uuidv4 } from 'uuid';

interface Depoimento {
  id: string;
  usuarioId: string;
  mentorId: string;
  mensagem: string;
}

const depoimentos: Depoimento[] = [];

function generateId(): string {
  return uuidv4();
}

export function adicionarDepoimento(
  usuarioId: string,
  mentorId: string,
  mensagem: string,
): string {
  const id = generateId();

  const depoimento: Depoimento = {
    id,
    usuarioId,
    mentorId,
    mensagem,
  };
  depoimentos.push(depoimento);

  return id;
}

export function editarDepoimento(
  depoimentoId: string,
  novaMensagem: string,
): Depoimento | null {
  const depoimento = depoimentos.find(
    (depoimento) => depoimento.id === depoimentoId,
  );
  depoimento.mensagem = novaMensagem;

  return depoimento;
}
