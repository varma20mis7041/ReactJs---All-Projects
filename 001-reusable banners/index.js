import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} list_item`}>
      <div className="list_container">
        <h1 className="main_heading">{headerText}</h1>
        <p className="para">{description}</p>
        <div>
          <button className="button">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default Banner
