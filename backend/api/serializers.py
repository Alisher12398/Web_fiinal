from rest_framework import serializers
from api.models import Product, UserProduct
from auth_.serializers import UserSerializer


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    price = serializers.IntegerField(required=True)
    quantity = serializers.IntegerField(required=True)

    def create(self, validated_data):
        product = Product(**validated_data)
        product.save()
        return product

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price',instance.price)
        instance.quantity = validated_data.get('quantity',instance.quantity)
        instance.save()
        return instance

class ProductModelSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField(read_only=True)
    # name = serializers.CharField()
    # price = serializers.IntegerField()
    # quantity = serializers.IntegerField()
    class Meta:
        model = Product
        fields = '__all__'


class UserProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = UserSerializer(read_only=True)
    product = ProductModelSerializer(read_only=True)
    count = serializers.IntegerField(required=True)

    def create(self, validated_data):
        userProduct = UserProduct(**validated_data)
        userProduct.save()
        return userProduct

    def update(self, instance, validated_data):
        instance.product = validated_data.get('product', instance.name)
        instance.count = validated_data.get('count',instance.phone)
        instance.save()
        return instance
