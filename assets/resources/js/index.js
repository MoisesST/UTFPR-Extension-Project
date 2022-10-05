import { PlayerListController } from "./controllers/player-list-controller.js"
import { PlayerList } from "./model/player-list.js"
import { PlayerView } from "./view/player-view.js"

const app = new PlayerListController(new PlayerList(), new PlayerView());