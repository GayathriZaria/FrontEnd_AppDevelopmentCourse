package com.dynamiccode.event.auth;

import com.dynamiccode.event.auth.AuthenticationRequest;
import com.dynamiccode.event.auth.AuthenticationResponse;
import com.dynamiccode.event.dto.request.RegisterRequest;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}