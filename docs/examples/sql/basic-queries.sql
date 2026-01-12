-- 基础查询示例
-- 1. 选择所有列
SELECT * FROM users;

-- 2. 选择特定列
SELECT id, name, email FROM users;

-- 3. 使用别名
SELECT id AS user_id, name AS user_name, email FROM users;

-- 4. 过滤数据 (WHERE子句)
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE status = 'active';
SELECT * FROM users WHERE name LIKE '%张%'; -- 模糊查询

-- 5. 排序 (ORDER BY)
SELECT * FROM users ORDER BY age ASC; -- 升序
SELECT * FROM users ORDER BY created_at DESC; -- 降序
SELECT * FROM users ORDER BY age ASC, name DESC; -- 多列排序

-- 6. 限制结果数量 (LIMIT)
SELECT * FROM users LIMIT 10; -- 返回前10行
SELECT * FROM users LIMIT 5 OFFSET 10; -- 从第11行开始返回5行

-- 7. 去重 (DISTINCT)
SELECT DISTINCT status FROM users;
SELECT DISTINCT city, country FROM users;

-- 8. 计算列
SELECT name, age, (2025 - YEAR(birth_date)) AS calculated_age FROM users;
SELECT product_name, price, (price * 0.08) AS tax FROM products;

-- 9. 条件表达式 (CASE)
SELECT 
    name,
    age,
    CASE 
        WHEN age < 18 THEN '未成年'
        WHEN age BETWEEN 18 AND 65 THEN '成年'
        ELSE '老年'
    END AS age_group
FROM users;

-- 10. 聚合函数
SELECT COUNT(*) AS total_users FROM users; -- 总记录数
SELECT COUNT(DISTINCT email) AS unique_emails FROM users; -- 唯一值计数
SELECT AVG(age) AS average_age FROM users; -- 平均值
SELECT SUM(price) AS total_sales FROM orders; -- 总和
SELECT MAX(age) AS max_age, MIN(age) AS min_age FROM users; -- 最大值和最小值