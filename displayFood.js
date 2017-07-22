function displayDogs (dogFood) {
  // dogFood is the object holding the key:dob_brands with a value: of an multiple level inception of arrays full of objects. It's a mess down there.
  let dogTable = document.getElementById("dogTable");
  let bAO = dogFood.dog_brands; //Array of 2 objects of two different brands
  let brand; //Two differnt OBJECTS of brands (Chuck Wagon/Purina)

  let brandName; //Brand Names: (ChuckWagon and Purina)

  let types; //Array of objects holding different types of dog foods (ie. all_natural, standard, puppy, etc.)

  let type; //Objects of different types with their different volume options

  let typeName; //Type Names: [ChuckWagon:(all_natural & standard) || Purina:(puppy & standard)]
  let volumes; //Array of Objects holding different brand's type's names and pricing
  let options; //Objects for different brand's type's names and pricing
  let name; //Name of brand's type's (ie. 64oz, 16oz etc.)
  let price; //Price of brand's type's
  let index = 1;
  // let tr;
  // let td1 = document.createElement("TD");
  // let td2 = document.createElement("TD");
  // let td3 = document.createElement("TD");

  for (var i = 0; i < bAO.length; i++) {
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    brand = bAO[i];
    brandName = brand.name
    td1.innerHTML += brandName;
    tr.appendChild(td1);
    types = brand.types;
    for (var j = 0; j < types.length; j++) {
      type = types[j]
      typeName = type.type

      td2.innerHTML += typeName + " | ";
      tr.appendChild(td2);
      volumes = type.volumes;
      for (var k = 0; k < volumes.length; k++) {
        options = volumes[k];
        name = options.name;
        price = options.price;

        td3.innerHTML += typeName + " - " + name + ": " + "$" + price + " | ";
        tr.appendChild(td3);
      }
    }
    dogTable.appendChild(tr);
  }
}

function displayCats (catFood) {
  // dogFood is the object holding the key:dob_brands with a value: of an multiple level inception of arrays full of objects. It's a mess down there.
  let catTable = document.getElementById("catTable");
  let bAO = catFood.cat_brands; //Array of 2 objects of two different brands
  let brand; //Two differnt OBJECTS of brands (Chuck Wagon/Purina)

  let brandName; //Brand Names: (ChuckWagon and Purina)

  let types; //Array of objects holding different types of dog foods (ie. all_natural, standard, puppy, etc.)

  let type; //Objects of different types with their different volume options

  let typeName; //Type Names: [ChuckWagon:(all_natural & standard) || Purina:(puppy & standard)]
  let volumes; //Array of Objects holding different brand's type's names and pricing
  let options; //Objects for different brand's type's names and pricing
  let name; //Name of brand's type's (ie. 64oz, 16oz etc.)
  let price; //Price of brand's type's

  for (var i = 0; i < bAO.length; i++) {
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    brand = bAO[i];
    brandName = brand.name
    td1.innerHTML += brandName;
    tr.appendChild(td1);
    types = brand.types;
    for (var j = 0; j < types.length; j++) {
      type = types[j]
      typeName = type.type

      td2.innerHTML += typeName + " | ";
      tr.appendChild(td2);
      volumes = type.volumes;
      for (var k = 0; k < volumes.length; k++) {
        options = volumes[k];
        name = options.name;
        price = options.price;

        td3.innerHTML += typeName + " - " + name + ": " + "$" + price + " | ";
        tr.appendChild(td3);
      }
    }
    catTable.appendChild(tr);
  }
}

DogFood.loadDogFood(displayDogs)
CatFood.loadCatFood(displayCats)
