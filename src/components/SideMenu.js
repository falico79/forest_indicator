import React, { Component } from 'react'

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
    }
    test (event) {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render () {
        return (
            <div>
                <div className="dropdown">
                    <button onclick={this.test} class="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu