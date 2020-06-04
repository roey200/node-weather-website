const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9leTIwMCIsImEiOiJja2FxcWw3YmowMmIzMzFtc2dqYThrbGF1In0.sFFEOwqAlBUDzjNKG8_ASQ&limit=1'

    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to geoLocation service', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find geoLocation, try again', undefined)
        }else{
            callback(undefined, {
                latitude:  body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
