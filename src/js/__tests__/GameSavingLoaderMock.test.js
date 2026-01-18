import { GameSavingLoader } from "../GameSavingLoader";
import { GameSavingLoaderAwait } from "../GameSavingLoaderAwait";
import read from "../reader";

jest.mock('../reader');

beforeEach(() => {
    jest.resetAllMocks();
})

test('testing GameSavingLoader mock', async () => {
    read.mockImplementation(() =>
        Promise.reject(new Error('GameSavingLoader reject read error'))
    );
    const temp = new GameSavingLoader();
    try {
        await temp.load();
    } catch (error) {
        expect(error.message).toBe('GameSavingLoader reject read error');
    }
})

test('testing GameSavingLoaderAwait mock', async () => {
    try {
        read.mockReturnValueOnce(new Error('return reject read error'));
        await GameSavingLoaderAwait.load();
    } catch (error) {
        expect(error.message).toEqual('return reject read error');
    }
})