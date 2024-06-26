package com.onlineBook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineBook.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
