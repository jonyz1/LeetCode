# Write your MySQL query statement below
SELECT p.product_name,year,price FROM SALES s
LEFT JOIN PRODUCT p
ON p.product_id=s.product_id;