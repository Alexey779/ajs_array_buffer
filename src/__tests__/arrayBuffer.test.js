import ArrayBuffer from '../arrayBuffer';
import getBuffer from '../index';

test('Проверка загрузки данных.', () => {
  const input = new ArrayBuffer();
  input.load(getBuffer());

  expect(input.buffer).toEqual(getBuffer());
});

test('Проверка перевода загруженных данных в строку.', () => {
  const input = new ArrayBuffer();
  input.load(getBuffer());

  expect(input.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
