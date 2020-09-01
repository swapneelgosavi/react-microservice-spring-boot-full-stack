import axios from 'axios'

class BookApiService {

    retrieveAllBooks() {
        return axios.get(`http://localhost:8080/get-books`);
    }

    deleteBookApi(id) {
        return axios.delete(`http://localhost:8080/book/${id}`);
    }

    retrieveBook(name, id) {       
        return axios.get(`http://localhost:8080/book/${id}`);
    }

    updateBook(name, id, book) {        
        return axios.put(`http://localhost:8080/book/update/${id}`, book);
    }

    createBook(name, book) {        
        return axios.post(`http://localhost:8080/book/createbook/`, book);
    }


}

export default new BookApiService();