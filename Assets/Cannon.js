function Update() {
    var angle = 90.0 * (Input.mousePosition.y / Screen.height - 1.0);
    transform.rotation = Quaternion.AngleAxis(angle, Vector3(0, 0, 1));
}
