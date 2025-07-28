
const Alert = ({data}) => {
console.log(data);

const renderAlert = (type:string) => {
  switch (type) {
    case 'info':
      return (
        <div role="alert" className="alert alert-info alert-soft">
          <span>12 unread messages. Tap to see.</span>
        </div>
      );
    case 'success':
      return (
        <div role="alert" className="alert alert-success alert-soft">
          <span>Your purchase has been confirmed!</span>
        </div>
      );
    case 'warning':
      return (
        <div role="alert" className="alert alert-warning alert-soft">
          <span>Warning: Invalid email address!</span>
        </div>
      );
    case 'error':
      return (
        <div role="alert" className="alert alert-error alert-soft">
          <span>Error! Task failed successfully.</span>
        </div>
      );
    default:
      return null;
  }
};


  return (
    <div>{renderAlert(data)}</div>
  )
}

export default Alert

