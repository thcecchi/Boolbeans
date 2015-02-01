var appPage =

{
  init: function () {
    appPage.initStyle();
    appPage.initEvents();

  },

  initStyle: function () {
    appPage.addSchedule();
    appPage.surveyFilter();


valArr = []
// LOCATION FUNCTION
  $(".loc").click(function () {
    var searchVal0 = $(this).attr('rel');
    console.log(searchVal0);
    valArr.push(searchVal0);
  var pickUpLocation = function(farmName) {
    if (csaInfo[farmName]["pickUp"].hasOwnProperty(searchVal0)) {
      // console.log(csaInfo[farmName]["farmName"]);
      // console.log(csaInfo[farmName]["pickUp"][searchVal0])
      // Console log all farm info
    }
  }
    pickUpLocation("Ambrose","Gruber","Hudson","Legare","Rosebank")
  });

// SIZE FUNCTION
$(".count").click(function () {
  var searchVal1 = $(this).attr('rel');
  console.log(searchVal1);
  valArr.push(searchVal1);
  var sizeOfBag = function(farmName) {
    if (csaInfo[farmName]["pricesPerBag"].hasOwnProperty(searchVal1)) {
      // console.log(csaInfo[farmName]["farmName"]);
      // console.log(csaInfo[farmName]["pricesPerBag"][searchVal1])
    }
  }
  sizeOfBag("Ambrose","Gruber","Hudson","Legare","Rosebank")
});

// STORE SELECTIONS TO ARRAY
// var total = function (farmName) {
//   if (csaInfo[farmName].hasOwnProperty(searchVal0 && searchVal1)) {
//     console.log(csaInfo[farmName]["farmName"]);
//     console.log(csaInfo[farmName]["pricesPerBag"][searchVal1])
//     console.log(csaInfo[farmName]["pickUp"][searchVal0])
//     console.log(csaInfo[farmName]["organizations_url"])
//   }
// }
console.log(valArr)

// FIND FARMS
$(".submitButton").click(function () {
  var findFarms = function(farmName) {
    if (csaInfo[farmName]["pickUp"].hasOwnProperty(valArr[0]) && csaInfo[farmName]["pricesPerBag"].hasOwnProperty(valArr[1])) {
      console.log(csaInfo[farmName]["farmName"]);
      console.log(csaInfo[farmName]["pricesPerBag"][valArr[1]]);
      console.log(csaInfo[farmName]["pickUp"][valArr[0]]);
      console.log(csaInfo[farmName]["organizations_url"]);
    }
  }
    findFarms("Ambrose","Gruber","Hudson","Legare","Rosebank");
});

},

  initEvents: function () {

  },

  addSchedule: function () {
      currentMonth = moment().quarter();

        if (currentMonth === 1) {
          season = "winter";
        }
        else if (currentMonth === 2) {
          season = "spring";
        }
        else if (currentMonth === 3) {
          season = "summer";
        }
        else {
          season = "fall";
        }

      if (season==="winter") {

        return seasonalInfo["winter"]["Y"];
      }
      else if (season==="spring") {
        return seasonalInfo["spring"]["Y"];

      }
      else if (season==="summer"){
        return seasonalInfo["summer"]["Y"];

      }
      else {
        return seasonalInfo["fall"]["Y"];

      }


    var inSeasonCompiled = _.template(templates.inSeason);
    console.log(inSeasonCompiled(seasonalInfo));
    $(".inSeasonBoard").append(inSeasonCompiled(seasonalInfo));

  },

  surveyFilter: function () {
// Location
var pickUp = function (farmname) {
    results = [];
    var searchField = [farmname]["pickUp"];
    var searchVal = $(this).attr("rel");
    for (var i=0 ; i < csaInfo[farmname]["pickUp"].length ; i++)
    {
      if (csaInfo[farmname]["pickUp"][i][searchField] == searchVal) {
        results.push(csaInfo[farmname]["pickUp"][i]);
      }
    }
    console.log(results)
  }


// size
var price = function () {
    results = [];
    var searchField = "pricesPerBag";
    var searchVal = $(this).attr("name");
    for (var i=0 ; i < csaInfo["pricesPerBag"][index].length ; i++)
    {
      if (csaInfo["pricesPerBag"][index][i][searchField] == searchVal) {
        results.push(csaInfo["pricesPerBag"][index][i]);
      }
    }
  }


  }
}

$(document).ready(function() {
  appPage.init();
});
