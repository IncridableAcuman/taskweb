FROM gradle:8.5-jdk17 AS build

LABEL author="Soft Uzbek Slogan"

WORKDIR /app

COPY build.gradle .
COPY settings.gradle .

COPY src ./src

RUN gradle bootJar

FROM openjdk:17-jre-slim AS runtime

WORKDIR /app

COPY --from=build /app/build/libs/*.jar /app/app.jar

EXPOSE 8080

CMD [ "java", "-jar", "/app/app.jar" ]