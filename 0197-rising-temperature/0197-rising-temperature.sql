# Write your MySQL query statement below
SELECT W.id 
FROM Weather W
JOIN Weather c
ON W.recordDate =DATE_ADD(c.recordDate,INTERVAL 1 DAY)
AND W.temperature>c.temperature;

