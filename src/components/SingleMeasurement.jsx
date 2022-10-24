import React from "react"

export default function SingleMeasurement(props) {

    return (
        <div className="measurements">

            <table>
                <tbody>
                <tr>
                    <th>Id: {props.measurement.measurementId}</th>
                    <th>Value: {props.measurement.value}</th>
                    <th>Counter: {props.measurement.counterId}</th>
                    <th>Date: {props.measurement.dateTime}</th>
                </tr>
                </tbody>
            </table>

            <hr />
        </div>
    )
}