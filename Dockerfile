# Start from a Node.js base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the work directory
COPY package*.json ./

# Install dependencies using npm
RUN npm ci
RUN npm install -g serve

# Copy the rest of your application's source code
COPY . .

# Build the app
RUN npm run build

# Set the env to "production"
ENV NODE_ENV production

# Expose the Vite default port (5000)
EXPOSE 3000

# Start the application using npm
CMD ["serve", "-s", "dist", "-l", "3000"]
