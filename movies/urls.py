from django.urls import path
from .views import Index
from .api.views import MovieList, MovieDetail

app_name = "movies"
urlpatterns = [
    path("", Index.as_view(), name="index"),
    path("api/movies/", MovieList.as_view(), name="movie-list"),
    path("api/movies/<int:pk>/", MovieDetail.as_view(), name="movie-detail")
]