import GetHealth from '../../health';

test('should health', () => {
  const result = GetHealth({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});

test('should health', () => {
  const result = GetHealth({name: 'Маг', health: 50});

  expect(result).toBe("wounded");
});

test('should health', () => {
  const result = GetHealth({name: 'Маг', health: 14});

  expect(result).toBe("critical");
});
test('should health', () => {
  const result = GetHealth({name: 'Маг', health: 15});

  expect(result).toBe("wounded");
});

test('should health', () => {
  const result = GetHealth({name: 'Маг', health: 20});

  expect(result).toBe("wounded");
});

