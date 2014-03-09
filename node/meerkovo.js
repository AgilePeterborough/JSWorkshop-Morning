function meerkovo(randomNumberGenerator)
{
    var self = this;
    self.numberOfMeerkatsAwake= computeRandomNumber;
    self.numberOfMeerkatsAsleep = computeRandomNumber;
    self.wasteProduced = computeRandomNumber;
    self.daylightHours= computeRandomNumber;
    self.foodConsumed= computeRandomNumber;
    self.serversDown= computeRandomNumber;

    function computeRandomNumber(unitOfTime)
    {
        return randomNumberGenerator.next();
    }
}

module.exports = meerkovo;
