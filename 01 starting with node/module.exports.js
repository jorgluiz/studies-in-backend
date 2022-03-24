let person = {
    name: "Maicon",
    age: 25,
    techs: ["JS", "Node", "React"]
}

function knowsTech(tech){
    // console.log("In function knowTech: ", tech)
    return person.techs.find(t1 => t1 === tech) ? true : false
}

module.exports = {person,  knowsTech}
