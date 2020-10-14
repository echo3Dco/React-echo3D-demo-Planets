const React = require("react");

const PlanetForm = function(props) {

    // planet state
    const [planet, setPlanet] = React.useState("Earth");

    // update input field 
    const updatePlanet = (event) => {
        setPlanet(event.target.value);
    }

    
    const changeIFormURL = (id) =>{
        // change <YOUR-API-KEY> to echoAR API key
        let url = "https://console.echoAR.xyz/arjs?key=<YOUR-API-KEY-HERE>&entry=" + id;
        console.log(url);
        // grab the iframe element from the html
        let iframe = document.getElementById("iframe");
        // change iframe source if valid planet is entered
        if(id != "") iframe.src = url;
    }
    
    const changeIFormShortURL = (url) =>{
        console.log(url);
        // grab the iframe element from the html
        let iframe = document.getElementById("iframe");
        // change iframe source if valid planet is entered
        if(url != "") iframe.src = url;
    }

    // When submit button (or enter) is pressed
    const handleSubmit = (event) => {
        console.log(`The planet submitted is : ${planet}`);
        //console.log(findPlanetID(planet.toLowerCase()));

        // switch url by planet ID. uncomment line 91 if using
        //changeIFormURL(findPlanetInfo(planet.toLowerCase()));

        // swith url by short URL
        changeIFormShortURL(findPlanetInfo(planet.toLowerCase()))
        event.preventDefault();
    }

    

    const findPlanetInfo = (planetName) => {
        let planetID = "";
        let shortURL = "";

        // check submitted form for entered planet
        switch(planetName){
            case "mercury":
                planetID = props.entryID.mercury;
                shortURL = props.shortURL.mercury;
                break;
            case "venus":
                planetID = props.entryID.venus;
                shortURL = props.shortURL.venus;
            case "earth":
                planetID = props.entryID.earth;
                shortURL = props.shortURL.earth;
                break;
            case "mars":
                planetID = props.entryID.mars;
                shortURL = props.shortURL.mars;
                break;
            case "jupiter":
                planetID = props.entryID.jupiter;
                shortURL = props.shortURL.jupiter;
                break;
            case "saturn":
                planetID = props.entryID.saturn;
                shortURL = props.shortURL.saturn;
                break;
            case "uranus":
                planetID = props.entryID.uranus;
                shortURL = props.shortURL.uranus;
                break;
            case "neptune":
                planetID = props.entryID.neptune;
                shortURL = props.shortURL.neptune;
                break;
            case "pluto":
                console.log("I'm sorry, Pluto is no longer considered a planet");
                break;
            default:
                console.log("Not a planet in our solar system");
                break;
        }

        // return the entry ID associated with planet model
        //return planetID;

        // return the short URL associated with planet model
        return shortURL;

    }


    return(
            <form onSubmit={handleSubmit}>
                <label> Enter a planet: 
                    <input
                        type="text" 
                        id="text" 
                        placeholder="e.g Earth"
                        value={planet}
                        onChange={updatePlanet}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>       
    );
    
}

module.exports = PlanetForm;

