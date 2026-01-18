import read from "./reader";
import json from "./parser";
import { GameSaving } from "./GameSaving"

export class GameSavingLoaderAwait {

    static async load() {
        try {
            const buffer = await read();
            const data = await json(buffer);
            const obj = JSON.parse(data)
            console.log(data)
            return new GameSaving(obj.id, obj.created, obj.userInfo)
        } catch (err) {
            return err;
        }

    }
}