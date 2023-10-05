package com.dynamiccode.event.service;

import java.util.List;

import com.dynamiccode.event.dto.request.UserRequest;
import com.dynamiccode.event.dto.response.UserResponse;
import com.dynamiccode.event.model.UserModel;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

	

	UserModel saveUser(UserModel userModel);

}