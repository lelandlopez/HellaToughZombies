//Player Script


//inspector variables
var playerSpeedVertical			: float 	= 10.0;
var playerSpeedHorizontal		: float 	= 10.0;
var horMin						: float		= -6.3;
var horMax						: float		= 6.3;
var verMin						: float		= -4.5;
var verMax						: float 	= 4.5;
var projectile					: Transform;
var socketProjectile			: Transform;
var life						: int	 	= 100;
var weapon 						: GameObject;
var transV : float;
var transH : float;


private var mousePos : Vector2;
private var screenPos : Vector3;

//Private variables


function Start () 
{
	life = 100;
	weapon.GetComponent("scriptWeapon").bullets = 9;
}

function Update () {

	var transV = Input.GetAxis("Vertical") * playerSpeedVertical * Time.deltaTime;
	var transH = Input.GetAxis("Horizontal") * playerSpeedHorizontal * Time.deltaTime;
	
	transform.position = Vector3(transform.position.x + transH, transform.position.y, transform.position.z + transV);
	
	//transform.position.x = Mathf.Clamp(transform.position.x, horMin, horMax);
	//transform.position.y = Mathf.Clamp(transform.position.y, verMin, verMax);
	
	if(Input.GetMouseButtonDown(0))
	{
		if(weapon.GetComponent(scriptWeapon).bullets>0)
		{
			Instantiate(projectile, socketProjectile.position, socketProjectile.rotation);
			weapon.GetComponent(scriptWeapon).bullets--;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.Tab))
	{
		weapon.GetComponent(scriptWeapon).bullets = weapon.GetComponent(scriptWeapon).clipCapacity;
	}
	var hits : RaycastHit[];
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	hits = Physics.RaycastAll (ray, 50.0f);
	for (var i = 0;i < hits.Length; i++) {
		var hit : RaycastHit = hits[i];
		if(hit.transform.gameObject.tag == "floor")
		{
			transform.LookAt(Vector3(hit.point.x, transform.position.y, hit.point.z));
		}
	}
}