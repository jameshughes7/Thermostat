$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

   $('#temperature-up').click(function() { // event listener
     thermostat.up(); // update model
     updateTemperature();
   });

   $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
     thermostat.down();
     updateTemperature();
   });

   $('#temperature-reset').click(function() {
     thermostat.resetTemperature();
     updateTemperature();
   });

   $('#powersaving-on').click(function() {
     thermostat.switchPowerSavingModeOn();
     $('#power-saving-status').text('on');
     updateTemperature();
   });

   $('#powersaving-off').click(function() {
     thermostat.switchPowerSavingModeOff();
     $('#power-saving-status').text('off');
     updateTemperature();
   });

   function updateTemperature() {
     $('#temperature').text(thermostat.temperature);
     $('#temperature').attr('class', thermostat.energyUsage());
     }
});
