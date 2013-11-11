//inspector variables
var winQuote		: String	= "You Win";



function OnGUI()
{
	GUI.BeginGroup(Rect(Screen.width/2 - 50, Screen.height/2 - 50, 250, 250));
	
	GUI.Box(Rect(0, 0, 200, 100), winQuote);

	GUI.Label(Rect( 10, 30, 100, 50), "Score: " + PlayerPrefs.GetInt("SCORE"));
	
	if(GUI.Button(Rect(60, 60, 80, 30), "Main Menu"))
	{
		Application.LoadLevel("sceneScreenMainMenu");
	}
	
	GUI.EndGroup();
}