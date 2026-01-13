-- title: 窗口函数
-- 假设我们有一个orders表：orders (id, user_id, product_id, amount, order_date)

-- 1. 基本窗口函数
-- 计算每个用户的订单总金额和平均金额
SELECT 
    user_id,
    order_date,
    amount,
    SUM(amount) OVER (PARTITION BY user_id) AS total_amount,
    AVG(amount) OVER (PARTITION BY user_id) AS avg_amount
FROM orders;

-- 2. 带排序的窗口函数
-- 计算累积金额
SELECT 
    user_id,
    order_date,
    amount,
    SUM(amount) OVER (PARTITION BY user_id ORDER BY order_date) AS cumulative_amount
FROM orders;

-- 3. 排名函数
-- ROW_NUMBER() - 为每行分配唯一序号
-- RANK() - 相同值有相同排名，下一名会跳过
-- DENSE_RANK() - 相同值有相同排名，下一名不会跳过
SELECT 
    user_id,
    amount,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY amount DESC) AS row_num,
    RANK() OVER (PARTITION BY user_id ORDER BY amount DESC) AS rank_num,
    DENSE_RANK() OVER (PARTITION BY user_id ORDER BY amount DESC) AS dense_rank_num
FROM orders;

-- 4. 窗口框架
-- 计算当前行及前一行的金额总和
SELECT 
    user_id,
    order_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY user_id 
        ORDER BY order_date 
        ROWS BETWEEN 1 PRECEDING AND CURRENT ROW
    ) AS rolling_sum
FROM orders;

-- 5. 计算百分比
SELECT 
    user_id,
    amount,
    SUM(amount) OVER (PARTITION BY user_id) AS total_amount,
    ROUND((amount * 100.0) / SUM(amount) OVER (PARTITION BY user_id), 2) AS percentage
FROM orders;

-- 6. 滞后和领先函数
-- LAG() - 获取前一行数据
-- LEAD() - 获取后一行数据
SELECT 
    user_id,
    order_date,
    amount,
    LAG(amount, 1, 0) OVER (PARTITION BY user_id ORDER BY order_date) AS prev_amount,
    LEAD(amount, 1, 0) OVER (PARTITION BY user_id ORDER BY order_date) AS next_amount,
    amount - LAG(amount, 1, 0) OVER (PARTITION BY user_id ORDER BY order_date) AS diff_from_prev
FROM orders;

-- 7. 分组内的首行和末行
SELECT 
    user_id,
    order_date,
    amount,
    FIRST_VALUE(amount) OVER (PARTITION BY user_id ORDER BY order_date) AS first_order_amount,
    LAST_VALUE(amount) OVER (
        PARTITION BY user_id 
        ORDER BY order_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS last_order_amount
FROM orders;

-- 8. 窗口函数与聚合函数结合
SELECT 
    user_id,
    COUNT(*) AS order_count,
    AVG(amount) AS avg_amount,
    MAX(amount) AS max_amount
FROM (
    SELECT 
        user_id,
        amount,
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY order_date) AS row_num
    FROM orders
) t
GROUP BY user_id;

-- 9. 使用窗口函数进行分组过滤
-- 查找每个用户的最大金额订单
SELECT *
FROM (
    SELECT 
        *, 
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY amount DESC) AS row_num
    FROM orders
) t
WHERE row_num = 1;