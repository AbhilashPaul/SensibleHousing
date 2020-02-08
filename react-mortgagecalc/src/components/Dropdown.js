import React, { Component } from 'react'

class Dropdown extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayMenu: false
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this)
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    

    render() {
        return (
           

                <div  className="dropdown" style = {{background:"white",width:"200px"}} >
                <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

                { this.state.displayMenu ? (
                <ul>
                    <li>Weekly</li>
                    <li>Bi-weekly</li>
                    <li>Monthly</li>
                </ul>
                ):
                (
                null
                )
                }
                    </div>
                );

          
    }
}

export default Dropdown
