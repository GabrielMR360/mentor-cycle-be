import { adicionarDepoimento, editarDepoimento } from './depoimento';

describe('Depoimentos', () => {
  it('Teste para adicionar um depoimento corretamente', () => {
    const usuarioId = '1';
    const mentorId = '1';
    const mensagem = 'A mentoria foi muito boa, tive uma ótima experiência';

    const depoimentoId = adicionarDepoimento(usuarioId, mentorId, mensagem);
    expect(depoimentoId).toBeDefined();
  });

  test('Teste para editar um depoimento corretamente', () => {
    const usuarioId = '1';
    const mentorId = '1';
    const mensagem = 'Mentor deu vários conselhos para me ajudar!';

    const depoimentoId = adicionarDepoimento(usuarioId, mentorId, mensagem);

    const novaMensagem = 'Aprendi bastante com o mentor!';
    const novoDepoimento = editarDepoimento(depoimentoId, novaMensagem);

    expect(novoDepoimento).toEqual({
      id: depoimentoId,
      usuarioId,
      mentorId,
      mensagem: novaMensagem,
    });
  });
});
