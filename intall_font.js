var shell = WScript.CreateObject("WScript.Shell")

//var cur_dir = shell.CurrentDirectory
var fso = WScript.CreateObject("Scripting.FileSystemObject")
var p = fso.GetParentFolderName(WScript.ScriptFullName)


//WScript.echo(p+"\\fonts\\Yijing Symbols.ttf")
fso.CopyFile(p+"\\fonts\\Yijing Symbols.ttf", "c:\\windows\\fonts")
fso = null
shell = null