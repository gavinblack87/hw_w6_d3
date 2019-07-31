const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((total, journey) => {
  return journey.distance + total
}, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modes = this.journeys.map(journey => journey.transport);

    return modes.filter((journey, i, a) => a.indexOf(journey) == i)}

module.exports = Traveller;
