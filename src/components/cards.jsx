/* eslint-disable react/prop-types */
import './cards.css'

const Card = (props) => {
    return (
    <>
        <div>
            <img src={props.url} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
           {/*  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="" />
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="" />
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="" />
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="" /> */}
        </div>
        </>
    )
}

export default Card