function betterThanAverage(classPoints, yourPoints) {

    let classSum = classPoints.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);

    let average = classSum / classPoints.length;


    if (yourPoints > average) {
        return true;
    } else if (yourPoints < average) {
        return false
    }
}