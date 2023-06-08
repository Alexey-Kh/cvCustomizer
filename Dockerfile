# Start from a Node.js base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the work directory
COPY package*.json ./

# Install dependencies using npm
RUN npm ci
RUN npm install -g serve

# Copy the dist code
COPY ./dist /app

# Expose the Vite default port (5000)
EXPOSE 3000

# Start the application using npm
CMD ["serve", "-s", "dist", "-l", "3000"]
