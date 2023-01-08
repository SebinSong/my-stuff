import { useState, useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  // states & local variables
  let intervalId = null
  const [sec, updateSec] = useState(5)
  const error = useRouteError()

  // effects
  useEffect(() => {
    intervalId = setInterval(() => {
      updateSec(prev => {
        if (prev === 0) {
          clearInterval(intervalId)
          navigateToMain()
          return 0
        } else { return prev - 1 }
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  // methods
  const navigateToMain = () => { console.log('navigate to main!') }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Automatic navigation to '/' after
        {" "}
        {
          sec === 0
            ? 'Now'
            : sec === 1
              ? `1 second`
              : `${sec} seconds`
        }
        .
      </p>
    </div>
  );
}