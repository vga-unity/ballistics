var shellPrefab : GameObject;

function Update() {
    if (Input.GetButtonDown("Fire1")) {
        var shell : GameObject = Instantiate(shellPrefab, transform.position, Quaternion.identity);
        var velocity = 30.0 * Input.mousePosition.x / Screen.width; 
        shell.rigidbody.velocity = transform.up * velocity;
    }
}
