from django.views.decorators.csrf import \
    csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from api.models import UserProduct, Product
from django.http import JsonResponse
from api.serializers import UserSerializer, UserProductSerializer, ProductSerializer


@api_view(['GET', 'POST'])
def user_products(request):
    if request.method == 'GET':
        userProducts = UserProduct.objects.for_user(request.user)
        serializer = UserProductSerializer(userProducts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def user_products_detail(request, pk):
    try:
        userProducts = UserProduct.objects.for_user(request.user).get(id=pk)
    except UserProduct.DoesNotExist as e:
        return Response({'error': f'{e}'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserProductSerializer(userProducts)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserProductSerializer(instance=userProducts, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == 'DELETE':
        userProducts.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
@api_view(['PUT'])
def user_products_detail2(request, name):
    #obj2 = Data.objects.get(id_group = id_group, id_user=id_user)
    user2 = request.user
    product2 = Product.objects.get(name = name)
    count2 = UserProduct.objects.for_user(request.user).get(product=product2).count
    count3 = count2 + 1
    obj = UserProduct.objects.for_user(request.user).filter(product=product2).update(count=count3)
    return JsonResponse(status=status.HTTP_204_NO_CONTENT)

