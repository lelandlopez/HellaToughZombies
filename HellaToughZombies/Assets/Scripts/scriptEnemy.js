//Enemy Script


//Inspector variables
var player					: Transform;
var moveSpeed				: float		= 8.0;
var life					: float 	= 100;
var damage					: float 	= 50.0;
var enemy					: GameObject;
var aiNodes					: GameObject;

//Private variables
private var shortestNode	: Transform;

function Start()
{
	player = GameObject.FindGameObjectWithTag("Player").transform;
}

function Update () 
{
	var shortestNode : GameObject;
	if(life == 0)
	{
		Destroy(gameObject);
	}
	
	transform.LookAt(player.transform.position);
	transform.Translate(0, 0, 1 * Time.deltaTime * moveSpeed);
}

function OnTriggerEnter (other : Collider) {
	if(other.transform.gameObject.tag == "Player")				//if collides with enemy
	{
		player.transform.GetComponent("scriptPlayer").life -= damage;
	}
}