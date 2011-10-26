#pragma strict

var shellPrefab : GameObject;
var power : float = 10;

function OnGUI() {
    var sw = Screen.width;
    var sh = Screen.height;

    GUI.Label(Rect(8, sh - 38, sw * 0.1, 30), "Power");

    power = GUI.HorizontalSlider(Rect(sw * 0.1 + 16, sh - 38, sw * 0.5, 30), power, 5, 40);

    if (GUI.Button(Rect(0.75 * sw, sh - 38, 0.25 * sw - 16, 30), "FIRE!")) {
        var shell : GameObject = Instantiate(shellPrefab, transform.position, Quaternion.identity);
        shell.rigidbody.velocity = transform.up * power;
    }
}
