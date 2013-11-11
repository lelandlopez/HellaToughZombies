//Bullet Script

//Inspector variables
var bulletSpeed				: float 	= 20.0f;
var gameTime				: float 	= 0;
var damage					: float		= 50.0f;
//Private variables
private var previouspos	: Vector3;
function Start ()
{
	InvokeRepeating("TimerIncrement", 1.0, 1.0);
}

function Update () 
{
	if(gameTime >= 1.5)
	{
		Destroy(gameObject);
	}
	transform.Translate(0, 0, bulletSpeed * Time.deltaTime);	//move the bullet
	previouspos = transform.position;
	var hit: RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward);
	if (Physics.Raycast(transform.position, fwd, hit, bulletSpeed*Time.deltaTime))
	{
		print(hit.transform.gameObject.tag);
		if(hit.transform.gameObject.tag == "enemy")
		{
			print("get here");
			hit.transform.gameObject.GetComponent(scriptEnemy).life -= damage;
			Destroy(gameObject);
		}
	}
}

//check colliders
function OnTriggerEnter (other : Collider) 
{
	if(other.transform.gameObject.tag == "enemy")				//if collides with enemy
	{
		print("hit");
		other.transform.gameObject.GetComponent(scriptEnemy).life -= damage;
		Destroy(gameObject);								//destroy bullet
	}
}

//timer
function TimerIncrement ()
{
	gameTime++;
}