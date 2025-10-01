FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy all frontend code
COPY . .

# Build React app
RUN npm run build

# Expose port for dev server
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]
