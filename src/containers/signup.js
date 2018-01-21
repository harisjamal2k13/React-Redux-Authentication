import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class Signup extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        console.log(this.refs.email.getValue())
    }
    render() {
        return (
            <div>
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    ref="email"
                />
                <br />

                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    ref="pass"
                />
                <br />
                <RaisedButton label="Signup"
                    onClick={this.clickHandler}
                />
            </div>
        )
    }
}
export default Signup
