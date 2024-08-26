import {createContext, useState} from 'react'

const RegisterContext = createContext()

export const RegisterProvider = ({children}) => {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('Arts and Culture')
  const [isRegistered, setIsRegistered] = useState(false)
  const [showError, setShowError] = useState(false)

  const changeName = newName => setName(newName)
  const changeTopic = newTopic => setTopic(newTopic)
  const registerName = () => setIsRegistered(true)
  const updateError = () => setShowError(true)

  return (
    <RegisterContext.Provider
      value={{
        name,
        topic,
        isRegistered,
        showError,
        changeName,
        changeTopic,
        registerName,
        updateError,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterContext
