-- 连接查询示例
-- 假设我们有以下两个表：
-- users (id, name, department_id)
-- departments (id, name, location)

-- 1. 内连接 (INNER JOIN) - 返回两个表中匹配的行
SELECT users.id, users.name, departments.name AS department_name
FROM users
INNER JOIN departments ON users.department_id = departments.id;

-- 2. 左连接 (LEFT JOIN) - 返回左表所有行，右表匹配的行，无匹配则为NULL
SELECT users.id, users.name, departments.name AS department_name
FROM users
LEFT JOIN departments ON users.department_id = departments.id;

-- 3. 右连接 (RIGHT JOIN) - 返回右表所有行，左表匹配的行，无匹配则为NULL
SELECT users.id, users.name, departments.name AS department_name
FROM users
RIGHT JOIN departments ON users.department_id = departments.id;

-- 4. 全连接 (FULL JOIN) - 返回左右表所有行，无匹配则为NULL
-- 注意：MySQL不支持FULL JOIN，可以使用UNION替代
SELECT users.id, users.name, departments.name AS department_name
FROM users
LEFT JOIN departments ON users.department_id = departments.id
UNION
SELECT users.id, users.name, departments.name AS department_name
FROM users
RIGHT JOIN departments ON users.department_id = departments.id;

-- 5. 自连接 (SELF JOIN) - 表连接自身
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;

-- 6. 交叉连接 (CROSS JOIN) - 返回两个表的笛卡尔积
SELECT users.name, departments.name AS department_name
FROM users
CROSS JOIN departments;

-- 7. 使用别名简化查询
SELECT u.id, u.name, d.name AS dept_name, d.location
FROM users u
INNER JOIN departments d ON u.department_id = d.id;

-- 8. 多表连接
-- 假设还有第三个表：projects (id, name, department_id)
SELECT u.name AS user_name, d.name AS dept_name, p.name AS project_name
FROM users u
INNER JOIN departments d ON u.department_id = d.id
INNER JOIN projects p ON d.id = p.department_id;

-- 9. 带条件的连接
SELECT u.name, d.name AS dept_name
FROM users u
INNER JOIN departments d ON u.department_id = d.id
WHERE d.location = '北京' AND u.age > 25;

-- 10. 连接+聚合函数
SELECT d.name AS dept_name, COUNT(u.id) AS user_count
FROM departments d
LEFT JOIN users u ON d.id = u.department_id
GROUP BY d.name
ORDER BY user_count DESC;