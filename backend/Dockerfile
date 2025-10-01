FROM ruby:3.2

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Set working directory
WORKDIR /app

# Install gems
COPY Gemfile* ./
RUN bundle install

# Copy all backend code
COPY . .

# Expose Rails port
EXPOSE 3000

# Run migrations + start server
CMD ["bash", "-c", "bundle exec rails db:migrate && rails s -b 0.0.0.0"]