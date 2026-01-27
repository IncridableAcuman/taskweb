package com.backend.web.util;

import com.backend.web.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
@EnableAsync
public class MailUtil {
    private final JavaMailSender mailSender;

    @Async
    public void sendMail(String to,String subject,String test){
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(test);
            mailSender.send(message);
        } catch (Exception e) {
            throw new BadRequestException(e.getMessage());
        }
    }
}
