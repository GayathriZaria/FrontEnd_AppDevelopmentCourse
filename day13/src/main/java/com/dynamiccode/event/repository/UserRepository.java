package com.dynamiccode.event.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dynamiccode.event.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByEmail(String username);

    UserModel findByUid(Long uid);

    void deleteByUid(Long uid);

}