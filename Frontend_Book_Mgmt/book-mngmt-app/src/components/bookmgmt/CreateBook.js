import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from '../../service/AuthenticationService.js'
import BookApiService from '../../api/BookApiService';


class CreateBook extends Component {

    constructor(props) {
        super(props)

        this.state = {            
                id: this.props.match.params.id,
                name: '', 
                authorName: '',
                isbn: '',
                publisherName: '',
                price: ''                
        }

        this.onSubmit = this.onSubmit.bind(this)

    }


    componentDidMount() {
       
        if (this.state.id == -1) {            
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        BookApiService.retrieveBook(username, this.state.id)
            .then(response => this.setState({               
                name: response.data.name, 
                authorName: response.data.authorName,
                isbn: response.data.isbn,
                publisherName: response.data.publisherName,
                price: response.data.price 
            }))
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        let book = {
            id:this.state.id,
            name: values.name, 
            authorName: values.authorName,
            isbn: values.isbn,
            publisherName: values.publisherName,
            price: values.price 
        }

        if (this.state.id == -1) {
            BookApiService.createBook(username, book)
                .then(() => this.props.history.push('/BookList'))
        } else {
            BookApiService.updateBook(username, this.state.id, book)
                .then(() => this.props.history.push('/BookList'))
        }

        console.log(values);
    }


    render() {

        let { name, authorName, isbn, publisherName, price } = this.state


        return (
            <>
                <h1>Book</h1>
                <div className="container">
                    <Formik
                        initialValues={{ name, authorName, isbn, publisherName, price }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    
                                    <fieldset className="form-group">
                                        <label>Book Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Author Name</label>
                                        <Field className="form-control" type="text" name="authorName" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>ISBN</label>
                                        <Field className="form-control" type="text" name="isbn" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Publisher Name</label>
                                        <Field className="form-control" type="text" name="publisherName" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>




            </>
        )
    }
}

export default CreateBook