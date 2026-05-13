module ApiTokenAuthenticatable
  extend ActiveSupport::Concern

  private

  def authenticate_api_token!
    expected_token = api_token
    return render(json: { error: "Server token not configured" }, status: :service_unavailable) if expected_token.blank?

    provided_token = request.headers["Authorization"].to_s.sub(/\ABearer\s+/i, "")
    return render(json: { error: "Unauthorized" }, status: :unauthorized) unless ActiveSupport::SecurityUtils.secure_compare(provided_token, expected_token)
  end

  def api_token
    Rails.application.credentials.dig(:digest_api_token).presence || ENV["DIGEST_API_TOKEN"]
  end
end
