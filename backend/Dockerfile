FROM maven:3.9.9-eclipse-temurin-17
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src ./src
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]