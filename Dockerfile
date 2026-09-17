# 1. Pakai Node.js versi 24 sebagai base image
FROM node:24-alpine

# 2. Set folder kerja di dalam container
WORKDIR /app

# 3. Install pnpm secara global
RUN npm install -g pnpm@11

# 4. Copy file dependency
COPY package.json pnpm-lock.yaml ./

# 5. Install dependencies
RUN pnpm install --frozen-lockfile

# 6. Copy semua source code
COPY . .

# 7. Build project jadi static files
RUN pnpm build

# 8. Expose port 4173 (default vite preview)
EXPOSE 4173

# 9. Jalankan preview server
CMD ["pnpm", "preview", "--host"]