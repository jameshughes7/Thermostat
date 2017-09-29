'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it("starts at 20 degrees", function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);                  //expect(output of program).toBe(what you expect it to be)
    });

    it("increase the temperature with()", function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it("decreases the temperature with()", function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it("should have a minimum temperature of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it("should have Power Saving Mode ON as default", function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("can switch PSM off", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    describe("When power saving mode is on", function() {
      it ("has a maximum temperature of 25 degrees", function() {
        for(var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });

    describe('When power saving mode is off', function() {
      it('has a maximum temperature of 32 degrees', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
        });
      });

      it('can be reset to the default temperature', function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        thermostat.resetTemperature();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
  });
