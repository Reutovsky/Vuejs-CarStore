const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})

const cars = [
    car('Ford', 'Focus', 'Max', '2016', '+7 929 6212136', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Vladimir', '2018', '+7 909 7777136', 'images/mondeo.jpg'),
    car('Porsche', 'Panamera', 'Irina', '2017', '+7 929 6666136', 'images/panamera.jpeg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1)
        }
    }
})