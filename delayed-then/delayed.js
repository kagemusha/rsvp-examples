function reportStatus(promise){
  if (promise.isFulfilled){
    outputMsg("Promise already resolved")
  } else if (promise.isRejected){
    outputMsg("Promise already rejected")
  }
}
var promise = new RSVP.Promise(function(resolve, reject){

  $(document).on("click", "#resolveBtn", function(){
    reportStatus(promise)
    resolve("resolved")
  });
  $(document).on("click", "#rejectBtn", function(){
    reportStatus(promise)
    reject("rejected!")
  });
});

$(document).on("click", "#thenBtn", function(){
  promise.then(function(msg){
      outputMsg("Then(resolved) Msg: " + msg)
    },
    function(err){
      outputMsg("Then(rejected) Err: " + err)
    })
})
