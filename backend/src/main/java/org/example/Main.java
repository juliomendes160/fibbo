package org.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class Main {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    // Bean CommandLineRunner para testar a conexão com o banco de dados
    @Bean
    public CommandLineRunner testConnection(JdbcTemplate jdbcTemplate) {
        return args -> {
            try {
                // Execute uma consulta simples para testar a conexão
                jdbcTemplate.execute("SELECT 1");
                System.out.println("Database connection test succeeded!");
            } catch (Exception e) {
                System.err.println("Database connection test failed: " + e.getMessage());
            }
        };
    }
}
