FROM mysql:5.7
# 设置免密登录
# ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
ENV MYSQL_ROOT_PASSWORD mysqlroot
COPY mysql.sql /mysql/mysql.sql
COPY setup.sh /mysql/setup.sh
RUN chmod a+x /mysql/setup.sh
CMD ["sh", "/mysql/setup.sh"]
EXPOSE 3306