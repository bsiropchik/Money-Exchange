// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {}
    
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (currency <= 0) {
        return result
    }
    
    result["H"] = Math.trunc(currency / 50)
    result["Q"] = Math.trunc((currency % 50) / 25)
    result["D"] = Math.trunc(((currency % 50) % 25) / 10)
    result["N"] = Math.trunc((((currency % 50) % 25) % 10) / 5)
    result["P"] = Math.trunc(currency % 5)

    for (let item in result) {
        if (!result[item]){
            delete result[item]
        }
    }

    return result
}
