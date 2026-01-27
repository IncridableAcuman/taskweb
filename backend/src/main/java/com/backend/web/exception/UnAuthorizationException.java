package com.backend.web.exception;

public class UnAuthorizationException extends RuntimeException{
    public UnAuthorizationException(String message){
        super(message);
    }
}
