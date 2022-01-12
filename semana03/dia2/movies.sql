select * from movie;
select count(*) from movie;
describe movie;
select title,overview,popularity,release_date,revenue from movie;
select * from movie where title = 'star wars';
select * from movie where title like '%star wars%';
select * from movie where title like '%django%';
select * from movie where revenue >= 1000000 and revenue <= 3000000;
select * from movie where revenue BETWEEN 1000000 and 3000000;
select * from movie order by revenue asc limit 1;

select avg(revenue) from movie;

select * from movie where revenue > (select avg(revenue) from movie);

select DISTINCT runtime from movie where runtime > 200 order by runtime;
select year(release_date) from movie where title like '%star wars: Episode%';

select * from movie where year(release_date)
 in (select year(release_date) from movie where title like '%star wars: Episode%');

select DATE_ADD(CURRENT_DATE(),INTERVAL -365*2 DAY);
select EXTRACT(MONTH FROM CURRENT_DATE()),EXTRACT(DAY FROM CURRENT_DATE());

SELECT DATEDIFF(CURRENT_DATE(),'1983-01-30')/365 AS años;
select * from movie where release_date >= (select DATE_ADD(CURRENT_DATE(),INTERVAL -365*10 DAY));

select * from movie order by release_date desc;

select count(*) from movie
where year(release_date) = 2016;

select year(release_date),count(*)
from movie
where year(release_date) >= 2000
group by year(release_date)
having count(*) > 200
order by count(*) desc
