# .devcontainer/Dockerfile
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# User variables
ARG USERNAME=devuser
ARG USER_UID=1001
ARG USER_GID=$USER_UID

# Install sudo and basic dependencies
RUN apt-get update && apt-get install -y sudo \
    && rm -rf /var/lib/apt/lists/*

# Create group and user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # Add user to sudo group
    && usermod -aG sudo $USERNAME \
    # Allow passwordless sudo
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Working directory
WORKDIR /app

# Copy manifest files first (better layer caching)
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy the rest of the source code
COPY . .

# Expose server port
EXPOSE 3000

# Switch to the created user
USER $USERNAME

# Default command
# CMD ["node", "start"]
CMD ["npm", "run", "server"]