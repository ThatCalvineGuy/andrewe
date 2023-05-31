const driveDownArrow = (efficiency, tank, distance) => (efficiency * tank) >= distance;

function driveDownFunc(efficiency, tank, distance) {
    while (tank > 0) {
      distance -= efficiency;
      tank--;
    }
    return distance <= 0 ;
}
var driveDownEquality = (param1, param2, param3) => driveDownArrow(param1, param2, param3) === driveDownFunc(param1, param2, param3);

console.log(driveDownEquality(2,2,3))
