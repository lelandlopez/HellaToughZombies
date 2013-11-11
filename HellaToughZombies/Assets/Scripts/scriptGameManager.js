//Game Manager Script

//inspector variables
var score			: int				= 0;
var player			: Transform;
var enemy 			: GameObject;
var round			: int 				= 0;
var spawnPoints		: GameObject;
//private variables

private var roundStarted 		: boolean 		= false;


function Start () 
{
}

function Update () {
	if(player.transform.GetComponent("scriptPlayer").life <= 0)
	{
		PlayerPrefs.SetInt("score", score);
		Application.LoadLevel("sceneScreenEnd");
	}
	if(GameObject.FindGameObjectsWithTag("enemy").Length == 0 && roundStarted == true)
	{
		print("no enemies");
		roundStarted = false;
		round++;
	}
	if(roundStarted == false)
	{
		for(var x = 0; x < round; x++)
		{
		Instantiate(enemy, spawnPoints.transform.GetChild(Random.Range(0,4)).position, Quaternion.identity);
		}
		roundStarted = true;
	}
}

function OnGUI()
{
	GUI.Label(Rect(10, 10, 100, 20), "SCORE: " + score);
	GUI.Label(Rect(10, 25, 100, 35), "LIFE: " + player.transform.GetComponent("scriptPlayer").life);
	GUI.Label(Rect(Screen.width - 100, 10, 100, 20), "ROUND: " + round);
	GUI.Label(Rect(10, Screen.height -55, 100, 20), "WEAPON: " + player.transform.GetComponent("scriptPlayer").weapon.name);
	GUI.Label(Rect(10, Screen.height -25, 100, 20), "AMMO: " + player.transform.GetComponent("scriptPlayer").weapon.GetComponent("scriptWeapon").bullets);
}