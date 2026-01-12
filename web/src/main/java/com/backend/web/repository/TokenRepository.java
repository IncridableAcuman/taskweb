package com.backend.web.repository;

import com.backend.web.entity.Token;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TokenRepository extends MongoRepository<Token,String> {
}
