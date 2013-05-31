function outputMsg(msg) {
  $("#output").append("<div>" + msg + "</div>")
}

function reportStatus(promise){
  if (promise.isFulfilled){
    outputMsg("Promise already resolved")
  } else if (promise.isRejected){
    outputMsg("Promise already rejected")
  }
}
