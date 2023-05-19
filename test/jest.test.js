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
