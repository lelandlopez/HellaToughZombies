//generate prefab from the selection

@MenuItem ("Project Tools / Make Prefab #&_p")

static function GeneratePrefab()
{
	var selectedObjects : GameObject[] = Selection.gameObjects;
	
	for(var go : GameObject in selectedObjects)
	{
		var name : String = go.name;
		var localPath : String = "Assets/" + name + ".prefab";
		if(AssetDatabase.LoadAssetAtPath(localPath, GameObject))
		{
			if(EditorUtility.DisplayDialog("Caution", "prefab already exists. Do you want to Overwrite?", "Yes", "No"))
			{
				createNew(go, localPath);				
			}
		}
		else
		{	
			createNew(go, localPath);
		}
	}
}

static function createNew(selectedObject : GameObject, localPath : String)
{
	var prefab : Object = PrefabUtility.CreateEmptyPrefab(localPath);
	PrefabUtility.ReplacePrefab(selectedObject, prefab);
	AssetDatabase.Refresh();
	
	DestroyImmediate(selectedObject);														//remove selected objects
	var clone : GameObject = PrefabUtility.InstantiatePrefab(prefab) as GameObject;			//replace with the prefab
}