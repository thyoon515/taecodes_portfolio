# Be sure to restart your server when you modify this file.

# Avoid CORS issues when the API is called from the React frontend.
# Adjust origins for production once the frontend is deployed.

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(
      "http://localhost:5173",
      "http://localhost:4173",
      "http://127.0.0.1:5173",
      "https://taecodes.com",
      "https://www.taecodes.com"
    )

    resource "*",
      headers: :any,
      methods: %i[get post put patch delete options head],
      expose: %w[Authorization]
  end
end
