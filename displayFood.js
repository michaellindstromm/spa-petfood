function displayDogs (dogFood) {
  // dogFood is the object holding the key:dob_brands with a value: of an multiple level inception of arrays full of objects. It's a mess down there.
  let dogTable = document.getElementById("dogTable");
  let bAO = dogFood.dog_brands; //Array of 2 objects of two different brands
  let brand; //Two differnt OBJECTS of brands (Chuck Wagon/Purina)

  let brandName; //Brand Names: (ChuckWagon and Purina)
  let newBrandName; //Use this for capitalizing "w" in "wagon"

  let types; //Array of objects holding different types of dog foods (ie. all_natural, standard, puppy, etc.)

  let type; //Objects of different types with their different volume options

  let typeName; //Type Names: [ChuckWagon:(all_natural & standard) || Purina:(puppy & standard)]
  let newTypeName; //Use this for editing type names (capital letters and replace "_")
  let volumes; //Array of Objects holding different brand's type's names and pricing
  let options; //Objects for different brand's type's names and pricing
  let name; //Name of brand's type's (ie. 64oz, 16oz etc.)
  let price; //Price of brand's type's
  let index = 1;

  for (var i = 0; i < bAO.length; i++) { //loop through number of dogbrands
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    td1.classList = "brands";
    td2.classList = "types";
    td3.classList = "vol-price";
    brand = bAO[i];
    brandName = brand.name //set brand name
    newBrandName = brandName.split("");
    for (var m = 0; m < newBrandName.length; m++) { //loop through brand names and capitalize w in wagon
      newBrandName[m] = newBrandName[m].replace("w", "W")
    }
    newBrandName = newBrandName.join("");
    td1.innerHTML += newBrandName; //append brand name to table area
    tr.appendChild(td1);
    types = brand.types;
    for (var j = 0; j < types.length; j++) { //loop through different types of dogfood for each brand
      type = types[j]
      typeName = type.type;
      newTypeName = typeName.split(""); //editting types to look better split letters into array
      for (var l = 0; l < newTypeName.length; l++) {
        newTypeName[l] = newTypeName[l].replace(/\_/g, "-"); //replace "_"
        newTypeName[0] = newTypeName[0].toUpperCase(); //set first letter to uppercase
      }
      newTypeName = newTypeName.join(""); //convert back into a string
      td2.innerHTML += newTypeName + " | ";
      tr.appendChild(td2);
      volumes = type.volumes;
      for (var k = 0; k < volumes.length; k++) { //loop through and get volume and pricing information
        options = volumes[k];
        name = options.name;
        price = options.price;

        td3.innerHTML += newTypeName + " - " + name + ": " + "$" + price + " | ";
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
  let breeds;

  let types; //Array of objects holding different types of dog foods (ie. all_natural, standard, puppy, etc.)

  let type; //Objects of different types with their different volume options

  let typeName; //Type Names: [ChuckWagon:(all_natural & standard) || Purina:(puppy & standard)]
  let volumes; //Array of Objects holding different brand's type's names and pricing
  let options; //Objects for different brand's type's names and pricing
  let size; //Name of brand's type's (ie. 64oz, 16oz etc.)
  let price; //Price of brand's type's

  for (var i = 0; i < bAO.length; i++) { //loop through different cat brands
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    td1.classList = "brands";
    td2.classList = "breeds";
    td3.classList = "vol-price";
    brand = bAO[i];
    brandName = brand.name; //set brand name and breed name
    breeds = brand.breeds;
    td1.innerHTML += brandName;
    tr.appendChild(td1);
    for (var l = 0; l < breeds.length; l++) { //loop through differenty types for the brands
      let specificBreeds = breeds[l]
      td2.innerHTML += specificBreeds + " | ";
      tr.appendChild(td2);
    }
    types = brand.types;
    for (var j = 0; j < types.length; j++) { //loop through different types to get different volumes for each type
      type = types[j]
      typeName = type.type
      volumes = type.volumes;
      for (var k = 0; k < volumes.length; k++) { //loop through and get size and pricing from different volumes
        options = volumes[k];
        size = options.size;
        price = options.price;

        td3.innerHTML += typeName + " - " + size + ": " + "$" + price + " | ";
        tr.appendChild(td3);
      }
    }
    catTable.appendChild(tr);
  }
}

DogFood.loadDogFood(displayDogs)
CatFood.loadCatFood(displayCats)
