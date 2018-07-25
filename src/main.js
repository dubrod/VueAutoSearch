// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Autocomplete from './components/Autocomplete'
import Listings from './components/Listing'

Vue.component('auto-complete', Autocomplete)
Vue.component('listings', Listings)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data () {
    return {
      currentOrder: '0',
      acvalue: '',
      filter_type: [],
      auto_listing: [],
      auto_root: [
        {
          'Year': 2019,
          'Make': 'Infiniti',
          'Model': 'QX80',
          'Type': 'SUV',
          'Price': '50000',
          'Active': true,
          'Image': 'https://www.infinitiusa.com/content/dam/Infiniti/US/vehicles/QX80/MY18/Overview/2018-infiniti-qx80-suv.jpeg.ximg.l_full_m.smart.jpeg',
          'Website': 'https://www.infinitiusa.com/'
        },
        {
          'Year': 2018,
          'Make': 'Infiniti',
          'Model': 'QX30',
          'Type': 'SUV',
          'Price': '40000',
          'Active': true,
          'Image': 'http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/01-2018-infiniti-qx30-awd-grey.jpg?itok=0FAa1Onv',
          'Website': 'https://www.infinitiusa.com/'
        },
        {
          'Year': 2017,
          'Make': 'Infiniti',
          'Model': 'G35',
          'Type': 'Car',
          'Price': '34000',
          'Active': true,
          'Image': 'http://cdn.shopify.com/s/files/1/0670/8485/products/DSC_07791-1024x680_1200x1200.jpg?v=1526757809',
          'Website': 'https://www.infinitiusa.com/'
        },
        {
          'Year': 2019,
          'Make': 'Infiniti',
          'Model': 'G35',
          'Type': 'Car',
          'Price': '44000',
          'Active': true,
          'Image': 'http://cdn.shopify.com/s/files/1/0670/8485/products/DSC_07791-1024x680_1200x1200.jpg?v=1526757809',
          'Website': 'https://www.infinitiusa.com/'
        },
        {
          'Year': 2019,
          'Make': 'Jeep',
          'Model': 'Cherokee',
          'Type': 'SUV',
          'Price': '42000',
          'Active': true,
          'Image': 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2016/09/160920_Jeep_Parigi-2016_03-626x328.jpg',
          'Website': 'https://www.jeep.com'
        },
        {
          'Year': 2018,
          'Make': 'Jeep',
          'Model': 'Wrangler',
          'Type': 'SUV',
          'Price': '39000',
          'Active': true,
          'Image': 'https://st.motortrend.com/uploads/sites/10/2017/11/2018-Jeep-Wrangler-Unlimited-Sahara.jpg?interpolation=lanczos-none&fit=around|660:439',
          'Website': 'https://www.jeep.com'
        },
        {
          'Year': 2017,
          'Make': 'Jeep',
          'Model': 'Compass',
          'Type': 'SUV',
          'Price': '49000',
          'Active': true,
          'Image': 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q2/678295/2017-jeep-compass-trailhawk-tested-review-car-and-driver-photo-682854-s-original.jpg',
          'Website': 'https://www.jeep.com'
        },
        {
          'Year': 2017,
          'Make': 'Chevrolet',
          'Model': 'Corvette',
          'Type': 'Car',
          'Price': '75000',
          'Active': true,
          'Image': 'https://st.motortrend.com/uploads/sites/5/2018/04/2019-Chevrolet-Corvette-ZR1-102.jpg',
          'Website': 'https://www.chevy.com'
        },
        {
          'Year': 2018,
          'Make': 'Chevrolet',
          'Model': 'Corvette',
          'Type': 'Car',
          'Price': '55000',
          'Active': true,
          'Image': 'https://st.automobilemag.com/uploads/sites/11/2018/04/2019-Chevrolet-Corvette-ZR1-71.jpg',
          'Website': 'https://www.chevy.com'
        },
        {
          'Year': 2019,
          'Make': 'Chevrolet',
          'Model': 'Silverado',
          'Type': 'Truck',
          'Price': '55000',
          'Active': true,
          'Image': 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2019/trucks/silverado-t1-reveal/mov/01-images/2018-silverado-trims-04.jpg?imwidth=1200',
          'Website': 'https://www.chevy.com'
        },
        {
          'Year': 2018,
          'Make': 'Chevrolet',
          'Model': 'Colorado',
          'Type': 'Truck',
          'Price': '35000',
          'Active': true,
          'Image': 'http://www.newtrucks2018.com/wp-content/uploads/2018/01/2019-Chevy-Colorado-Z71.jpg',
          'Website': 'https://www.chevy.com'
        },
        {
          'Year': 2019,
          'Make': 'Dodge',
          'Model': 'Ram',
          'Type': 'Truck',
          'Price': '55000',
          'Active': true,
          'Image': 'https://st.motortrend.com/uploads/sites/10/2018/01/2019-Ram-1500-front-three-quarter-02.jpg',
          'Website': 'https://dodge.com'
        },
        {
          'Year': 2018,
          'Make': 'Dodge',
          'Model': 'Ram',
          'Type': 'Truck',
          'Price': '45000',
          'Active': true,
          'Image': 'https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/2019/ram-1500/DT/VLP/gallery-preview/2019-Ram-1500-VLP-Gallery-Preview-Rebel.jpg.image.1440.jpg',
          'Website': 'https://dodge.com'
        },
        {
          'Year': 2017,
          'Make': 'Dodge',
          'Model': 'Ram',
          'Type': 'Truck',
          'Price': '40000',
          'Active': true,
          'Image': 'https://icdn3.digitaltrends.com/image/2019-ram-1500-review-16-640x640.jpg',
          'Website': 'https://dodge.com'
        },
        {
          'Year': 2019,
          'Make': 'Honda',
          'Model': 'Ridgeline',
          'Type': 'Truck',
          'Price': '65000',
          'Active': true,
          'Image': 'http://www.2018besttrucks.com/wp-content/uploads/2017/05/2017-Honda-Ridgeline-Black-Edition-front-side-02.jpg',
          'Website': 'https://honda.com'
        },
        {
          'Year': 2018,
          'Make': 'Honda',
          'Model': 'Ridgeline',
          'Type': 'Truck',
          'Price': '55000',
          'Active': true,
          'Image': 'https://images.wheels.ca/wp-content/uploads/2017/08/Honda-Ridgeline-Black-Edition-2017-main-808x455.jpg',
          'Website': 'https://honda.com'
        },
        {
          'Year': 2018,
          'Make': 'Honda',
          'Model': 'Accord',
          'Type': 'Car',
          'Price': '35000',
          'Active': true,
          'Image': 'https://i.ytimg.com/vi/FLfeVRNgAQE/maxresdefault.jpg',
          'Website': 'https://honda.com'
        },
        {
          'Year': 2019,
          'Make': 'Honda',
          'Model': 'Accord',
          'Type': 'Car',
          'Price': '38000',
          'Active': true,
          'Image': 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q3/660572/2016-honda-accord-coupe-v-6-manual-test-review-car-and-driver-photo-662252-s-original.jpg',
          'Website': 'https://honda.com'
        },
        {
          'Year': 2019,
          'Make': 'BMX',
          'Model': 'X5',
          'Type': 'SUV',
          'Price': '85000',
          'Active': true,
          'Image': 'https://images.carscoops.com/2018/05/2019-BMW-X5-Carscoops-1.jpg',
          'Website': 'https://bmw.com'
        },
        {
          'Year': 2018,
          'Make': 'BMX',
          'Model': 'X5',
          'Type': 'SUV',
          'Price': '65000',
          'Active': true,
          'Image': 'https://cnet4.cbsistatic.com/img/vq-StS3SV4nHeHZRCfCcLSJP4wo=/2018/06/05/cd8298cd-7082-4347-865d-6bba3d2147ef/2019-bmw-x5-ogi.jpg',
          'Website': 'https://bmw.com'
        },
        {
          'Year': 2018,
          'Make': 'BMX',
          'Model': 'M3',
          'Type': 'Car',
          'Price': '65000',
          'Active': true,
          'Image': 'https://storage.googleapis.com/gtspirit/uploads/2018/05/BMW-M3-CS-15.jpg',
          'Website': 'https://bmw.com'
        },
        {
          'Year': 2019,
          'Make': 'BMX',
          'Model': 'M5',
          'Type': 'Car',
          'Price': '95000',
          'Active': true,
          'Image': 'https://images.hgmsites.net/med/2018-bmw-m5_100618662_m.jpg',
          'Website': 'https://bmw.com'
        },
        {
          'Year': 2017,
          'Make': 'Ford',
          'Model': 'Fusion',
          'Type': 'Car',
          'Price': '42000',
          'Active': true,
          'Image': 'https://st.motortrend.com/uploads/sites/5/2018/03/2019-Ford-Fusion-front-three-quarter-in-motion-01-1.jpg',
          'Website': 'https://ford.com'
        },
        {
          'Year': 2018,
          'Make': 'Ford',
          'Model': 'Fusion',
          'Type': 'Car',
          'Price': '52000',
          'Active': true,
          'Image': 'https://carsintrend.com/wp-content/uploads/2017/01/2019-ford-fusion.jpg',
          'Website': 'https://ford.com'
        },
        {
          'Year': 2019,
          'Make': 'Ford',
          'Model': 'F-150',
          'Type': 'Truck',
          'Price': '55000',
          'Active': true,
          'Image': 'https://cdcssl.ibsrv.net/cimg/www.carsdirect.com/680x382_85/683/18_F150_Lariat_SpCrw_4x4_78FntPassIngtSlvr_mj-1--347683.jpg',
          'Website': 'https://ford.com'
        },
        {
          'Year': 2018,
          'Make': 'Ford',
          'Model': 'F-150',
          'Type': 'Truck',
          'Price': '50000',
          'Active': true,
          'Image': 'https://www.newtruckmodels.com/wp-content/uploads/2017/12/asd-1-1050x550.jpg',
          'Website': 'https://ford.com'
        },
        {
          'Year': 2018,
          'Make': 'Ford',
          'Model': 'Edge',
          'Type': 'SUV',
          'Price': '50000',
          'Active': true,
          'Image': 'https://st.motortrend.com/uploads/sites/5/2018/01/2019-Ford-Edge-ST-front-three-quarter-in-motion-02.jpg?interpolation=lanczos-none&fit=around|660:440',
          'Website': 'https://ford.com'
        },
        {
          'Year': 2019,
          'Make': 'Ford',
          'Model': 'Edge',
          'Type': 'SUV',
          'Price': '60000',
          'Active': true,
          'Image': 'https://s1.cdn.autoevolution.com/images/news/2019-ford-edge-makes-european-debut-with-powerful-ecoblue-bi-turbo-diesel-123699_1.jpg',
          'Website': 'https://ford.com'
        }
      ]
    }
  },
  methods: {
    emptySearch: function () {
      this.acvalue = ''
      this.filter_type = []
    },
    orderYearLH: function () {
      return this.auto_listing.sort(function (a, b) {
        return a.Year - b.Year
      })
    },
    orderYearHL: function () {
      return this.auto_listing.sort(function (a, b) {
        return b.Year - a.Year
      })
    },
    orderPriceLH: function () {
      return this.auto_listing.sort(function (a, b) {
        return a.Price - b.Price
      })
    },
    orderPriceHL: function () {
      return this.auto_listing.sort(function (a, b) {
        return b.Price - a.Price
      })
    },
    capitalize: function (val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },
  watch: {
    currentOrder: {
      handler (val) {
        switch (parseInt(val)) {
          case 1:
            this.orderYearLH()
            break
          case 2:
            this.orderYearHL()
            break
          case 3:
            this.orderPriceLH()
            break
          case 4:
            this.orderPriceHL()
            break
          default:
        }
      }
    },
    acvalue: {
      handler (val) {
        if (!val) { this.filter_type = [] }
        this.auto_listing = []
        for (let i = 0; i < this.auto_root.length; i++) {
          let year = '' + this.auto_root[i]['Year'] + ''
          let make = '' + this.auto_root[i]['Make'] + ''
          let model = '' + this.auto_root[i]['Model'] + ''
          if (year.includes(val) || make.includes(this.capitalize(val)) || model.includes(this.capitalize(val))) { this.auto_listing.push(this.auto_root[i]) }
        }
      }
    },
    filter_type: {
      handler (val) {
        if (val.length) {
          for (let i = 0; i < this.auto_listing.length; i++) {
            if (val.includes(this.auto_listing[i]['Type'])) {
              this.auto_listing[i]['Active'] = true
            } else {
              this.auto_listing[i]['Active'] = false
            }
          }
        } else {
          for (let i = 0; i < this.auto_listing.length; i++) {
            this.auto_listing[i]['Active'] = true
          }
        }
      }
    }
  }
})

require('./assets/styles.css')
