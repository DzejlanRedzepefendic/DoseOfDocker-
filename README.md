# Docker Demo

This repository demonstrates building and running Docker containers for simple Node.js applications using the Node.js Alpine image.

## Dockerfiles

Three Dockerfiles are provided, each for a different Node.js application:

-   **Dockerfile.node1**
-   **Dockerfile.node2**
-   **Dockerfile.node3**

## Build and Run Commands

Replace the previous commands with these updated ones that use the Node.js Alpine image:

### Commands for Dockerfile.node1

Build the Docker image:

```sh
docker build -t node_app1 -f Dockerfile.node1 .
```

### Run the Docker container:

```sh
docker run --name node_app1_container node_app1
```

### Commands for Dockerfile.node2

Build the Docker image:

```sh
docker build -t node_app2 -f Dockerfile.node2 .
```

### Run the Docker container:

```sh
docker run --name node_app2_container node_app2
```

### Commands for Dockerfile.node3

Build the Docker image:

```sh
docker build -t node_app3 -f Dockerfile.node3 .
```

### Run the Docker container:

```sh
docker run --name node_app3_container node_app3
```
