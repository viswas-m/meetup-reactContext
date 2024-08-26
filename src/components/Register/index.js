import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from './style'

const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Learning'},
  {id: 'GAMES', displayText: 'Games'},
]

const Register = () => {
  const {
    name,
    topic,
    changeName,
    changeTopic,
    showError,
    registerName,
    updateError,
  } = useContext(RegisterContext)

  const history = useHistory()

  const submitRegistration = event => {
    event.preventDefault()
    if (name && topic) {
      registerName()
      history.replace('/') // Redirect to the home page
    } else {
      updateError()
    }
  }

  const onChangeName = event => {
    changeName(event.target.value)
  }

  const onChangeTopic = event => {
    changeTopic(event.target.value)
  }

  return (
    <div>
      <Header />
      <RegisterContainer>
        <RegisterImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <Form onSubmit={submitRegistration}>
          <RegisterHeading>Let us join</RegisterHeading>
          <InputContainer>
            <Label htmlFor="name">NAME</Label>
            <Input
              id="name"
              value={name}
              type="text"
              onChange={onChangeName}
              placeholder="Your name"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="topic">Topics</Label>
            <Select id="topic" value={topic} onChange={onChangeTopic}>
              {topicsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.displayText}
                </option>
              ))}
            </Select>
          </InputContainer>
          <RegisterButton type="submit">Register Now</RegisterButton>
          {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
        </Form>
      </RegisterContainer>
    </div>
  )
}

export default Register
