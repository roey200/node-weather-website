const request = require('request')

const forecast = (longitude, langitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=7ffb4a5ad56cf4b866cd2b4883e5b7a9&query=' + longitude + ',' + langitude + '&units=m'

    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback(undefined, 'Unable to find location')
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress and feels like ' + body.current.feelslike
        )}
    })


}

module.exports = forecast


// callback(undefined, {
//     weather_descriptions: response.body.current.weather_descriptions[0],
//     temperature: response.body.current.temperature,
//     feelslike: response.body.current.feelslike
// })