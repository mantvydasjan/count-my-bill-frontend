import React from 'react'
import SingleMeasurement from './SingleMeasurement';

export default () => {

  const[measurements, setMeasurements] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/measurement/all', {
      method: 'GET'
    })
  .then(res => res.json())
  .then(data =>{
    setMeasurements(data);
  })
}, [])


const singleMeasurement = measurements.map(measurement => {
  return (
    <SingleMeasurement
    measurement={measurement}
    key={measurement.id}
    />
  )
})

return (
  <div>
    {singleMeasurement.reverse()}
  </div>
)

}


