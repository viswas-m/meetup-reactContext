import {Link, useHistory} from 'react-router-dom'
import {useContext} from 'react'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './style'

const Home = () => {
  const {isRegistered, name, topic} = useContext(RegisterContext)
  const history = useHistory()

  const onRegister = () => {
    history.replace('/register')
  }

  return (
    <div>
      <Header />
      {isRegistered ? (
        <HomeContainer>
          <Name>Hello {name}</Name>
          <Topic>Welcome to {topic}</Topic>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      ) : (
        <HomeContainer>
          <HomeHeading>Welcome to Meetup</HomeHeading>
          <HomePara>Please register for the topic</HomePara>
          <Link to="/register">
            <Button onClick={onRegister}>Register</Button>
          </Link>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )}
    </div>
  )
}

export default Home
