function meerkovoClient(socketIo)
{
    var clients = {
        meerkatsAwake: [],
        meerkatsAsleep: [],
        meerkatWaste: [],
        daylightHours: [],
        foodConsumed: [],
        serversDown: []
    }
    handleAllMessages();
    var self = this;
    
    self.onMeerkatsAwake = function(callback)
    {
        clients.meerkatsAwake.push(callback);
    }

    self.onMeerkatsAsleep= function(callback)
    {
        clients.meerkatsAsleep.push(callback);
    }
    self.onMeerkatWaste= function(callback)
    {
        clients.meerkatWaste.push(callback);
    }
    self.onDaylightHours= function(callback)
    {
        clients.daylightHours.push(callback);
    }
    self.onFoodConsumed= function(callback)
    {
        clients.foodConsumed.push(callback);
    }
    self.onServersDown= function(callback)
    {
        clients.serversDown.push(callback);
    }

    function handleAllMessages(){
        var messageMap = {"meerkats-awake":clients.meerkatsAwake,
                          "meerkats-asleep":clients.meerkatsAsleep,
                          "meerkat-waste": clients.meerkatWaste,
                          "daylight-hours": clients.daylightHours,
                          "food-consumed": clients.foodConsumed,
                          "servers-down":clients.serversDown};
        for(var messageType in messageMap)
        {
            socket.on(messageType,function(data){
                handleMessage(messageMap[messageType], data);
            }); 
        }
    }

    function handleMessage(clientsToNotify, data)
    {
        clientsToNotify.forEach(function(entry){
            entry(data);
        });
    }
}
