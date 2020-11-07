import React from 'react';
const globalApi = require('../../helpers/globalApi');
const util = require('../../helpers/util');


class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            commentArr: []
        }
        this.getAllComments();
    }

    getAllComments() {
        globalApi.get('comment').then(res => {
            this.setState({ commentArr: res.Result })
            console.log(this.state.commentArr);
            util.notify('success', res.Comment);
        })
    }

    render() {
        return (
            <>
                <h2>I am the comment Component!</h2>

                <ol>
                    {(this.state.commentArr).map((each, index) => (
                        <li key = { index }> {each.title} </li>
                    ))}
                </ol>

            </>

        )
    }










}

export default Comment;