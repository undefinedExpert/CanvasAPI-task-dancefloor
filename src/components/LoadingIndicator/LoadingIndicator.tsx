type Props = {
    message?: string
}

function LoadingIndicator(props: Props) {
    return (
      <div>
       {props.message || "Loading..."}
      </div>
    )
  }
  
  export default LoadingIndicator
  