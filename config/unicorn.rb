worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)
ENV['RAILS_ENV'] == 'development' ? timeout(90) : timeout(15)
preload_app true

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  ActiveRecord::Base.connection.disconnect! if defined?(ActiveRecord::Base)

  # if defined?(Resque) and Rails.env.production?
  #   Resque.redis.quit
  #   Rails.logger.info('Disconnected from Redis')
  # end
end  

after_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  end
  
  ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)

  # if defined?(Resque) and Rails.env.production?
  #   Resque.redis = ENV['REDIS_URI']
  #   Rails.logger.info('Connected to Redis')
  # end
end
