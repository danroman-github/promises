import { GameSavingLoader } from "../GameSavingLoader";
import { GameSavingLoaderAwait } from "../GameSavingLoaderAwait";
import { GameSaving } from "../GameSaving";

const obj = new GameSaving(9, 1546300800, { id: 1, name: "Hitman", level: 10, points: 2000 });

test('testing GameSavingLoader', done => {
    const temp = new GameSavingLoader();
    temp.load()
        .then(saving => {
            expect(saving).toEqual(obj)
            done()
        })
})

test('testing GameSavingLoaderAwait', async () => {
    const game = await GameSavingLoaderAwait.load();
    expect(game).toEqual(obj)
})