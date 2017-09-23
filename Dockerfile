FROM ubuntu
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "ruby-dev", "-y"]
RUN ["apt-get","install","rubygems", "-y"]
RUN ["apt-get","install","gcc", "-y"]
RUN ["apt-get","install","make", "-y"]
RUN ["gem","install","jekyll", "bundler"]
RUN ["gem","install","rake", "minima","jekyll-feed"]
RUN ["apt-get","install","git", "-y"]

VOLUME ["/app"]
VOLUME ["/scripts"]