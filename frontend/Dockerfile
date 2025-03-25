# Use Node.js 18 Alpine as base image
FROM node:18-alpine 

# Set working directory
WORKDIR /app 

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install 

# Copy the entire project
COPY . . 

# Build the React app
RUN npm run build 

# Use Nginx to serve the built frontend
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
