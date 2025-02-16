package com.marian.susProject;

	import org.springframework.context.annotation.Bean;
	import org.springframework.context.annotation.Configuration;
	import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.RequestMapping;

	@Configuration

	public class SecurityConfig {
		 @Bean
		    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	         http.csrf(csrf -> csrf.disable())  // Disable CSRF for simplicity (not recommended for production)
	                 .authorizeHttpRequests(auth -> auth
	                                 .requestMatchers("/api/registrations/**","/api/waste-donation","/api/complaints","/api/profile/**","/api/videos/**","/api/events/**","/api/panchayatusers","/api/register", "/api/login","/api/panchayatusers/{id}","/api/deletepanchayatusers/{id}","/forgot-password","/ResetPassword").permitAll()  // Allow access to these endpoints without authentication
	                                 .anyRequest().authenticated()  // All other requests require authentication
	                 );
		        return http.build();
		    }
		 
		 @Bean
		    public PasswordEncoder passwordEncoder() {
		        return new BCryptPasswordEncoder();
		    }
		
}