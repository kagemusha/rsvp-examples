var promise = new RSVP.Promise(function(resolve, reject){
  $(document).on("click", "#resolveBtn", function(){
    reportStatus(promise)
    resolve("resolving!")
  });
  $(document).on("click", "#rejectBtn", function(){
    reportStatus(promise)
    reject("rejecting!")
  });
});

promise.then(function(msg){
    outputMsg("Then(resolved) Msg: " + msg)
  },
  function(err){
    outputMsg("Then(rejected) Err: " + err)
  }
)




