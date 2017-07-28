var ie = new ActiveXObject("InternetExplorer.Application")

var shell = WScript.CreateObject("WScript.Shell")
var cur_dir = shell.CurrentDirectory
ie.Navigate(cur_dir + "\\index.html")

ie.Top = 0
ie.Left = 0

ie.Toolbar = false
ie.StatusBar = false
ie.Visible = true
WScript.Quit()
