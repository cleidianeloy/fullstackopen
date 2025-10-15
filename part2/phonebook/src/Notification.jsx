import "./style/notification.scss"
function Notification({message}) {
    if(message === null){
        return null
    }
    /*
        {   
            message: 'some error happened', 
            goodMessage: false
        }
    */
  return (
      <div className={message.goodMessage ? "notification" : "notification error"}>
        {message.message}
      </div>
  )
}

export default Notification