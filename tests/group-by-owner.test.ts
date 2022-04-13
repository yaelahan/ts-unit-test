import { groupByOwner } from '../src/group-by-owner';

test('unique-name', () => {
    expect(groupByOwner({"input.txt": "Randy","code.py": "Stan","output.txt": "Randy"})).toStrictEqual({ Randy: [ 'input.txt', 'output.txt' ], Stan: [ 'code.py' ] });
})