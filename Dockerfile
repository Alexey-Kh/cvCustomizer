# ---- Runtime Stage ----

# Start from a Node.js base image
FROM arm64v8/node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install serve package globally
RUN npm install -g serve

# Copy the dist code
COPY ./dist ./dist

# Expose the port
EXPOSE 80

# Start the application using npm
CMD ["serve", "-s", "dist", "-l", "80"]
