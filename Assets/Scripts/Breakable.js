#pragma strict

var explosionPrefab : GameObject;

function ApplyDamage() {
    GameObject.FindWithTag("GameController").SendMessage("AddScore", 3);
    Instantiate(explosionPrefab, transform.position, Quaternion.identity);
    Destroy(gameObject);
}
