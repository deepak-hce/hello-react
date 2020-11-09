import React from 'react';
// import history from '../../helpers/history';

// const history = useHistory();
const globalApi = require('../../helpers/globalApi');
// const util = require('../../helpers/util');



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

    }

    registerFormSubmit(event) {
        // withRouter(({ history })).
        event.preventDefault();
        // globalApi.post('customer', this.state).then(res =>{
        //     console.log(res);
        //     util.notify('success', res.Comment);
        //     history.push('/');
        //     // return <Link to = "/" />
        // })

        const data = {	
            "email":"shankarshubham9@.com",
            "dateOfBirth":"1997-01-18",
            "nameOfApplicant":"Shubham Shankar",
            "mobile":"8130339070"
            }

        globalApi.post1('http://api.indiaecash.co.in/api/auth/user-registration', data).then(res =>{
            console.log(res);
            // return <Link to = "/" />
        })


    }

    render() {
        return (
            <div className="container">
            <div className = "login-box">

                <h2 className = "heading">Customer Registration Form</h2>
                <form className="form-horizontal" onSubmit={this.registerFormSubmit.bind(this)}>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Full name:</label>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.name}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="name" placeholder="Enter full name" name="name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" value={this.state.email}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" value={this.state.password}
                                onChange={this.handleInputChange.bind(this)} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-block btn-success">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Register;