#!/bin/bash
echo '开始导入数据....'
#导入数据
mysql -uroot -p$MYSQL_ROOT_PASSWORD <<EOF
source $WORK_PATH/$FILE_0;
source $WORK_PATH/$FILE_1;
EOF
echo '数据导入完毕....'