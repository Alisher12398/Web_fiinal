from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    name = models.CharField('Name', max_length=60)
    price = models.IntegerField('Price')
    quantity = models.IntegerField('Quantity', default=0)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class UserProductManager(models.Manager):
    def for_user(self, user):
        return self.filter(user=user)


class UserProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    count = models.IntegerField('Count', default=0)

    objects = UserProductManager()