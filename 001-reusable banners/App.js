import './App.css'

import Banner from './components/BannerCardItem/index'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <ul className="banner_background_container">
    {bannerCardsList.map(eachBanner => (
      <Banner bannerDetails={eachBanner} key={eachBanner.id} />
    ))}
    <li className="last-container">
      Developed date : 16 jul 2023 | contact : bhargav.coding@gmail.com
    </li>
  </ul>
)

export default App
