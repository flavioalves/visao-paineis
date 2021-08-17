VisaoPaineis::Application.configure do
  config.cache_classes = false
  config.whiny_nils = true
  config.consider_all_requests_local = true
  config.action_controller.perform_caching = false
  config.action_mailer.raise_delivery_errors = false
  config.active_support.deprecation = :log
  config.logger = Logger.new(STDOUT)
  config.logger.level = Logger.const_get ENV['LOG_LEVEL'] ? ENV['LOG_LEVEL'].upcase : 'DEBUG'
  config.action_dispatch.best_standards_support = :builtin
  # config.active_record.mass_assignment_sanitizer = :strict
  config.assets.compress = false
  # config.assets.debug = true
  config.assets.debug = false
  config.action_mailer.default_url_options = { host: 'localhost:5000' }
  config.assets.prefix = '/assets_dev'

  config.assets.precompile += %w(
    mercury.js
    mercury.css
    top_javascripts.js
    nwmatcher-1.2.5.js
    html5shiv-printshiv.js
    selectivizr.js
    active_admin.js
    active_admin.css
    active_admin/print.css
    debugging/holmes.css
    grid.js
  )
  # Do not eager load code on boot.
  config.eager_load = false

  Slim::Engine.set_default_options pretty: true
  Slim::Engine.set_default_options format: :html5

  # Automatically inject JavaScript needed for LiveReload
  config.middleware.insert_after(ActionDispatch::Static, Rack::LiveReload)

  config.after_initialize do
    Bullet.enable = true
    Bullet.alert = true
    Bullet.console = true
    Bullet.rails_logger = true
    # Bullet.add_whitelist :type => :n_plus_one_query, :class_name => "Post", :association => :comments
  end

end
