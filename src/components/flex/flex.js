import React from 'react';
// import './flex.css';


class Flex extends React.Component {
    constructor() {
        super();
        this.state = {
            initialPosition: 'flex'
        }
    }




    render() {
        return (
            <div className = "container">
                <div className = "home"> Home </div>
                <div className = "search"> Search </div>
                {/* <div className = "about"> About </div> */}
                <div className = "logout"> Logout </div>
            </div>
        )
    }



}




export default Flex;