import React , {Component} from 'react';
import BookApiService from '../../api/BookApiService';
//import AuthenticationService from '../../service/AuthenticationService.js'

class BookList extends Component {

    constructor(props) {
        super(props)
        this.state = {
               books :  
                [
                    //{id:null, name:null, authorName:null,isbn:null,publisherName:null,price:null }   
                ],
                message:null
            }

        this.refreshBooks = this.refreshBooks.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.addBook = this.addBook.bind(this);

    }

    addBook() {        
        this.props.history.push(`/book/-1`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentDidMount() {
        this.refreshBooks();
    }

    refreshBooks() {
        
        BookApiService.retrieveAllBooks()
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )
    } 

    deleteBook(id) {
        //let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        BookApiService.deleteBookApi(id)
            .then(
                response => {
                    this.setState({ message: `Delete of book ${id} Successful` })
                    this.refreshBooks()
                }
            )

    }    

    updateBook(id) {
        this.props.history.push(`/book/${id}`)        
       // let username = AuthenticationService.getLoggedInUserName()

    } 

    render() {
        return (
            
            <div>
                <div className="container">

                <h1>Book List</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>} 

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Author Name</th>
                                <th>ISBN</th>
                                <th>Publisher Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.name}</td>
                                            <td>{book.authorName}</td>
                                            <td>{book.isbn}</td>
                                            <td>{book.publisherName}</td>
                                            <td>{book.price}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateBook(book.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteBook(book.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addBook}>Add</button>
                    </div>
                </div>    

            </div>


        )
    }
}

export default BookList