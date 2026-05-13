class Post < ApplicationRecord
  CATEGORIES = %w[digest case_study project_log].freeze

  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :body, presence: true
  validates :category, presence: true, inclusion: { in: CATEGORIES }

  before_validation :generate_slug, on: :create
  before_validation :default_published_at, on: :create

  scope :published, -> { where.not(published_at: nil).where("published_at <= ?", Time.current) }
  scope :recent, -> { order(published_at: :desc, created_at: :desc) }
  scope :by_category, ->(category) { where(category: category) if category.present? }

  def to_param
    slug
  end

  private

  def generate_slug
    return if slug.present?
    return if title.blank?

    base = title.parameterize
    candidate = base
    counter = 1
    while Post.where(slug: candidate).where.not(id: id).exists?
      candidate = "#{base}-#{counter}"
      counter += 1
    end
    self.slug = candidate
  end

  def default_published_at
    self.published_at ||= Time.current
  end
end
