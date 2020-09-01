package com.swapgo.bookmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swapgo.bookmgmt.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
