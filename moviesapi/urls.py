from django.contrib import admin
from django.urls import include, path, re_path
from movies.views import Index

urlpatterns = [
    path('admin/', admin.site.urls),
    path("movies/", include("movies.urls", namespace="movies")),
    re_path(r"^.*$", Index.as_view(), name="spa-entry-point")
]
