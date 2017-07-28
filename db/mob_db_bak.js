    document.addEventListener("deviceready", onDeviceReady, false);    // PhoneGap is ready    
	function onDeviceReady() {        
		var db = window.openDatabase("Database", "1.0", "qimen_rec", 200000);        
		db.transaction(populateDB, errorCB, successCB);    
	}    
	
		// Populate the database     
	function populateDB(tx,j) {         
		//tx.executeSql('DROP TABLE IF EXISTS DEMO');         
		//tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)'); 
		tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (data)');         
		tx.executeSql('INSERT INTO DEMO (id, data) VALUES (j)');         
		//tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');    
	}    
		// Transaction error callback    //    
	function errorCB(err) {        
		alert("Error processing SQL: "+err);    
	}    
	// Transaction success callback    //    
	function successCB() {        
		alert("success!");    
	}