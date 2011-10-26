#pragma strict

var angle : float = -45.0;

function Update() {
    transform.rotation = Quaternion.AngleAxis(angle, Vector3(0, 0, 1));
}

function OnGUI() {
    var sw = Screen.width;
    var sh = Screen.height;

    GUI.Label(Rect(8, sh - 76, sw * 0.1, 30), "Angle");

    angle = GUI.HorizontalSlider(Rect(sw * 0.1 + 16, sh - 56, sw * 0.5, 20), angle, -80, -10);
}
