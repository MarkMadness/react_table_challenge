import React from 'react'



const Table = ({ restaurantArray }) => {

    return (
        <table id='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone Number</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                { (restaurantArray.length > 0) ? restaurantArray.map( (restaurantArray, index) => {
                    return (
                        <tr key={ index }>
                            <td className='cell'>{ restaurantArray.name }</td>
                            <td className='cell'>{ restaurantArray.city }</td>
                            <td className='cell'>{ restaurantArray.state }</td>
                            <td className='cell'>{ restaurantArray.telephone }</td>
                            <td className='cell'>{ restaurantArray.genre }</td>
                        </tr>
                    )
                }) : <tr><td colSpan='4'>Loading...</td></tr>}
            </tbody>
        </table>
    )
}

export default Table
