
//Inspectore variables
var waitTime 		: float 	= 3.0;

function Update () {
	if(Input.GetKeyDown("space"))
	{
		Application.LoadLevel("Level1");
	}
}

function OnGUI()
{
	GUI.BeginGroup(Rect(Screen.width/2 - 150, Screen.height/2 - 150, 300, 300));
	
	GUI.Box(Rect(0, 0, 300, 300), "Main Menu");

	GUI.Label(Rect( 10, 30, 300, 40), "WASD keys to move");
	GUI.Label(Rect( 10, 60, 300, 70), "left mouse button to shoot");
	GUI.Label(Rect( 10, 90, 300, 100), "Esc to quit");
	GUI.Label(Rect( 10, 120, 300, 130), "Avoid and shoot red box if you get hit you'll take damage");
	GUI.Label(Rect( 10, 150, 300, 160), "Red boxes spawn at the middle well or the 4 outer Spires");
	GUI.Label(Rect( 10, 180, 300, 190), "if you run out of health you'll die and game will end");
	GUI.Label(Rect( 10, 210, 300, 220), "It is very dark, so use you're flashlight in order to see the entities that hunt you");
	GUI.Label(Rect( 10, 240, 300, 250), "press the Space Button to start the game");
	GUI.EndGroup();
}


function WaitTime()
{
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("Level1");
}