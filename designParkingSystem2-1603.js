var ParkingSystem = function(big, medium, small) {
    this.spaces = [big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType) {
    if(this.spaces[carType - 1] > 0) {
        this.spaces[carType - 1]--;
        return true;
    }
    return false;
};
