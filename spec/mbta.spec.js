'use strict';

const mbta = require('../lib/mbta.js');

describe('mbta', () => {

  describe('Red Line', () => {

    it('goes from "Alewife" to "South Station"', () => {
      expect(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')).toBe(7);
    });

    it('goes from "South Station" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')).toBe(7);
    });

    it('goes from "Central" to "Porter"', () => {
      expect(mbta.stopsBetweenStations('Red', 'Central', 'Red', 'Porter')).toBe(2);
    });

  });

  describe('Green Line', () => {

    it('goes from "Haymarket" to "copley"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Green', 'Kenmore')).toBe(6);
    });

    it('goes from "Copley" to "Haymarket"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Kenmore', 'Green', 'Government Center')).toBe(6);
    });

    it('goes from "Kenmore" to "Arlington"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Kenmore', 'Green', 'Arlington')).toBe(3);
    });

  });

  describe('Orange Line', () => {

    it('goes from "North Station" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Orange',
                                       'Forest Hills')).toBe(7);
    });

    it('goes from "Forest Hills" to "North Station"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'Forest Hills', 'Orange',
                                       'North Station')).toBe(7);
    });

    it('goes from "State" to "Downtown Crossing"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'State', 'Orange', 'Downtown Crossing')).toBe(1);
    });

  });

  describe('Red and Green Lines', () => {

    it('goes from "South Station" to "Kenmore"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')).toBe(6);
    });

    it('goes from "Government Center" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Red', 'Alewife')).toBe(7);
    });

  });

  describe('Red and Orange Lines', () => {

    it('goes from "South Station" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Orange', 'Forest Hills')).toBe(6);
    });

    it('goes from "North Station" to "Alewife"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Red', 'Alewife')).toBe(8);
    });

  });

  describe('Green and Orange Lines', () => {

    it('goes from "Government Center" to "Forest Hills"', () => {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Orange',
                                       'Forest Hills')).toBe(6);
    });

    it('goes from "North Station" to "Kenmore"', () => {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Green', 'Kenmore')).toBe(7);
    });

  });

  if (mbta.stretch) {

    describe('Green and Orange Lines', () => {

    });

  }

});
