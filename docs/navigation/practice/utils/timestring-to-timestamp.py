# title: 将时间字符串转换为时间戳
import time

def timestring_to_timestamp(timestring):
    try:
        timestamp = time.mktime(time.strptime(timestring, "%Y-%m-%d %H:%M:%S"))
    except ValueError:
        return None
    return timestamp

def main():
    timestring = "2023-03-20 14:20:00"
    timestamp = timestring_to_timestamp(timestring)
    if timestamp is None:
        print("时间字符串格式错误")
    else:
        print(f"{timestring} 对应的时间戳为 {timestamp}")

if __name__ == '__main__':
    main()
