# --------- Build Stage ---------
  FROM node:18-alpine AS builder

  WORKDIR /app
  
  COPY package*.json ./
  RUN npm install
  
  COPY . .
  RUN npm run build:fast
  
  # --------- Production Stage ---------
  FROM node:18-alpine
  
  # Install `serve` to serve the static files
  RUN npm install -g serve
  
  WORKDIR /app
  
  # Copy built app from builder
  COPY --from=builder /app/build ./build
  
  # Expose port 3000
  EXPOSE 3000
  
  # Serve the app
  CMD ["serve", "-s", "build", "-l", "3000"]
  