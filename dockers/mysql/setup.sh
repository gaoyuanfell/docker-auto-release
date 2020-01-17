#!/bin/bash
echo `service mysql status`
service mysql start
echo `service mysql status`

echo '开始导入数据....'

#导入数据

# mysql -uroot -p$MYSQL_ROOT_PASSWORD <<EOF
# source /mysql/mysql.sql;
# EOF

echo '导入数据完毕....'