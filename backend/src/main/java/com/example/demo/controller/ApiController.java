package com.example.demo.controller;
import com.example.demo.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @GetMapping("/hello")
    public Message sayHello() {
        Message message = new Message();
        message.setId(1L);
        message.setContent("Hello from Backend!");
        return message;
    }
    @GetMapping("/db")
    public Message getFromDb() {
        Message message = new Message();
        try {
            String content = jdbcTemplate.queryForObject("SELECT content FROM messages WHERE id = 1", String.class);
            message.setId(1L);
            message.setContent(content);
        } catch (Exception e) {
            message.setId(1L);
            message.setContent("Error accessing database");
        }
        return message;
    }
}