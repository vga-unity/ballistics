#pragma strict

var explosionPrefab : GameObject;

function ApplyDamage() {
    Instantiate(explosionPrefab, transform.position, Quaternion.identity);
    Destroy(gameObject);
}
