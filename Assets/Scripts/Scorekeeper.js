#pragma strict

var skin : GUISkin;
var score : int;

function AddScore(value : int) {
    score += value;
}

function OnGUI() {
    GUI.skin = skin;
    GUI.Label(Rect(0, 0, Screen.width, 0.1 * Screen.height), "SCORE: " + score);
}
