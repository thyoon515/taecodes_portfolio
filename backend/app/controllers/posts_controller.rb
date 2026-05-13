class PostsController < ApplicationController
  include ApiTokenAuthenticatable

  before_action :authenticate_api_token!, only: [:create]

  def index
    posts = Post.published.by_category(params[:category]).recent.limit(50)
    render json: posts.as_json(only: %i[id title slug category summary tags published_at])
  end

  def show
    post = Post.published.find_by!(slug: params[:slug])
    render json: post.as_json(only: %i[id title slug category summary body tags published_at])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Not found" }, status: :not_found
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post.as_json(only: %i[id title slug category summary body tags published_at]), status: :created
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :slug, :category, :summary, :body, :published_at, tags: [])
  end
end
