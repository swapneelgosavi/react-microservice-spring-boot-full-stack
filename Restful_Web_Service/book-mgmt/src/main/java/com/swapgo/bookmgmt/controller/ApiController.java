package com.swapgo.bookmgmt.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.swapgo.bookmgmt.model.Book;
import com.swapgo.bookmgmt.repository.BookRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApiController {
	
	@Autowired
	BookRepository bookRepository;
	
	@GetMapping("/get-books")
	public List<Book> getBooKList() {
		return bookRepository.findAll();
	}
	
	@GetMapping("/book/{id}")
	public Book getBooKbyId(@PathVariable long id) {
		return bookRepository.findById(id).get();
	}
	
	@DeleteMapping("book/{id}")
	public ResponseEntity<Void> deleteBook(@PathVariable long id) {
		bookRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	
	@PutMapping("/book/update/{id}")
	public ResponseEntity<Book> updateBook(			
			@PathVariable long id, @RequestBody Book book){
		
		Book bookUpdated = bookRepository.save(book);
		
		return new ResponseEntity<Book>(book, HttpStatus.OK);
	}
	
	@PostMapping("/book/createbook")
	public ResponseEntity<Void> createBook(@RequestBody Book book){
		
		Book createdBook = bookRepository.save(book);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdBook.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}	
	
	
	
	
	
}
