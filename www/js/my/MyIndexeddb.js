  var DB_NAME = 'MySardiniaBeachDB';
  var DB_VERSION = 1; // Use a long long for this value (don't use a float)
  var DB_STORE_NAME = 'LastPosition';//publications';

  var db;

  // Used to keep track of which view is displayed to avoid uselessly reloading it
  var current_view_pub_key;

  function DeleteDb()
  {
    alert('DeleteDb');
    db.close();
    var req = indexedDB.deleteDatabase(DB_NAME);
    req.onsuccess = function () {
        alert("Deleted database successfully");
    };
    req.onerror = function () {
       alert("Couldn't delete database");
    }
  }

  function openDb() {
    alert("openDb ...");
   
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Better use "this" than "req" to get the result to avoid problems with
      // garbage collection.
      // db = req.result;
      db = this.result;
      alert("openDb DONE");
    };
    req.onerror = function (evt) {
      //alert("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      //alert("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

      store.createIndex('Lat', 'Lat', { unique: false  });
      store.createIndex('Long', 'Long', { unique: false });
      store.createIndex('Ds', 'Ds', { unique: false });
      store.createIndex('Ident', 'Ident', { unique: false  });
    };
  }



   function addLastPosition(Lat, Long, Ds,Ident) {
    //alert("addPublication arguments:", arguments);
    
    var obj = { Lat: Lat, Long: Long, Ds: Ds,Ident: Ident };
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');

    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == 'DataCloneError')
        alert("This engine doesn't know how to clone a Blob, " +
                             "use Firefox");
      throw e;
    }
    req.onsuccess = function (evt) {
      alert("Insertion in DB successful");
      //displayActionSuccess();
      displayLastPosition(store,false);
    };
    req.onerror = function() {
      alert("addPublication error", this.error);
      //displayActionFailure(this.error);
    };
  }

    function displayMyLastPosition() {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        displayLastPosition(store,false);
    }

     function DeleteMyLastPosition() {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        displayLastPosition(store,true);
    }

   function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }


   


   function displayLastPosition(store,Delete) {
    //alert("displayLastPosition Delete Mode: " + Delete + " Store " + store);

    if (typeof store == 'undefined')


    var req;
    req = store.count();
   
    req.onerror = function(evt) {
      console.error("add error", this.error);
      alert(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function(evt) {
      var cursor = evt.target.result;

      // If the cursor is pointing at something, ask for the data
      if (cursor) {
        console.log("displayLastPosition cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;

          var Value=cursor.key + " Lat:" + value.Lat +  " - Long:" + value.Long + " - DS:" + value.Ds + " - Ident:" + value.Ident; 
          if(Delete)
          {
            deleteLastPosition(cursor.key,store);
          }
          else
          {
            alert(Value);
          }
        };

        // Move on to the next object in store
        cursor.continue();

        // This counter serves only to create distinct ids
        i++;
      } else {
        alert("No more entries");
      }
    };
  }



  function deleteLastPosition(key, store) {
    alert("deleteLastPosition:", arguments);

    if (typeof store == 'undefined')
      store = getObjectStore(DB_STORE_NAME, 'readwrite');

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var record = evt.target.result;
//      alert("record:", record);
      if (typeof record == 'undefined') {
        alert("No matching record found");
        return;
      }
      // Warning: The exact same key used for creation needs to be passed for
      // the deletion. If the key was a Number for creation, then it needs to
      // be a Number for deletion.
      req = store.delete(key);
      req.onsuccess = function(evt) {
        
//        alert("evt:", evt);
//        alert("evt.target:", evt.target);
//        alert("evt.target.result:", evt.target.result);
//        alert("delete successful");
        //displayActionSuccess("Deletion successful");
        //displayPubList(store);
      };
      req.onerror = function (evt) {
        //alert("deletePublication:", evt.target.errorCode);
      };
    };
    req.onerror = function (evt) {
      //alert("deletePublication:", evt.target.errorCode);
      };
  }
  


  function Update(Lat,Long,Ds)
  {
    //alert('Update');
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.index('Ident');
    req.get('MyPosition').onsuccess = function(evt) {
      if (typeof evt.target.result == 'undefined') {
        alert("No matching record found");
        return;
      }
       var data= evt.target.result;
       //alert('Found ID ' + data.id);
       data.Lat=Lat;
       data.Long=Long;
       data.Ds=Ds;

       var requestUpdate = store.put(data);
       requestUpdate.onerror = function(event) {
         alert('Error Update');
       };
       requestUpdate.onsuccess = function(event) {
         alert('Ok Update');
       }
    };
    req.onerror = function (evt) {
      alert("deletePublicationFromBib:", evt.target.errorCode);
    };

//    alert('Update');
//    var objectStore = getObjectStore(DB_STORE_NAME, 'readwrite');
//    var request = objectStore.get("14");
//    request.onerror = function(event) {
//     alert('Error Read');
//    };
//    request.onsuccess = function(event) {
//         alert('Ok Read');
//      // Get the old value that we want to update
//        var data = request;
//  
//      // update the value(s) in the object that you want to change
//        alert(event.target.result);

//      // Put this updated object back into the database.
//      var requestUpdate = objectStore.put(data);
//       requestUpdate.onerror = function(event) {
//         alert('Error Update');
//       };
//       requestUpdate.onsuccess = function(event) {
//         alert('Ok Update');
//       };
//    };
  }
 