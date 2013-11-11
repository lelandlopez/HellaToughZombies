//generate folders in our project
import System.IO;													//imports so that Directory.CreateDirectory works





@MenuItem ("Project Tools / Make Folders #&_g")
//menu Item reads first static function
static function MakeFolders()
{
	GenerateFolders();
}

static function GenerateFolders()
{
	var projectPath : String = Application.dataPath + "/";			//store the path for the folder
	
	//create these folders
	Directory.CreateDirectory(projectPath + "Audio");
	Directory.CreateDirectory(projectPath + "Scripts");
	Directory.CreateDirectory(projectPath + "Materials");
	Directory.CreateDirectory(projectPath + "Meshes");
	Directory.CreateDirectory(projectPath + "Fonts");
	Directory.CreateDirectory(projectPath + "Shaders");
	Directory.CreateDirectory(projectPath + "Packages");
	Directory.CreateDirectory(projectPath + "Scenes");
	Directory.CreateDirectory(projectPath + "Prefabs");
		
	AssetDatabase.Refresh();
	
}