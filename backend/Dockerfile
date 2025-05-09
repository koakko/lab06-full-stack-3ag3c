FROM maven:3.8.6-openjdk-17
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src ./src
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]