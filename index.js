let wakeDog = (name, breed) => `Wake ${name} the ${breed}`

let leashDog = (name, breed) => `Leash ${name} the ${breed}`

let walkToPark = (name, breed) => `Walk to the park with ${name} the ${breed}`

let throwFrisbee = (name, breed) => `Throw the frisbee for ${name} the ${breed}`

let walkHome = (name, breed) => `Walk home with ${name} the ${breed}`

let unleashDog = (name, breed) => `Unleash ${name} the ${breed}`

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed){
  let results = []
  for (let i = 0; i < routine.length; i ++){
    results.push(routine[i](name, breed))
  }
  return results
}