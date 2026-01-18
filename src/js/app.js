import { GameSavingLoader } from "./GameSavingLoader";
import { GameSavingLoaderAwait } from "./GameSavingLoaderAwait";

// TODO: write your code here
const save = new GameSavingLoader();
save.load().then(data => console.log('GameSavingLoader', data));

const game = await GameSavingLoaderAwait.load();
console.log('GameSavingLoaderAwait', game)