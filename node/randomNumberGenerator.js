function createPseudoRandomNumber(low, high)
{
    return Math.random() * (high -low)+low;
}

function randomNumberGenerator(low, high)
{
    var self = this;
    var currentRandomNumberGenerator =  createPseudoRandomNumber;
    this.next = function()
    {
        return currentRandomNumberGenerator(low,high);
    }
}

module.exports = randomNumberGenerator;
