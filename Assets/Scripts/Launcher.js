#pragma strict

var skin : GUISkin;

var shellPrefab : GameObject;
var power : float = 10;

function OnGUI() {
    GUI.skin = skin;

    var sw = Screen.width;
    var sh = Screen.height;

    GUI.Label(Rect(0.05 * sw, 0.9 * sh, 0.6 * sw, 0.05 * sh), "Power");

    power = GUI.HorizontalSlider(Rect(0.05 * sw, 0.95 * sh, 0.6 * sw, 0.05 * sh), power, 5, 40);

    if (GUI.Button(Rect(0.75 * sw, 0.85 * sh, 0.2 * sw, 0.1 * sh), "FIRE!")) {
        var shell : GameObject = Instantiate(shellPrefab, transform.position, Quaternion.identity);
        shell.rigidbody.velocity = transform.up * power;
    }
}
