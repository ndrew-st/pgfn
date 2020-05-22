// import axios from 'axios'

import Advantage from './-components/advantage'
import HousingOptions from './-components/housing-options'
import ImpressionsForEvery from './-components/impressions-for-every'
import SearchScreen from './-components/search-screen'
import WhereToGo from './-components/where-to-go'
import WhereToStay from './-components/where-to-stay'
import MainScreen from './-components/MainScreen'
import LocationDescription from './-components/location-description'
import PopularDirection from './-components/popular-direction'
import Accommodation from './-components/accommodation'

export default {
  components: {
    MainScreen,
    Advantage,
    HousingOptions,
    ImpressionsForEvery,
    SearchScreen,
    WhereToGo,
    WhereToStay,
    LocationDescription,
    PopularDirection,
    Accommodation
  },
  data () {
    return {
      popular: [],
      apartments: [],
      description: 'Полуостров в северной части Чёрного моря, с северо-востока омывается Азовским морем, площадью около 27 000 км², из которых 72 % — равнина, 20 % — горы и 8 % — озёра и другие водные объекты.'
    }
  },
  async created () {
  //   const apartmentsData = await axios.get('/api/apartments-day/?limit=9&offset=0')
  //   this.apartments-day = apartmentsData.data.map((item) => {
  //     const image = (item.photos.length > 0) ? item.photos[0] : ''
  //     return {
  //       ...item,
  //       image
  //     }
  //   })
  //   const popularData = await axios.get('/api/apartments-day/popular?limit=9&offset=0')
  //   this.popular = popularData.data.map((item) => {
  //     const image = (item.photos.length > 0) ? item.photos[0] : ''
  //     return {
  //       ...item,
  //       image
  //     }
  //   })
  }
}
