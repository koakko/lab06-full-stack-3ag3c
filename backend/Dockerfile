FROM maven:3.9.6-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src ./src
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]