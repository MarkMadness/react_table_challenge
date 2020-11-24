import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { isChecked: false}
    }
    
    toggleFilterChange = () => {
        const { handleFilterChange, label } = this.props
        this.setState(({ isChecked }) => {
            return { isChecked: !isChecked }
        })

        handleFilterChange(label)
    }

    render() {
        const { label } = this.props
        const { isChecked } = this.state

        return (
            <div className='header-container'>
                <div className='filter-container'>
                    <form>
                        <h2>Filter</h2>
                        <label for="allFilter">
                            <input type="checkbox" value={label} checked={isChecked} />    
                        </label><br />
                        <label for="azFilter">
                            <input type="checkbox" value={label} checked={isChecked} />    
                        </label><br />
                        {/* <input type="checkbox" onChange={this.filter("AZ")} />
                        <label for="allFilter">AZ</label><br />
                        <input type="checkbox" onChange={this.filter("CA")} />
                        <label for="allFilter">CA</label><br />
                        <input type="checkbox" onChange={this.filter("CO")} />
                        <label for="allFilter">CO</label><br />
                        <input type="checkbox" onChange={this.filter("FL")} />
                        <label for="allFilter">FL</label><br />
                        <input type="checkbox" onChange={this.filter("HI")} />
                        <label for="allFilter">HI</label><br />
                        <input type="checkbox" onChange={this.filter("MA")} />
                        <label for="allFilter">MA</label><br />
                        <input type="checkbox" onChange={this.filter("MD")} />
                        <label for="allFilter">MD</label><br />
                        <input type="checkbox" onChange={this.filter("MN")} />
                        <label for="allFilter">MN</label><br />
                        <input type="checkbox" onChange={this.filter("NC")} />
                        <label for="allFilter">NC</label><br />
                        <input type="checkbox" onChange={this.filter("NJ")} />
                        <label for="allFilter">NJ</label><br />
                        <input type="checkbox" onChange={this.filter("NV")} />
                        <label for="allFilter">NV</label><br />
                        <input type="checkbox" onChange={this.filter("NY")} />
                        <label for="allFilter">NY</label><br />
                        <input type="checkbox" onChange={this.filter("OR")} />
                        <label for="allFilter">OR</label><br />
                        <input type="checkbox" onChange={this.filter("TN")} />
                        <label for="allFilter">TN</label><br />
                        <input type="checkbox" onChange={this.filter("TX")} />
                        <label for="allFilter">TX</label><br />
                        <input type="checkbox" onChange={this.filter("VA")} />
                        <label for="allFilter">VA</label><br />
                        <input type="checkbox" onChange={this.wfilter("WV")} />
                        <label for="allFilter">WV</label><br /> */}
                    </form>
                </div>
                <div className='search-container'>
                    <input type='text' placeholder='Search...'></input>
                </div>
            </div>
        )
    }
}

export default Header