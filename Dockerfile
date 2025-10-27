  FROM node:20-alpine AS build
  WORKDIR /app
  
  # Salin file package dan lock untuk install dependensi
  COPY package*.json ./
  RUN npm install
  
  # Salin semua source code
  COPY . .
  
  # Build React project
  RUN npm run build

  FROM nginx:stable-alpine
  
  # Copy
  COPY --from=build /app/dist /usr/share/nginx/html
  
  # Expose port 80
  EXPOSE 80
  
  CMD ["nginx", "-g", "daemon off;"]
  