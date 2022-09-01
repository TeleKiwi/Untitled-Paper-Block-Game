import { Game } from "./game";

const g = new Game(800, 450, "test", 60);

while(g.isRunning()) {
    g.Tick();
    g.Render();
}

g.Exit();