function reportStatus(promise){
  if (promise.isFulfilled){
    outputMsg("Promise already resolved")
  } else if (promise.isRejected){
    outputMsg("Promise already rejected")
  }
}

var resources = {
                  urls:   {key1: "resource1Url", key2: "resource2Url", key3: "resource3Url"},
                 content: {resource1Url: "resource1-content", resource2Url: "resource2-content"}
}

function lookup(field, key){
  var lookupPromise = new RSVP.Promise(function(resolve, reject){
    val = resources[field][key]
    if (val) {
      resolve(val);
    } else {
      reject("Val not found for: " + field + "["+ key + "]");
    }
  });
  return lookupPromise;
}

$(document).on("click", "#lookupBtn", function(){
  key = $("#lookupKey").val()
  lookup("urls", key ).then(function(url){
    outputMsg("Found url " + url + " for key " + key )
    return lookup("content", url)
  }).then(function(content){
    outputMsg("Found content: " + content );
  }).then(null, function(errMsg){
      outputMsg("Err Msg: " + errMsg);
  })
});

