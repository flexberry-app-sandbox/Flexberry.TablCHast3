docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tablchast3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tablchast3/app ../..
