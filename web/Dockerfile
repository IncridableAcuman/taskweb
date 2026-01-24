FROM gradle:8.5-jdk17-slim AS builder

WORKDIR /app

COPY . .

RUN gradle bootJar --no-daemon

FROM aclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "app.jar" ]