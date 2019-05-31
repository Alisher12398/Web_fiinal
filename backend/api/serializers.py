from rest_framework import serializers
from api.models import Product, UserProduct
from auth_.serializers import UserSerializer


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    price = serializers.IntegerField(required=True)
    quantity = serializers.IntegerField(required=True)


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
    product = ProductSerializer(read_only=True)
    count = serializers.IntegerField(required=True)

    def create(self, validated_data):
        userProduct = UserProduct(**validated_data)
        userProduct.save()
        return userProduct

    def update(self, instance, validated_data):
        instance.count = validated_data.get('count',instance.count)
        instance.save()
        return instance
