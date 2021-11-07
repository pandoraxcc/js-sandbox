// const fruits = ['mango', 'watermelon', 'banana', 'apple']

// for (let i = 0; i < fruits.length; i++ ) {
//     console.log(`The fruit is ${fruits[i]}`)
// }


let cars = ['Chevy', 'Ford', 'Subaru', 'Honda']

function random_car(cars_list){

    let car_index = Math.floor(Math.random() * cars_list.length);
    return cars_list[car_index]

}


switch(random_car(cars)){

    case 'Chevy':
        console.log(`Kim is driving`)

    case 'Ford':
        console.log(`Lee is driving`)

    case 'Subaru':
        console.log(`Tom is driving`)

    case 'Honda':
        console.log('MasterChief is driving')

}


cars.forEach(function(car, car_index){
    console.log(`The current car is ${car} and it's index is ${car_index}`)
})


