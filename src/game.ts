// This file is a modified version of Rayframe 1.5
import r = require('raylib');

export class Game
{
    screenWidth: number;
    screenHeight: number;
    title: string;
    targetFPS: number;
    
    globalTimer: number;
    deltaTime: number;

    constructor(screenWidth: number, screenHeight: number , title: string, targetFPS: number) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.title = title;
        this.targetFPS = targetFPS;
        
        this.globalTimer = 0;
        this.deltaTime = 0;

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    Tick = (): void => {
        this.globalTimer++;
    }

    Render = (): void => {
        r.BeginDrawing();
        r.ClearBackground(r.RAYWHITE);

        r.DrawFPS(0, 0)
        r.DrawText("Congratulations! You have found the first build of this game.", 135, 200, 20, r.LIGHTGRAY)
        r.DrawText("Are you happy yet?", 135, 220, 20, r.LIGHTGRAY)
        r.DrawText(`${this.globalTimer}`, 0, 14, 20, r.GREEN);
        r.DrawText(`${this.deltaTime}`, 0, 40, 20, r.GREEN);

        r.EndDrawing();
        this.deltaTime = r.GetFrameTime();
    }

    isRunning = (): boolean => { return !r.WindowShouldClose(); }

    Exit = (): void => {
        r.CloseWindow();
    }
}