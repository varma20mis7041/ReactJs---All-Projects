import './index.css'

const Message = props => {
  const {login} = props
  let messageText
  if (login) {
    messageText = 'Welcome User'
  } else {
    messageText = 'Please Login'
  }

  return <h1 className="message_heading">{messageText}</h1>
}

export default Message
