# bookmarkapi
API Rest for Bookmarks
TEST for Keeper Solutions

#HOW TO DEPLOY<br>
<ol>
    <li>clone the repository : git clone https://github.com/cesarmayta/bookmarkapi.git</li>
    <li>create an virtual env and activated : python -m venv venv
    source venv/scripts/activate</li>
    <li>install dependencies : pip install -r requirements.txt</li>
    <li>create database and tables : python manage.py migrate</li>
    <li>create an admin user : python manage.py createsuperuser</li>
    <li>deploy the project : python manage.py runserver</li>
</ol>

#PRINCIPAL END POINT
# for see public bookmarks
http://localhost:8000/publicbookmark

#for manage bookmarks

http://localhost:8000/bookmark - ACCEPT GET AND POST METHODS WITH BASIC AUTHENTICATION


http://localhost:8000/bookmark/bookmarkId - ACCEPT PUT AND DELETE METHODS WITH BASIC AUTHENTICATION

