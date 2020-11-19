import React from 'react'



const Table = ({ restaurantarray }) => {

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
                { (restaurantarray.length > 0) ? restaurantarray.map( (restaurantarray, index) => {
                    return (
                        <tr key={ index }>
                            <td className='cell'>{ restaurantarray.name }</td>
                            <td className='cell'>{ restaurantarray.city }</td>
                            <td className='cell'>{ restaurantarray.state }</td>
                            <td className='cell'>{ restaurantarray.telephone }</td>
                            <td className='cell'>{ restaurantarray.genre }</td>
                        </tr>
                    )
                }) : <tr><td colSpan='4'>Loading...</td></tr>}
            </tbody>
        </table>
    )
}

export default Table
