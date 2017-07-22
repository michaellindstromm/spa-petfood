let CatFood = (function() {
  let catFood = [];
  return {
    loadCatFood: function(invokeCallBack) {
      let myR = new XMLHttpRequest();
      myR.addEventListener("load", function() {
      catFood = JSON.parse(this.responseText);
      displayCats(catFood);
      });
      myR.open("GET", "catfoods.JSON");
      myR.send();
    }
  }
})();
