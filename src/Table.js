import React from 'react'



const Table = ({ restaurantarray }) => {

    function sortColumn(tablerow) {
        var table, rows, switching, i, first, second, shouldSwitch, direction, switchcount = 0;
        table = document.getElementById('table');
        switching = true;
        direction = 'ascending';
        while (switching) {
            switching = false;
            rows = table.rows;
            for (let i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                first = rows[i].getElementsByClassName('cell')[tablerow];
                second = rows[i+1].getElementsByClassName('cell')[tablerow];
                if (direction === 'ascending') {
                    if (first.innerHTML.toLowerCase() > second.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (direction === 'descending') {
                    if (first.innerHTML.toLowerCase() < second.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && direction === 'ascending') {
                    direction = 'descending';
                    switching = true;
                }
            }
        }
    }

    return (
        <table id='table'>
            <thead>
                <tr>
                    <th onClick={this.sortColumn(0)}>Name</th>
                    <th onClick={this.sortColumn(1)}>City</th>
                    <th onClick={this.sortColumn(2)}>State</th>
                    <th onClick={this.sortColumn(3)}>Phone Number</th>
                    <th onClick={this.sortColumn(4)}>Genre</th>
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
