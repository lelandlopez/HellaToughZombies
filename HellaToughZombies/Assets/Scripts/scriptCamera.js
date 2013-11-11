//Camera Script

//Inspector variables
var player				: Transform;

//Private variables


function Update () {
	transform.position = Vector3(player.position.x, player.position.y + 20, player.position.z - 10);

}