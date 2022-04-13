import { uniqueName } from '../src/unique-name';

test('unique-name', () => {
    expect(uniqueName(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma'])).toStrictEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
    expect(uniqueName(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia'])).toStrictEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
})