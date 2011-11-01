#pragma strict

var velocityThreshold : float = 20.0;

function OnCollisionEnter(info : Collision) {
    if (info.gameObject.tag == "Breakable") {
        if (info.relativeVelocity.magnitude > velocityThreshold) {
            info.gameObject.SendMessage("ApplyDamage");
        }
    }
}

/*
function OnCollisionEnter(info : Collision) {
    Debug.Log("Hit");
}

function OnCollisionExit(info : Collision) {
    Debug.Log("Exit");
}
*/
