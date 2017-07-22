let DogFood = (function() {
  let dogFood = [];
  return {
    loadDogFood: function(invokeCallBack) {
      let myR = new XMLHttpRequest();
      myR.addEventListener("load", function() {
      dogFood = JSON.parse(this.responseText);
      displayDogs(dogFood);
      });
      myR.open("GET", "dogfoods.JSON");
      myR.send();
    }
  }
})();
