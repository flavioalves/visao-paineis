CarrierWave.configure do |config|
  config.cache_dir = Rails.root.join 'tmp', 'uploads'
  # config.fog_credentials = {
  #   provider:               'AWS',
  #   aws_access_key_id:      ENV['S3_KEY'],
  #   aws_secret_access_key:  ENV['S3_SECRET'],
  #   region:                 ENV['S3_REGION'],
  #   dsn:                   's3.example.com'
  # }
  # config.fog_directory  = ENV['S3_BUCKET']
  config.storage = :file
  config.enable_processing = false if Rails.env.test? or Rails.env.cucumber?
end



# CarrierWave.configure do |config|
#   config.fog_credentials = {
#     :provider               => 'AWS',                        # required
#     :aws_access_key_id      => 'xxx',                        # required
#     :aws_secret_access_key  => 'yyy',                        # required
#     :region                 => 'eu-west-1',                  # optional, defaults to 'us-east-1'
#     :host                   => 's3.example.com',             # optional, defaults to nil
#     :endpoint               => 'https://s3.example.com:8080' # optional, defaults to nil
#   }
#   config.fog_directory  = 'name_of_directory'                     # required
#   config.fog_public     = false                                   # optional, defaults to true
#   config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}
# end