var appPage =

{
  init: function () {
    appPage.initStyle();
    appPage.initEvents();

  },

  initStyle: function () {
    appPage.addSchedule();

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


      console.log(seasonalInfo["winter"]);

    





      // else if (season==="spring") {
      //
      // }
      // else if (season==="summer"){
      //
      // }
      // else {
      //
      // }
}
  }
}

$(document).ready(function() {
  appPage.init();
});
