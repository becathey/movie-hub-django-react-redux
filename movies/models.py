from django.db import models

class Movie(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default="")
    director = models.CharField(max_length=100)
    release_year = models.PositiveBigIntegerField()
    image = models.CharField(max_length=100)
    description = models.TextField()
    genre = models.CharField(max_length=100)
    rating = models.FloatField()

    class Meta:
        ordering = ["rating"]
    
    def __str__(self):
        return self.title