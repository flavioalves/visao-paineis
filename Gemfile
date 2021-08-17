source 'https://rubygems.org'
ruby '2.4.7'

gem 'rails', '~> 4.2'
gem 'pg', '~> 0.15'
gem 'slim'
gem 'unicorn'
gem 'carrierwave'
gem 'mini_magick'
gem 'fog'
gem 'activeadmin'
gem 'devise'
gem 'omniauth-facebook'
gem 'fb-channel-file'
gem 'friendly_id'
gem 'rufus-scheduler'
gem 'draper'
gem 'resque'
gem 'redis'

# after migration to rails 4
gem 'bigdecimal', '1.3.5'
gem 'responders', '~> 2.0'

# external services
gem 'newrelic_rpm'
gem 'sentry-raven'

# frontend gems
gem 'ckeditor'
gem 'jquery-rails'
gem 'jquery-ui-rails', '~> 4.2.1'
gem 'jquery-migrate-rails'
gem 'mercury-rails', :git => 'https://github.com/jejacks0n/mercury.git'
gem 'chosen-rails'

#assets
gem 'sass'
gem 'sass-rails'
gem 'coffee-rails'
gem 'uglifier'
gem 'font_assets'
gem 'modernizr-rails'
gem 'selectivizr-rails'
gem 'singularitygs'
gem 'singularity-extras'
gem 'toolkit'

# twitter bootstrap
gem 'anjlab-bootstrap-rails', :require => 'bootstrap-rails'

gem "font-awesome-rails",        '~> 3.2'


group :test, :development do
  gem 'rspec-rails'
end

group :test do
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
  gem 'timecop'
  gem 'email_spec'
end

group :development do
  gem 'foreman'
  gem 'thin'
  gem 'rails-boilerplate'
  gem 'magic_encoding'
  gem 'html2slim'
  gem 'guard-livereload', require: false
  gem 'rack-livereload'
  gem 'rb-fsevent', require: false
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  #gem 'rack-mini-profiler'
end

group :production do
  gem 'heroku-deflater'
end
