import React from 'react';


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state);

    }

    registerFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        fetch('http://localhost:3000/api/v1/customer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(res => {
            console.log(res.json().then(res1 => console.log(res1)));
        })


    }

    render() {
        return (
            <div className="container">
                <h2>Customer Registration Form</h2>
                <form className="form-horizontal" onSubmit={this.registerFormSubmit.bind(this)}>

                    <div className="form-group">
                        <label className="control-label col-sm-2" for="email">Full name:</label>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.name}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="name" placeholder="Enter full name" name="name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" for="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" value={this.state.email}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" for="pwd">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" value={this.state.password}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;