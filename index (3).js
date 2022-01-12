let hiddenUsers = [];

function hideByAircraft(aircraft){ geofs.api.viewer.scene.primitives._primitives[4]._primitives.forEach(function(e, i){if (e._resource.url.includes(aircraft)){e.destroy()}})
}

let arr1 = [];
let id = "none";
function convertUsers(){
  arr1 = $.map(multiplayer.users, function (value) { return value; });
};

function hideByCallsign(callsign){
arr1 = []
  if (!hiddenUsers.includes(callsign)){
  hiddenUsers.push(callsign)
  }
  convertUsers()
  arr1.forEach(function(e, i){

    if (e.callsign.includes(callsign)){
      id = e.id;
      multiplayer.users[id].models.forEach(function(e){e.destroy()})
    }
    
  })
  
}

function keepHidden(){
hiddenUsers.forEach(function(e){

hideByCallsign(e)
  
});
}

setInterval(function(){
  keepHidden()
}, 2000)
