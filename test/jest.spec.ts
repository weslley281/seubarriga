test('should be able to know somethings about jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 12;
  expect(number).not.toBeNull();
  expect(number).toBe(12);
  expect(number).toEqual(12);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(13);
});

test('Devo saber trabalhar com Objeto', () => {
  const obj = { nome: 'weslley', email: 'weslley@gmail.com' };
  expect(obj).toHaveProperty('nome');
  expect(obj).toHaveProperty('nome', 'weslley');
  expect(obj.nome).toBe('weslley');

  const obj2 = { nome: 'weslley', email: 'weslley@gmail.com' };

  expect(obj2).toEqual(obj);
  expect(obj2).toBe(obj2);
});
