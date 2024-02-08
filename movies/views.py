from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer

class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all().reverse()
    serializer_class = MovieSerializer

class MovieDetail(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer