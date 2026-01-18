import read from "./reader";
import json from "./parser";
import { GameSaving } from "./GameSaving"

export class GameSavingLoader {
    load() {
        return read()
            .then(buffer => json(buffer))
            .then(data => {
                const obj = JSON.parse(data)
                console.log(data)
                return new GameSaving(obj.id, obj.created, obj.userInfo)

            }).catch(err => err)
    }
}