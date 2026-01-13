
# title: 获取昨天的日期
import datetime

# 获取昨天的日期
yesterday = datetime.date.today() - datetime.timedelta(days=1)

# 打印昨天的日期
print(yesterday)