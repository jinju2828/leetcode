/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};
/**
 * @param {number} carType
 * @return {boolean}
 */

ParkingSystem.prototype.addCar = function(carType) {

    if(carType===1) {
        console.log('car type', carType);
        if(this.big > 0) {
            this.big -= 1;
            return true;
        } else {
            return false;
        }
    }
    if(carType===2) {
        if(this.medium > 0) {
            this.medium -= 1;
            return true;
        } else {
            return false;
        }
    }
    if(carType===3) {
        if(this.small > 0) {
            this.small -= 1;
            return true;
        } else {
            return false;
        }
    }
    return null;

};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
