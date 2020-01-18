FROM mysql:5.7

#定义工作目录变量
ENV WORK_PATH /usr/local/work

#定义会被容器自动执行的目录
ENV AUTO_RUN_DIR /docker-entrypoint-initdb.d

#定义要执行的sql文件名
ENV FILE_0 database.sql
ENV FILE_1 mysql.sql

#定义要执行的shell文件名
ENV CREATE_DATA_SHELL setup.sh

#定义mysql密码
ENV MYSQL_ROOT_PASSWORD mysqlroot

#创建工作文件目录
RUN mkdir -p $WORK_PATH

#把sql文件复制到工作目录下
COPY ./$FILE_0 $WORK_PATH/
COPY ./$FILE_1 $WORK_PATH/

#把要执行的shell文件放到/docker-entrypoint-initdb.d/目录下，容器会自动执行这个shell
COPY ./$CREATE_DATA_SHELL $AUTO_RUN_DIR/

#给执行文件增加可执行权限
RUN chmod a+x $AUTO_RUN_DIR/$CREATE_DATA_SHELL

# 设置免密登录
# ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
# ENV MYSQL_ROOT_PASSWORD mysqlroot
# COPY mysql.sql /usr/local/bin/mysql.sql
# COPY setup.sh /usr/local/bin/setup.sh
# RUN chmod a+x /usr/local/bin/setup.sh

# EXPOSE 3306 33060
# CMD ["mysqld"]

# ENTRYPOINT ["/mysql/setup.sh"]