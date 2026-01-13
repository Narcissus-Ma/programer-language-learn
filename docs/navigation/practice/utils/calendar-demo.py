# title: 显示指定年份和月份的日历
import calendar

# 输入年份和月份
year = 2026
month = 2

# 显示日历
print(calendar.month(year, month))
print(calendar.monthrange(year, month))