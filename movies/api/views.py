from rest_framework import generics
from movies.models import Movie
from movies.serializers import MovieSerializer

class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all().reverse()
    serializer_class = MovieSerializer

class MovieDetail(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer