import { GameSaving } from '../GameSaving'

const obj = new GameSaving(9, 1546300800, { id: 1, name: "Hitman", level: 10, points: 2000 });

test('testing GameSaving', () => {
    expect(obj.id).toBe(9);
    expect(obj.created).toBe(1546300800);
    expect(obj.userInfo).toEqual({ id: 1, name: "Hitman", level: 10, points: 2000 });
})