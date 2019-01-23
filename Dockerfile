FROM registry-internal.cn-hangzhou.aliyuncs.com/agh/nginx:1.1.0
MAINTAINER Dayu <yugw@51guanhuai.cn>

RUN mkdir -p /data/www && mkdir /data/log
ADD DockerRewrite/ /
ADD dist/ /data/www/
RUN chown -R www-data:www-data /data/www && chmod +x /root/entrypoint.sh


ENTRYPOINT ["/root/entrypoint.sh"]
CMD ["nginx"]