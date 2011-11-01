#pragma strict

var angle : float = -45.0;

var skin : GUISkin;

function Update() {
    transform.rotation = Quaternion.AngleAxis(angle, Vector3(0, 0, 1));
}

function OnGUI() {
    GUI.skin = skin;

    var sw = Screen.width;
    var sh = Screen.height;

    GUI.Label(Rect(0.05 * sw, 0.8 * sh, 0.6 * sw, 0.05 * sh), "Angle");

    angle = GUI.HorizontalSlider(Rect(0.05 * sw, 0.85 * sh, 0.6 * sw, 0.05 * sh), angle, -90, -20);
}
